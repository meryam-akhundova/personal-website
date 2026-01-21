export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-foreground/60">
          © {currentYear} Meryam Akhundova. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
