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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { data, isLoading, error, refetch } = useQuery<ProductResponse>({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://dummyjson.com/products?delay=1000").then((res) =>
        res.json(),
      ),
    staleTime: 60000,
  });

  const categories = [
    ...new Set(data?.products.map((product) => product.category) ?? []),
  ];

  return (
    <section className="bg-warm-white px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Isabean shop!
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Explore
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
            Find your favorites!
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Search for product..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:max-w-md"
          />

          <Button
            variant="outline"
            onClick={() => refetch()}
            className="rounded-xl border-brand px-5 py-3 text-brand hover:bg-brand-light"
          >
            Update products
          </Button>
        </div>

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm sm:max-w-md"
        >
          <option value="all">All categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {isLoading && (
          <p className="py-8 text-center text-gray-600">Loading products...</p>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="font-semibold text-red-700">
              Something went wrong: {error.message}
            </p>

            <Button
              variant="outline"
              onClick={() => refetch()}
              className="mt-4"
            >
              Try again
            </Button>
          </div>
        )}

        <div className=" mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data?.products
            .filter(
              (product: Product) =>
                product.title
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase()) &&
                (selectedCategory === "all" ||
                  product.category === selectedCategory),
            )
            .map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
