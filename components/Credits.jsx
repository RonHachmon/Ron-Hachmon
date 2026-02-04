const Credits = () => {
    const linkClass = "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors duration-200";

    return (
      <footer className="relative z-10 max-w-md text-sm mt-4 text-slate-500 px-2">
        <p>
          Loosely designed in
          <a href="https://www.figma.com/" className={linkClass} target="_blank" rel="noopener noreferrer"> Figma </a>
          and coded in
          <a href="https://code.visualstudio.com/" className={linkClass} target="_blank" rel="noopener noreferrer"> Visual Studio Code</a>.
          <br/>
          Built with
          <a href="https://nextjs.org/" className={linkClass} target="_blank" rel="noopener noreferrer"> Next.js </a>
          and
          <a href="https://tailwindcss.com/" className={linkClass} target="_blank" rel="noopener noreferrer"> Tailwind CSS</a>,
          deployed with
          <a href="https://vercel.com/" className={linkClass} target="_blank" rel="noopener noreferrer"> Vercel</a>.
        </p>
      </footer>
    );
  };

  export default Credits;
  