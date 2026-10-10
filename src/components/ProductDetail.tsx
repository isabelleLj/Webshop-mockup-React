import { Link, useParams } from "react-router-dom";
import { type Product } from "../types/ProductType";
import { useQuery } from "@tanstack/react-query";

function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()),
  });

  if (isLoading) {
    return <p>Hämtar produkt...</p>;
  }

  if (error) {
    return <p>Något gick fel...</p>;
  }

  if (!data) {
    return <p>Produkten hittades inte</p>;
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
        <p className="mb-4 text-1xl font-bold text-brand-dark">
          {data.price.toLocaleString("sv-SE")} kr
        </p>
        <p className="mb-6 leading-relaxed text-gray-600">{data.description}</p>
        <p
          className={`mb-6 font-medium ${
            data.stock > 0 ? "text-green-700" : "text-red-600"
          }`}
        >
          {data.stock > 0 ? "I lager" : "Slut i lager"}
        </p>
        <p className="text-sm text-gray-500">Artikelnummer: {data.sku}</p>
      </div>

      <Link
        to="/"
        className="inline-block w-fit rounded-xl bg-brand px-5 py-3 text-white transition-colors hover:bg-brand-dark md:col-span-2"
      >
        Tillbaka till butiken
      </Link>
    </div>
  );
}

export default ProductDetail;
