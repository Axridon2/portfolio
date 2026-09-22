export default function Footer({ location }: { location: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="print:hidden border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-sm text-muted">
        <span>
          © {year} Adnane Serroukh
        </span>
        <span>{location}</span>
      </div>
    </footer>
  );
}
