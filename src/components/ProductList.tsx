import ProductCard from "./ProductCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Product } from "../types/ProductType";
import { Button } from "./ui/button";

type ProductListProps = {};

type ProductResponse = {
  products: Product[];
};

function ProductList({}: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error, refetch } = useQuery<ProductResponse>({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://dummyjson.com/products?delay=1000").then((res) =>
        res.json(),
      ),
    staleTime: 60000,
  });

  return (
    <>
      <input
        type="text"
        placeholder="Sök produkt..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {isLoading ? <p>Hämtar produkter...</p> : null}
      {error && (
        <div>
          <p className="font-semibold text-red-600">
            Något gick fel: {error.message}
          </p>
          <Button variant="outline" onClick={() => refetch()}>
            Hämta om produkter
          </Button>
        </div>
      )}

      <button onClick={() => refetch()}>Hämta om produkter</button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data?.products
          .filter((product: Product) =>
            product.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase()),
          )
          .map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              sku={product.sku}
              name={product.title}
              price={product.price}
              stock={product.stock}
            />
          ))}
      </div>
    </>
  );
}

export default ProductList;
