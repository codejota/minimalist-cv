# CV Generator - Next.js Resume Builder

A modern, customizable CV/Resume generator built with Next.js, TypeScript, and Tailwind CSS. Create beautiful, responsive resumes with real-time preview and export options.

![CV Generator Preview](/placeholder.svg?height=400&width=800)

## ✨ Features

- 🎨 Modern UI with dark/light mode support
- 📱 Fully responsive design
- 🔄 Real-time preview
- 📥 Export to PDF/PNG
- 🖨️ Print-friendly layout
- 🔌 GitHub certificates integration
- ⚡ Built with Next.js 14
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📦 shadcn/ui components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cv-generator.git
cd cv-generator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file:

```env
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your application.

## 🛠️ Configuration

Edit `config/resume.ts` to customize your resume content:

- Personal information
- Work experience
- Education
- Skills
- Projects
- Certificates
- Languages
- Social links

## 📦 Project Structure

```
├── app/
│   ├── config/
│   │   └── resume.ts         # Resume configuration
│   ├── components/
│   │   ├── Resume.tsx        # Main resume component
│   │   ├── Certificates.tsx  # Certificates display
│   │   └── ...              # Other components
│   └── layout.tsx            # App layout
├── public/                   # Static assets
├── styles/                   # Global styles
└── package.json             # Dependencies
```

## 🎨 Customization

### Themes

The application supports both light and dark modes. Customize colors in your `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Components

Built with shadcn/ui components for consistent styling and accessibility. Customize components in the `components/ui` directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/cv-generator](https://github.com/yourusername/cv-generator)
