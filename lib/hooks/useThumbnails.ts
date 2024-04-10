import { useState } from "react";

export const useThumbnails = () => {
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  const createThumbnail = (file: File) => {
    const url = URL.createObjectURL(file);
    setThumbnails((prevThumbnails) => [...prevThumbnails, url]);
  };

  const clearThumbnails = () => {
    setThumbnails([]);
  };

  const removeThumbnail = (index: number) => {
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
