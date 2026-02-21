"use client"
import { useEffect } from "react";
import Gallery from "../components/Gallery";
export default function Gallerypage(){

   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([{ id: 1 }, {id: 2}]));
  }, []);
    return(
      <>
           <Gallery/>
      </>
    );
}