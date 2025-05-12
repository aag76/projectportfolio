# Personal Student Portfolio Project
- **Magician Archetype**
- **Data Visualization Project**
- **AI Streaming Chat Project**
- **Historical Weather Tracker**
- **Functioal Contact Form**
- **Deployable on Vercel**

This project is a Next.js application styled with Tailwind and hosted on Vercel that displays several projects as well as styled and branded according to the Magician Archetype.


# Student Portfolio Starter Project

This project provides a baseline Next.js application that you can use as a starting point for creating your professional portfolio. Built with modern web technologies, it offers a solid foundation that you can customize to showcase your skills, projects, and experiences.

## Tech Stack

- **[Next.js](https://nextjs.org/)** - React framework with server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed programming language
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS
- **ESLint** - Code quality and consistency
- **Modern UI Components** - Pre-built components in `src/components/ui`

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v18 or newer)
- npm or yarn package manager

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd contentGen322
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── docs/                   # Design system documentation
├── public/                 # Static assets (images, etc.)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global CSS
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   └── ui/             # Reusable UI components
│   └── lib/                # Utility functions
└── tailwind.config.mjs     # Tailwind CSS configuration
```

## Customizing Your Portfolio

1. **Personal Information**: Modify the content in `src/app/page.tsx` to include your name, bio, and introduction.

2. **Projects**: Create new components to showcase your projects and add them to your pages.

3. **Styling**: Customize the look and feel by modifying `tailwind.config.mjs` and `globals.css`.

4. **Components**: Use the pre-built UI components in `src/components/ui` or create your own.

## Design Documentation

Check the `docs/` directory for guidance on:
- Brand foundation
- Typography
- Color system
- Spacing and layout
- Components
- Implementation guidelines

## Working with the Design System and AI Tools

The `docs/` directory contains comprehensive design system documentation that serves as a blueprint for your portfolio. Here's how to make the most of these resources with AI coding assistants:

### Using the Documentation

1. **Start with the Foundation**: Begin by reviewing `01-brand-foundation.md` and `02-typography.md` to understand the core design principles.

2. **Follow the Progression**: The documentation files are numbered in a recommended reading order, building from foundational concepts to specific implementation details.

3. **Reference as Needed**: As you develop different aspects of your portfolio, refer to the relevant documentation (e.g., check `03-color-system.md` when working on visual styling).

### Tips for Working with AI Autocoders

1. **Share Context**: When asking AI tools for help, reference specific documentation files to provide important context. For example: "Help me implement a button according to the design system in docs/05-components.md."

2. **Use Documentation as Prompts**: Extract design specifications and requirements from the documentation to create effective prompts for AI assistance.

3. **Iterative Approach**: Start with a basic implementation suggested by AI, then refine it by referencing the appropriate documentation and asking for improvements.

4. **Verify Consistency**: Use the documentation to verify that AI-generated code follows your design system consistently.

5. **Ask for Explanations**: Request that the AI explain how its suggestions align with the design system, which helps you understand both the code and design principles better.

6. **Learning Opportunity**: Use AI as a teaching tool by asking it to explain why certain design choices were made in the documentation and how they impact the implementation.

7. **Combine Human Creativity with AI Efficiency**: Use AI to handle boilerplate code and implementation details while focusing your creativity on the unique aspects of your portfolio.

By effectively combining the design documentation with AI tools, you'll create a more cohesive, professional portfolio while developing valuable skills in design systems and working with AI assistants.

## Deployment

When you're ready to deploy your portfolio, we recommend using [Vercel](https://vercel.com) for the easiest deployment experience:

1. Create an account on Vercel
2. Connect your GitHub account
3. Import this repository
4. Deploy

Alternatively, you can deploy to any hosting service that supports Next.js applications.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Happy coding! Use this starter project to create an impressive portfolio that stands out to potential employers.
