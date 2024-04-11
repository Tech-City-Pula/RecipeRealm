import { useState } from "react";

export const useThumbnails = () => {
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  const createThumbnail = (file: File) => {
    // LEVEL 3: Step 2: Kreirati URL objekat za sliku i postavi thumbailove
    const url = URL.createObjectURL(file);
    setThumbnails((prevThumbnails) => [...prevThumbnails, url]);
  };

  const clearThumbnails = () => {
    // LEVEL 3: Step 3: Očistiti thumbailove
    setThumbnails([]);
  };

  const removeThumbnail = (index: number) => {
    // LEVEL 3: Step 4: Ukloniti thumbail s indexom
    setThumbnails((prevThumbnails) => {
      const newThumbnails = [...prevThumbnails];
      newThumbnails.splice(index, 1);
      return newThumbnails;
    });
  };

  return {
    thumbnails,
    createThumbnail,
    clearThumbnails,
    removeThumbnail,
  };
};
