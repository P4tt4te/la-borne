import React, { useEffect, useRef, useState } from "react";
import { getImagesByFilmId } from "../../api/getImagesByFilmId";

export const ScreenTheater = () => {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);

  async function getImages(id) {
    const data = await getImagesByFilmId(550);
    setImages(data.backdrops);
    setLength(data.backdrops.length);
    setLoading(false);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === length - 1) {
        setIndex(0);
      } else {
        console.log("setIndex");
        let val = index + 1;
        setIndex(val);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [loading, index]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="theater-screen">
      {loading ? (
        <p className="loading-font">Chargement...</p>
      ) : (
        <>
          <div className="black-bar top"></div>
          <img
            width={800}
            src={`https://image.tmdb.org/t/p/original${images[index].file_path}`}
          />
          <div className="black-bar bottom"></div>
        </>
      )}
    </div>
  );
};
