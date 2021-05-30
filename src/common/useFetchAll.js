import { useState, useEffect } from "react";

export const useFetchAll = (endpoints) => {
  const [data, setData] = useState({ loading: "idle", data: [], error: null });

  useEffect(() => {
    if (data.loading === "idle") {
      const get = async () => {
        setData({ ...data, loading: "loading" });
        try {
          const request = await Promise.all(
            endpoints.map((endpoint) => fetch(endpoint))
          );
          const response = await Promise.all(request.map((req) => req.json()));
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
