#!/bin/bash

# Brickell Realty Group - Setup Script
# This script helps set up the development environment

set -e

echo "🏠 Brickell Realty Group - Setup Script"
echo "========================================"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js 18+."
    exit 1
fi
echo "✅ Node.js $(node -v) detected"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi
echo "✅ npm $(npm -v) detected"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Create public/images directory if it doesn't exist
if [ ! -d "public/images" ]; then
    echo ""
    echo "📁 Creating public/images directory..."
    mkdir -p public/images
fi

# Check for required images
echo ""
echo "🖼️  Checking for required images..."
IMAGES=("gallery-1.png" "gallery-2.png" "gallery-3.png" "gallery-4.png" "hero-bg.png")
MISSING=0

for img in "${IMAGES[@]}"; do
    if [ -f "public/images/$img" ]; then
        echo "   ✅ $img found"
    else
        echo "   ⚠️  $img missing"
        MISSING=1
    fi
done

if [ "$MISSING" -eq 1 ]; then
    echo ""
    echo "⚠️  Some images are missing. Please add them to public/images/"
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    if [ -f ".env.example" ]; then
        echo ""
        echo "📝 Creating .env.local from .env.example..."
        cp .env.example .env.local
        echo "   Please update .env.local with your actual values"
    fi
fi

echo ""
echo "========================================"
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Update .env.local with your EmailJS credentials"
echo "  2. Add missing images to public/images/ if needed"
echo "  3. Run 'npm run dev' to start the development server"
echo ""
echo "For deployment, see DEPLOYMENT_GUIDE.md or QUICK_DEPLOY.md"
echo ""
