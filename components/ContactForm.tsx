import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { EMAILJS_CONFIG } from '../emailConfig';

interface ContactFormProps {
  onSuccess: () => void;
}

interface LanguageSkill {
  id: number;
  language: string;
  proficiency: string;
}

// Security: Input sanitization to prevent XSS attacks
const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
};

// Security: Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    license: '',
    experience: '',
    appointmentDate: '',
    message: ''
  });

  // Dynamic languages state
  const [languages, setLanguages] = useState<LanguageSkill[]>([
    { id: Date.now(), language: '', proficiency: '' }
  ]);

  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // 25MB check
      if (selectedFile.size > 25 * 1024 * 1024) {
        alert("El archivo excede el límite de 25MB.");
        e.target.value = '';
        return;
      }
      setFile(selectedFile);
    }
  };

  // Language handlers
  const addLanguage = () => {
    setLanguages(prev => [...prev, { id: Date.now(), language: '', proficiency: '' }]);
  };

  const removeLanguage = (id: number) => {
    if (languages.length > 1) {
      setLanguages(prev => prev.filter(l => l.id !== id));
    }
  };

  const updateLanguage = (id: number, field: 'language' | 'proficiency', value: string) => {
    setLanguages(prev => prev.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  const validatePhone = (phone: string) => {
    // Basic validation: allows +, (), -, space, and digits. Min length 7.
    const phoneRegex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 7;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Security: Validate email format
    if (!isValidEmail(formData.email)) {
      alert("Por favor, introduce un email válido.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert("Por favor, introduce un número de teléfono válido.");
      return;
    }

    setIsSubmitting(true);

    // Security: Sanitize all user inputs before processing
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      license: sanitizeInput(formData.license),
      experience: sanitizeInput(formData.experience),
      appointmentDate: sanitizeInput(formData.appointmentDate),
      message: sanitizeInput(formData.message)
    };

    const languagesStr = languages
      .map(l => `${sanitizeInput(l.language)} (${sanitizeInput(l.proficiency)})`)
      .filter(l => l.length > 3)
      .join(', ');

    try {
      let resumeUrl = '';

      // 1. Upload File (Attempt)
      if (file) {
        try {
          const fileExt = file.name.split('.').pop();
          // Security: Sanitize filename - only allow alphanumeric and underscores
          const sanitizedName = sanitizedData.name.replace(/[^a-zA-Z0-9]/g, '_');
          const fileName = `${Date.now()}_${sanitizedName}.${fileExt}`;
          const filePath = `applicants/${fileName}`;

          const { error: uploadError } = await supabase.storage
            .from('resumes')
            .upload(filePath, file);

          if (uploadError) {
            console.warn("Upload error (Bucket/RLS):", uploadError);
            resumeUrl = "Error: Failed to upload to Supabase Storage";
          } else {
            const { data: urlData } = supabase.storage
              .from('resumes')
              .getPublicUrl(filePath);
            resumeUrl = urlData.publicUrl;
          }
        } catch (err) {
          console.warn("Upload exception:", err);
          resumeUrl = "Error: Upload Exception";
        }
      }

      // 2. Insert Data to Supabase (using sanitized data)
      const { data: insertData, error: insertError } = await supabase
        .from('applicants')
        .insert([
          {
            full_name: sanitizedData.name,
            email: sanitizedData.email,
            phone: sanitizedData.phone,
            license_status: sanitizedData.license,
            experience_years: sanitizedData.experience,
            appointment_date: sanitizedData.appointmentDate,
            resume_url: resumeUrl,
            languages: languagesStr,
            language_proficiency: 'See languages column',
            created_at: new Date().toISOString()
          }
        ])
        .select()
        .single();

      if (insertError) {
        console.warn('Supabase insert error:', insertError);
        throw insertError;
      }

      // 3. Call Edge Function to send email
      const { error: functionError } = await supabase.functions.invoke('send-resume-email', {
        body: {
          id: insertData.id,
          full_name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          license_status: sanitizedData.license,
          experience_years: sanitizedData.experience,
          resume_url: resumeUrl,
          languages: languagesStr
        }
      });

      if (functionError) {
        console.warn('Edge Function error:', functionError);
        // Fallback to mailto if Edge Function fails
        const subject = `Nueva Solicitud de Agente: ${sanitizedData.name}`;
        const body = `
Nueva solicitud de reclutamiento:

Nombre: ${sanitizedData.name}
Email: ${sanitizedData.email}
Teléfono: ${sanitizedData.phone}
Licencia: ${sanitizedData.license}
Experiencia: ${sanitizedData.experience}
Fecha Cita: ${sanitizedData.appointmentDate}
Idiomas: ${languagesStr}
Mensaje: ${sanitizedData.message}

Enlace al CV: ${resumeUrl || 'No se adjuntó archivo'}
        `.trim();

        window.open(`mailto:${EMAILJS_CONFIG.TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      }

      onSuccess();

    } catch (error) {
      console.error('Form submission error:', error);

      // Final fallback: Open mailto (using sanitized data)
      const subject = `Nueva Solicitud: ${sanitizedData.name}`;
      const body = `
Nombre: ${sanitizedData.name}
Email: ${sanitizedData.email}
Teléfono: ${sanitizedData.phone}
Licencia: ${sanitizedData.license}
Experiencia: ${sanitizedData.experience}
Fecha Cita: ${sanitizedData.appointmentDate}
Idiomas: ${languagesStr}
Mensaje: ${sanitizedData.message}

(Nota: El envío automático falló. Por favor, complete el envío manualmente).
      `.trim();

      window.open(`mailto:${EMAILJS_CONFIG.TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);

      onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="relative bg-surface-darker py-24 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Únete al equipo</span>
            <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl mb-8 font-normal leading-tight">
              Define tu <br /><span className="italic text-gray-500">Legado</span>
            </h2>
            <p className="text-lg text-gray-400 font-light mb-12">
              Estamos buscando agentes con visión y determinación. Completa el formulario para una consulta privada sobre tu futuro en Brickell Realty Group.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <h4 className="text-3xl text-white font-serif mb-2">95%</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Retención de Agentes</p>
              </div>
              <div>
                <h4 className="text-3xl text-white font-serif mb-2">$2B+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Volumen de Ventas</p>
              </div>
            </div>
          </div>

          <div className="bg-background-dark p-8 md:p-12 border border-white/5 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full"></div>
            <h3 className="mb-8 text-2xl text-white font-serif">Solicitud de Cita</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Name Row */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors" htmlFor="name">
                  Nombre completo
                </label>
                <input
                  required
                  className="block w-full border-b border-gray-700 bg-transparent py-3 text-white placeholder-transparent focus:border-primary focus:ring-0 sm:text-lg transition-colors focus:outline-none"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors" htmlFor="email">
                    Email
                  </label>
                  <input
                    required
                    className="block w-full border-b border-gray-700 bg-transparent py-3 text-white placeholder-transparent focus:border-primary focus:ring-0 sm:text-lg transition-colors focus:outline-none"
                    id="email"
                    name="email"
                    placeholder="email@ejemplo.com"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors" htmlFor="phone">
                    Teléfono
                  </label>
                  <input
                    required
                    className="block w-full border-b border-gray-700 bg-transparent py-3 text-white placeholder-transparent focus:border-primary focus:ring-0 sm:text-lg transition-colors focus:outline-none"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors" htmlFor="license">
                    Licencia de Realtor
                  </label>
                  <select
                    required
                    className="block w-full border-b border-gray-700 bg-transparent py-3 text-white focus:border-primary focus:ring-0 sm:text-sm appearance-none cursor-pointer focus:outline-none"
                    id="license"
                    name="license"
                    value={formData.license}
                    onChange={handleInputChange}
                  >
                    <option className="bg-surface-darker text-gray-400" value="">Seleccionar...</option>
                    <option className="bg-surface-darker" value="Activa">Sí, activa</option>
                    <option className="bg-surface-darker" value="En proceso">En proceso</option>
                    <option className="bg-surface-darker" value="No">No</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors" htmlFor="experience">
                    Experiencia
                  </label>
                  <select
                    required
                    className="block w-full border-b border-gray-700 bg-transparent py-3 text-white focus:border-primary focus:ring-0 sm:text-sm appearance-none cursor-pointer focus:outline-none"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option className="bg-surface-darker text-gray-400" value="">Seleccionar...</option>
                    <option className="bg-surface-darker" value="Menos de 1 año">Menos de 1 año</option>
                    <option className="bg-surface-darker" value="1-3 años">1-3 años</option>
                    <option className="bg-surface-darker" value="3-5 años">3-5 años</option>
                    <option className="bg-surface-darker" value="5+ años">5+ años</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Languages Section */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors">Idiomas</label>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.id} className="flex gap-4 items-end animate-in fade-in slide-in-from-top-1">
                      <div className="group flex-grow">
                        <input
                          required
                          className="block w-full border-b border-gray-700 bg-transparent py-3 text-white placeholder-transparent focus:border-primary focus:ring-0 sm:text-lg transition-colors focus:outline-none"
                          placeholder="Ej. Español"
                          type="text"
                          value={lang.language}
                          onChange={(e) => updateLanguage(lang.id, 'language', e.target.value)}
                        />
                      </div>
                      <div className="group w-1/3">
                        <label className="block text-[10px] uppercase tracking-widest text-gray-600 mb-1">Nivel</label>
                        <select
                          required
                          className="block w-full border-b border-gray-700 bg-transparent py-3 text-white focus:border-primary focus:ring-0 sm:text-sm appearance-none cursor-pointer focus:outline-none"
                          value={lang.proficiency}
                          onChange={(e) => updateLanguage(lang.id, 'proficiency', e.target.value)}
                        >
                          <option className="bg-surface-darker text-gray-400" value="">Seleccionar...</option>
                          <option className="bg-surface-darker" value="Básico">Básico</option>
                          <option className="bg-surface-darker" value="Intermedio">Intermedio</option>
                          <option className="bg-surface-darker" value="Avanzado">Avanzado</option>
                          <option className="bg-surface-darker" value="Nativo">Nativo</option>
                        </select>
                      </div>
                      <div className="pb-3">
                        {languages.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeLanguage(lang.id)}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                            title="Eliminar idioma"
                          >
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addLanguage}
                  className="mt-4 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-lg">add</span> Agregar otro idioma
                </button>
              </div>

              {/* Appointment Date Section */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors" htmlFor="appointmentDate">
                  Fecha de Cita (A partir del 6 de Enero)
                </label>
                <div className="relative">
                  <input
                    required
                    style={{ colorScheme: 'dark' }}
                    className="block w-full border-b border-gray-700 bg-transparent py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-0 sm:text-lg transition-colors focus:outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                    id="appointmentDate"
                    name="appointmentDate"
                    type="date"
                    min="2025-01-06"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Message Section */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary transition-colors" htmlFor="message">
                  Mensaje Adicional
                </label>
                <textarea
                  className="block w-full border-b border-gray-700 bg-transparent py-3 text-white placeholder-transparent focus:border-primary focus:ring-0 sm:text-lg transition-colors focus:outline-none resize-none"
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Mensaje adicional..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              {/* CV Section */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">CV / Resumen Profesional (Max 25MB)</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-24 border border-gray-700 border-dashed cursor-pointer hover:bg-surface-dark hover:border-primary transition-all" htmlFor="dropzone-file">
                    <div className="flex flex-row items-center justify-center gap-3 pt-5 pb-6">
                      <span className="material-symbols-outlined text-gray-400">upload_file</span>
                      <p className="text-sm text-gray-400">
                        {file ? <span className="text-primary font-semibold">{file.name}</span> : <><span className="font-semibold text-white">Click para subir</span> o arrastrar PDF</>}
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#A5823F' }}
                  className="w-full text-black py-4 px-8 text-sm font-bold uppercase tracking-widest hover:bg-white disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;