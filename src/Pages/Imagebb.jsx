import { useForm } from "react-hook-form";
import { useState } from "react";

const Imagebb = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imageUrl, setImageUrl] = useState("");

  const onSubmit = async (data) => {
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=513c386d6822998b3f420f793920561f`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();
      const url = result?.data?.display_url;
      setImageUrl(url);
      console.log("Uploaded to ImgBB:", url);
    } catch (err) {
      console.error("Image upload failed", err);
    }
  };

  return (
    <div className="min-h-screen pt-40 text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          className="input"
          type="file"
          accept="image/*"
          {...register("image", { required: true })}
        />
        {errors.image && (
          <p className="text-red-500">Image is required</p>
        )}

        <button type="submit" className="btn btn-primary">
          Upload to ImgBB
        </button>
      </form>

      {imageUrl && (
        <div className="mt-6">
          <p className="font-semibold">Image URL:</p>
          <a href={imageUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">
            {imageUrl}
          </a>
          <img src={imageUrl} alt="Uploaded" className="mx-auto mt-4 max-w-xs rounded" />
        </div>
      )}
    </div>
  );
};

export default Imagebb;
