import { useEffect, useState, type JSX } from "react";
import MyLoader from "../../components/myLoader/MyLoader";
import styles from "./Lesson10.module.css";
import MyGallery from "../../components/myGallery/MyGallery";

export default function Lesson10(): JSX.Element {
  useEffect(() => {
    document.title = "Homework 10: Random Facts about cats";
  }, []);

  const [data, setData] = useState<string>("#");
  const [url, setUrl] = useState<string>("#");
  const [loading, setLoading] = useState(true);

  interface GalleryItem {
    fact: string;
    image: string;
  }
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const fetchImage = async (): Promise<string> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    return data[0].url;
  };

  const fetchFact = async (): Promise<string> => {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return data.fact;
  };

  const addGallery = async () => {
    setLoading(true);
    const fact = await fetchFact();
    const image = await fetchImage();
    setGallery((prev) => [...prev, { fact, image }]);
    setTimeout(() => {
      setLoading(false);
    }, 500);

    console.log(gallery);
  };

  const clearGallery = () => {
    setGallery([]);
  };

  useEffect(() => {
    addGallery();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <MyGallery gallery={gallery} onAdd={addGallery} onClear={clearGallery} />
        </>
      )}
    </div>
  );
}
