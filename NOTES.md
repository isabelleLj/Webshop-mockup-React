Koden är uppdelad för att varje del ska ha ett tydligt ansvar. Det gör projektet lättare att förstå, återanvända och ändra. Komponenter hanterar UI, pages representerar sidor, hooks innehåller återanvändbar logik, context delar global state och types beskriver datastrukturen.

Routing:
I App.tsx bestämmer React Router vilken komponent som ska visas beroende på URL:en. / visar produktlistan, /products/:id visar detaljer för en viss produkt, /about visar Om-sidan, /cart visar kundvagnen, /checkout visar kassan och /order-confirmation visar orderbekräftelsen. \* används för sidor som inte finns och visar NotFound. :id är dynamiskt och kan innehålla exempelvis produktens id.

Datahämtning: I mitt projekt hämtas produkterna med TanStack Query direkt i ProductList. queryFn använder fetch för att hämta data från DummyJSON API:t. När datan har hämtats ligger produkterna i data.products. Jag filtrerar sedan produkterna efter söktext och använder map() för att skicka varje produkt vidare till ProductCard. staleTime: 60000 betyder att TanStack Query betraktar datan som färsk i 60 sekunder.

Laddning och fel: isLoading används för att visa att data håller på att hämtas. error används om något går fel och kan visa ett felmeddelande. data innehåller informationen som hämtats från API:t. I min ProductList finns laddnings- och felhantering, men ingen särskild text för när listan är tom. Skeletons är platshållare som visas under laddning och gör att användaren kan se ungefär hur innehållet kommer att se ut innan datan har laddats.

Kundvagn: CartProvider innehåller kundvagnens state och funktionerna för att lägga till, ta bort och tömma produkter. useCart är en custom hook som gör det enkelt för komponenter att komma åt denna information. Context passar bra eftersom flera komponenter, till exempel ProductCard, Navigation, Cart och Checkout, behöver använda samma kundvagn. Om kundvagnen bara låg som useState i Cart skulle andra komponenter inte kunna komma åt den direkt och vi skulle behöva skicka state och funktioner som props genom komponentträdet.

Kassan: Jag använder React Hook Form för att hantera formuläret och dess värden. I min version sker valideringen med regler direkt i register, till exempel required och ett mönster för postnumret. Jag använder inte Zod i den här versionen. När formuläret skickas körs onSubmit, som navigerar till /order-confirmation och skickar med kundens uppgifter och produkterna i kundvagnen som state. Sedan töms kundvagnen med clearCart(). OrderConfirmation kan läsa informationen genom React Routers useLocation() och location.state.

Tema: ThemeProvider gör temat tillgängligt för hela React-applikationen. useTheme från next-themes används för att läsa vilket tema som är aktivt och ändra det. ModeToggle är knappen som använder setTheme() för att växla mellan ljust och mörkt läge. När mörkt läge aktiveras används .dark och shadcn/Tailwinds färgvariabler ändras så att bakgrund, text och komponenter får mörka färger.

Jag valde att undersöka raden:

const { theme, setTheme } = useTheme();

useTheme() är en hook från next-themes som ger oss information och funktioner för att hantera temat i applikationen. theme berättar vilket tema som används just nu, till exempel "light" eller "dark", medan setTheme är funktionen som används för att ändra temat.

I min ModeToggle använder jag sedan setTheme() för att växla mellan ljust och mörkt läge. På så sätt behöver jag inte själv skapa en useState för temat, eftersom next-themes redan hanterar detta åt mig.
