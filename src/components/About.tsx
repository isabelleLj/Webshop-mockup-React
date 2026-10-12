function About() {
  return (
    <div className="min-h-screen bg-warm-white px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-brand-dark">
          About my webshop
        </h1>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-600">
          This is my webshop built with React, TypeScript, Vite, Tailwind CSS,
          React Router, TanStack Query, clsx and shadcn/ui.
        </p>

        <div>
          <p className="mb-6 text-xl font-semibold text-brand-dark">
            My skills and technologies
          </p>
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-lg font-semibold text-brand-dark">
              Programming Languages
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              {" "}
              HTML/JSX CSS JavaScript TypeScript{" "}
            </p>{" "}
            <h2 className="mb-3 text-lg font-semibold text-brand-dark">
              Frameworks and Libraries
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              React, Vite, Tailwind CSS, React Router DOM, TanStack Query,
              shadcn/ui and clsx
            </p>
            <h2 className="mb-3 text-lg font-semibold text-brand-dark">
              Data and APIs
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              REST APIs, DummyJSON, Fetch API, JSON, asynchronous programming
              and React Query caching
            </p>
            <h2 className="mb-3 text-lg font-semibold text-brand-dark">
              Development Skills
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Functional components, props, TypeScript types, useState,
              useEffect, useParams, Context API, custom hooks, conditional
              rendering, list rendering and event handling
            </p>
            <h2 className="mb-3 text-lg font-semibold text-brand-dark">
              Webshop Features
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Product listings and product details, search, category filtering,
              shopping cart, total price calculation, discount calculation,
              routing, navigation, loading states and error handling
            </p>
            <h2 className="mb-3 text-lg font-semibold text-brand-dark">
              UI/UX and Responsive Design
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Responsive design, Flexbox, CSS Grid, Tailwind CSS utility
              classes, design systems, reusable UI components, hover effects,
              transitions and visual hierarchy
            </p>
            <h2 className="mb-3 text-lg font-semibold text-brand-dark">
              Development Tools
            </h2>
            <p className="leading-relaxed text-gray-600">
              Visual Studio Code, npm, Vite development server, browser
              DevTools, debugging and modular code structure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
