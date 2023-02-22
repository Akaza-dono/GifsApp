import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
        const [images, setImages] = useState([]);
        const [isLoading, setIsLoading] = useState(true)

        const getImages = async () => {
          const sol = await getGifs(category);
          setImages(sol);
          setIsLoading(false)
        };

        useEffect(() => {
          getImages();
        }, []);

    return {
        images,
        isLoading
    }
}