import { useState, useEffect } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState({ loading: "idle", data: [], error: null });

  useEffect(() => {
    if (data.loading === "idle") {
      const get = async () => {
        setData({ ...data, loading: "loading" });
        try {
          const request = await fetch(endpoint);

          const response = await request.json();
          setData({ ...data, loading: "succeeded", data: response });
        } catch (error) {
          setData({ ...data, loading: "failed" });
        }
      };

      get();
    }
  }, []);

  return data;
};
