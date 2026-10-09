import { useState, type ChangeEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { type Product } from "../types/ProductType";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

function ProductDetail() {
  const { id } = useParams();
  const [newPrice, setNewPrice] = useState("");

  const mutation = useMutation({
    mutationFn: (newPrice: number) =>
      fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: newPrice,
        }),
      }).then((res) => res.json()),
  });

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
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
      <p className="mb-2 text-xl">Pris: {data.price} kr</p>
      <p className="mb-6">{data.stock ? "I lager" : "Slut i lager"}</p>
      <p>Artikelnummer: {data.sku}</p>

      <Input
        type="number"
        value={newPrice}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setNewPrice(event.target.value)
        }
        placeholder="Nytt pris"
      />

      <Button
        variant="secondary"
        onClick={() => mutation.mutate(Number(newPrice))}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Uppdaterar..." : "Ändra pris"}
      </Button>

      {mutation.isSuccess && <p>Priset har uppdaterats!</p>}

      {mutation.isError && <p>Något gick fel vid uppdateringen.</p>}

      <Link
        to="/"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Tillbaka till butiken
      </Link>
    </div>
  );
}

export default ProductDetail;
