type HeaderProps = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="bg-warm-white px-6 py-10 text-center md:py-14">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-brand-dark md:text-6xl">
          {title}
        </h1>

        <p className="mt-5 text-lg text-gray-600 md:text-xl">{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
