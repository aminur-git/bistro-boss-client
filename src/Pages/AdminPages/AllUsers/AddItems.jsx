import React, { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import useUploadImage from "../../../Hooks/useUploadImage";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

const [toUpload, setToUpload] = useState(null);

const {imageUrl, loading} = useUploadImage({imageFile: toUpload})

  const onSubmit = async(data) => {
    const { name,  category, price, getImage , recipe } = data;
    
    const image = await setToUpload(getImage[0]) 
        
    console.log({ name,  category, price, image,  recipe  })
     



  };

  return (
    <div className="md:p-10 inter ">
      <SectionTitle
        heading={"add an item"}
        subHeading={`---What's new?---`}
      ></SectionTitle>

      <div className="md:max-w-4/6 mx-auto  p-4 md:p-10 shadow ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-3 md:col-span-2">
            <legend className="font-medium">Recipe Name* </legend>
            <input
               {...register("name", {
                required: "Everything on this planet have a name!",
              })}
              type="text"
              placeholder="Recipe Name"
              className="input w-full border-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-3 ">
            <legend className="font-medium">Category* </legend>
            <select
              {...register("category", {
                required: "You must select a category",
              })}
              className="select border-0 w-full"
              defaultValue={"Select a category "}
            >
              <option value={""}>Select a category</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs">
                {errors.category.message}
              </p>
            )}
          </div>
          <div className="space-y-3">
            <legend className="font-medium">Price* </legend>
            <input
             {...register("price", {
                required: "Selling expired item for free?",
              })}
              type="text"
              placeholder="Price"
              className="input w-full border-none"
            />
            {errors.price && (
              <p className="text-red-500 text-xs">
                {errors.price.message}
              </p>
            )}
          </div>
          <div className="space-y-3 md:col-span-2 ">
            <legend className="font-medium">Recipe Details* </legend>
            <textarea
             {...register("recipe", {
                required: "Add appealing recipe details!",
              })}
              
              className="w-full h-48 border-none input p-4"
              placeholder="Recipe Details"
              
              >
                {errors.recipe && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.recipe.message}
                  </p>
                )}
                </textarea>
                
          </div>
          <div className="space-y-3 md:col-span-2 ">
            <input  {...register("getImage", {
                required: "Image is required",
              })} type="file" className="file-input file-input-ghost" />
              {errors.getImage && (
              <p className="text-red-500 text-xs mt-1">
                {errors.getImage.message}
              </p>
            )}
          </div>
          <div>
            <button className="btn px-6 text-white bg-[linear-gradient(90deg,_rgb(131,93,35),_rgb(181,129,48)_100%)]">
              Add Item <ImSpoonKnife className="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
