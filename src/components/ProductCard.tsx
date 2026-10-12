import { Link } from "react-router-dom";
import clsx from "clsx";
import { buttonVariants, Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useCart } from "../context/CartContext";
import { getDiscountedPrice, hasDiscount } from "../utils/pricing";
import type { Product } from "../types/ProductType";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, stock, sku, thumbnail, category } = product;
  const discounted = hasDiscount(category);
  const discountedPrice = getDiscountedPrice(price, category);

  const { addToCart } = useCart();

  console.log("product: ", product);

  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-200 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/products/${id}`} className="block overflow-hidden bg-gray-50">
        <img
          src={thumbnail}
          alt={name}
          className="h-60 w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <CardContent className="flex flex-col p-4">
        <h3 className="text-sx font-semibold leading-snug text-brand-dark">
          {name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">Category: {category}</p>

        {discounted ? (
          <div className="mt-3">
            <p className="text-sm text-gray-500 line-through">
              {price.toLocaleString("sv-SE")} kr
            </p>

            <p className="text-xl font-bold text-brand">
              {discountedPrice.toLocaleString("sv-SE")} kr
            </p>

            <span className="mt-1 inline-block rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
              −20 %
            </span>
          </div>
        ) : (
          <p className="mt-3 text-xl font-bold text-brand-dark">
            {price.toLocaleString("sv-SE")} kr
          </p>
        )}

        <p
          className={clsx(
            "mt-2 text-sm font-medium",
            stock > 0 ? "text-green-700" : "text-red-600",
          )}
        >
          {stock > 0 ? "✓ I lager" : "Slut i lager"}
        </p>

        <p className="mt-1 text-xs text-gray-500">Articlenumber: {sku}</p>

        <div className="mt-auto flex flex-col gap-2 ">
          <Link
            to={`/products/${id}`}
            className={buttonVariants({
              variant: "outline",
              className:
                "w-full rounded-xl border-brand text-brand hover:bg-brand-light",
            })}
          >
            Show details
          </Link>

          <Button
            disabled={stock <= 0}
            onClick={() =>
              addToCart({
                id,
                name,
                category,
                price: getDiscountedPrice(price, category),
                stock,
                sku,
              })
            }
            className=" cursor-pointer w-full rounded-xl bg-brand text-white hover:bg-brand-dark"
          >
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
