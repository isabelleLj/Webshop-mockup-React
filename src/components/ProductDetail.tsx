import { Link, useParams } from "react-router-dom";
import { type Product } from "../types/ProductType";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { getDiscountedPrice } from "../utils/pricing";

function ProductDetail() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [addedToCart, setAddedToCart] = useState(false);

  const { data, isLoading, error } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  if (!data) {
    return <p>Product not found</p>;
  }

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 bg-warm-white px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="h-80 w-full object-contain"
        />
      </div>
      <div>
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-brand-dark">
          {data.title}
        </h1>
        {data.category === "groceries" ? (
          <div className="mb-4">
            <p className="text-sm text-gray-500 line-through">
              {data.price.toLocaleString("sv-SE")} kr
            </p>

            <p className="text-2xl font-bold text-brand">
              {(data.price * 0.8).toLocaleString("sv-SE")} kr
            </p>

            <span className="mt-1 inline-block rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
              −20 %
            </span>
          </div>
        ) : (
          <p className="mb-4 text-xl font-bold text-brand-dark">
            {data.price.toLocaleString("sv-SE")} kr
          </p>
        )}
        <p className="mb-6 leading-relaxed text-gray-600">{data.description}</p>
        <p
          className={`mb-6 font-medium ${
            data.stock > 0 ? "text-green-700" : "text-red-600"
          }`}
        >
          {data.stock > 0 ? "I lager" : "Slut i lager"}
        </p>

        <Button
          onClick={() => {
            addToCart({
              id: data.id,
              title: data.title,
              category: data.category,
              price: getDiscountedPrice(data.price, data.category),
              stock: data.stock,
              sku: data.sku,
            });
            setAddedToCart(true);
          }}
          className="mb-6 w-full rounded-xl bg-brand py-6 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {data.stock > 0 ? "Lägg i kundvagn" : "Slut i lager"}
        </Button>
        {addedToCart && (
          <p className="mt-3 text-sm font-medium text-green-700" role="status">
            Product is added to cart!
          </p>
        )}

        <p className="text-sm text-gray-500">Articlenumber: {data.sku}</p>
      </div>

      <Link
        to="/"
        className="inline-block w-fit rounded-xl bg-brand px-5 py-3 text-white transition-colors hover:bg-brand-dark md:col-span-2"
      >
        Back to shop
      </Link>
    </div>
  );
}

export default ProductDetail;
