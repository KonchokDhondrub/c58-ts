import { useEffect } from "react";

interface FetchProps {
  url: string;
  onData: (data: any) => void;
}

export default function Fetch({ url, onData }: FetchProps) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        onData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [url, onData]);

  return null;
}
