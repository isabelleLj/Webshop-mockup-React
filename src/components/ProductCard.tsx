import { Link } from "react-router-dom";
import clsx from "clsx";
import { buttonVariants } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  stock: number;
  sku: string;
};

function ProductCard({ id, name, price, stock, sku }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700">Pris: {price} kr</p>
        <p
          className={clsx(
            "font-semibold",
            stock > 0 ? "text-green-600" : "text-red-600",
          )}
        >
          {stock > 0 ? "I lager" : "Slut i lager"}
        </p>
        <p className="mt-2 text-sm text-gray-500">Artikelnummer:{sku}</p>

        <Link
          to={`/products/${id}`}
          className={buttonVariants({
            variant: "default",
            className: "text-white",
          })}
        >
          Visa detaljer
        </Link>
        <Button
          onClick={() =>
            addToCart({
              id,
              name,
              price,
              stock,
              sku,
            })
          }
        >
          Lägg i kundvagn
        </Button>
      </CardContent>
    </Card>
  );
}
export default ProductCard;
