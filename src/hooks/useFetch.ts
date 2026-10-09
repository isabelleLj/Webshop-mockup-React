import { useEffect, useState } from "react";


function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {

    setLoading(true);
    setError("");

    fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Kunde inte hämta produkterna");
      }

      return res.json();
    })
    .then((data) => setData(data))
    .catch((error) => setError(error.message))
    .finally(() => setLoading(false));
  }, [url, fetchCount]);

  const refetch = () => {
  setFetchCount((count) => count + 1);
}

  return { data, loading, error, refetch };
}



export default useFetch;