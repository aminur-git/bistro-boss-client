import { useEffect, useState } from "react";

const useUploadImage = ({ imageFile }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!imageFile) return;

    const upload = async () => {
      const formData = new FormData();
      formData.append("image", imageFile);

      setLoading(true);
      try {
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=513c386d6822998b3f420f793920561f`,
          {
            method: "POST",
            body: formData,
          }
        );
        const result = await res.json();
        setImageUrl(result?.data?.display_url || "");
      } catch (err) {
        console.error("Image upload failed:", err);
      } finally {
        setLoading(false);
      }
    };

    upload();
  }, [imageFile]);

  return { imageUrl, loading };
};

export default useUploadImage;