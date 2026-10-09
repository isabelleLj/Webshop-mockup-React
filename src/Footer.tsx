type FooterProps = {
  year: number;
  title: string;
};

function Footer({ year, title }: FooterProps) {
  return (
    <div className="flex justify-center">
      <span>
        ©️ {year} {title}
      </span>
    </div>
  );
}
export default Footer;
