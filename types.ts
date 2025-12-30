export interface Language {
  language: string;
  level: string;
}

export interface RecruitmentFormData {
  fullName: string;
  age: string;
  phone: string;
  email: string;
  hasLicense: string;
  yearsExperience: string;
  languages: Language[];
  appointmentDate: string;
  cv: File | null;
}

export enum IconName {
  Menu = 'menu',
  Close = 'close',
  Signal = 'signal_cellular_alt',
  Wifi = 'wifi',
  Battery = 'battery_full',
  Person = 'person',
  Call = 'call',
  Mail = 'mail',
  Badge = 'badge',
  History = 'history',
  ExpandMore = 'expand_more',
  CloudUpload = 'cloud_upload',
  ArrowForward = 'arrow_forward',
  Public = 'public',
  Token = 'token',
  Architecture = 'architecture',
  School = 'school',
  UploadFile = 'upload_file',
  Add = 'add',
  Delete = 'delete',
  Apartment = 'apartment',
  CalendarToday = 'calendar_today',
  Check = 'check',
  CheckCircle = 'check_circle'
}
