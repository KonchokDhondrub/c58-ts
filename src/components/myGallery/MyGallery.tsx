import {  type JSX } from "react";
import MyButton from "../myButton/MyButton";
import st from "./MyGallery.module.css";
import MyCards from "../myCards/MyCards";

interface GalleryItem {
  fact: string;
  image: string;
}

interface IMyGalleryProps {
  gallery: GalleryItem[];
  onAdd: () => void;
  onClear: () => void;
}

export default function MyGallery({ gallery, onAdd, onClear }: IMyGalleryProps): JSX.Element {
  return (
    <>
      <div className={st.btnBox}>
        <MyButton onClick={onAdd} text="GET MORE INFO" />
        {gallery.length > 0 && <MyButton onClick={onClear} variant="danger" text="DELETE ALL DATA" />}
      </div>

      <div className={`${st.container} ${st.scrollContainer}`}>
        {gallery.map((el, index) => (
          <div key={index}>
            <MyCards text={el.fact} image={el.image} alt={index} />
          </div>
        ))}
      </div>
    </>
  );
}
