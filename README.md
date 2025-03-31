# Portfolio Website

A modern and interactive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive UI**: Engaging animations and transitions using Framer Motion
- **Dark/Light Mode**: Theme switching capability
- **Interactive Components**: 
  - Animated hero section with typing effect
  - Project gallery with hover effects
  - Contact form with validation and success/error states
  - Profile image with cursor-following effect
  - Side popup for social links

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI with Shadcn/UI
- **Animations**: 
  - Framer Motion
  - GSAP for text animations
  - Canvas Confetti for form submission effects
- **Form Handling**: React Hook Form with validation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app`: Next.js app router pages
- `/components`: Reusable UI components
- `/components/ui`: Shadcn UI components
- `/public`: Static assets like images

## Customization

### Personal Information
Edit your personal information in the respective component files:

- Hero section: `components/hero-section.js`
- About section: `components/about-section.js`
- Projects: `components/projects-section.js`
- Contact details: `components/contact-section.js`

### Styling
The website uses Tailwind CSS for styling. You can customize:

- Colors: Edit the theme colors in `tailwind.config.js`
- Typography: Modify font settings in `tailwind.config.js`
- Component styles: Each component has its own styling that can be modified

## Deployment

This project can be easily deployed on Vercel:

```bash
npm run build
# or
yarn build
```

For detailed deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Shadcn UI for the component library
- Various open source libraries that made this project possible