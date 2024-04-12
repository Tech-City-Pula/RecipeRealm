import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface ThumbnailProps {
  src: string;
  onRemove?: () => void;
}

export default function Thumbnail({ src, onRemove }: ThumbnailProps) {
  return (
    <div className="relative w-24">
			{/* LEVEL 3: Step 2: Dodati Image komponentu */}

      {onRemove && (
        <Button
          type="button"
          variant="link"
          className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={onRemove}
        >
          <X className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
