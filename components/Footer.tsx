export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50 section-divider"></div>
      <div className="max-w-6xl mx-auto text-center">
        <p style={{ color: '#543618' }}>
          &copy; {currentYear} Meryam Akhundova. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
