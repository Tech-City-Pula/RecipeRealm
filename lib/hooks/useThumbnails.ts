import { useState } from "react";

export const useThumbnails = () => {
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  const createThumbnail = (file: File) => {
    // LEVEL 3: Step 3: Kreirati URL objekat za sliku i postavi thumbailove
  };

  const clearThumbnails = () => {
    // LEVEL 3: Step 4: Očistiti thumbailove
  };

  const removeThumbnail = (index: number) => {
    // LEVEL 3: Step 5: Ukloniti thumbail s indexom
  };

  return {
    thumbnails,
    createThumbnail,
    clearThumbnails,
    removeThumbnail,
  };
};
