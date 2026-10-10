import { Link } from "react-router-dom";
import clsx from "clsx";
import { buttonVariants, Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  sku: string;
  image: string;
};

function ProductCard({ id, name, price, stock, sku, image }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-200 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/products/${id}`} className="block overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="h-60 w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <CardContent className="flex flex-col p-4">
        <h3 className="text-sx font-semibold leading-snug text-brand-dark">
          {name}
        </h3>

        <p className="mt-3 text-1xl font-bold text-brand-dark">
          {price.toLocaleString("sv-SE")} kr
        </p>

        <p
          className={clsx(
            "mt-2 text-sm font-medium",
            stock > 0 ? "text-green-700" : "text-red-600",
          )}
        >
          {stock > 0 ? "✓ I lager" : "Slut i lager"}
        </p>

        <p className="mt-1 text-xs text-gray-500">Artikelnummer: {sku}</p>

        <div className="mt-auto flex flex-col gap-2 ">
          <Link
            to={`/products/${id}`}
            className={buttonVariants({
              variant: "outline",
              className:
                "w-full rounded-xl border-brand text-brand hover:bg-brand-light",
            })}
          >
            Visa detaljer
          </Link>

          <Button
            disabled={stock <= 0}
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                stock,
                sku,
              })
            }
            className="w-full rounded-xl bg-brand text-white hover:bg-brand-dark"
          >
            Lägg i kundvagn
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
