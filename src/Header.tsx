//Typbestäm enligt Typescript:
type HeaderProps = {
  title: string;
  subtitle: string;
};

//Här tar Header emot propsen:
//I return används prop:en.
function Header({ title, subtitle }: HeaderProps) {
  // JSX: Javascript XML
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
}
export default Header;
