# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Modern and responsive design
- Interactive animations
- Dark theme
- Customizable sections for showcasing your work
- Contact form
- Social media integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Customization

### Personal Information

1. Update your name and title in `app/page.tsx`
2. Add your profile picture to the `public` directory
3. Update your about information in `components/about-me.tsx`
4. Change contact email in `components/contact-email.tsx`

### Work Experience

Update your work experience in the `timelineData` array in `components/about-me.tsx`.

### Skills

Modify your skills and proficiency levels in the `skillsData` object in `components/about-me.tsx`.

### Projects

Add your projects to the Projects section in `app/page.tsx`.

### Services

Customize the services you offer in the Services section in `app/page.tsx`.

### Social Links

Update your social media links in:
- Footer section of `app/page.tsx`
- Navbar section of `components/navbar.tsx`

## Deployment

This portfolio can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

## License

This project is licensed under the MIT License.

## Acknowledgments

- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/) 