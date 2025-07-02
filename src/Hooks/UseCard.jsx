const UseCard = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {items.map((item) => (
          <div key={item._id}>
            <div className="relative card rounded bg-[#F3F3F3] w-[350px]  sm:w-[300px] md:w-[250px] lg:w-[350px] xl:w-[400px] h-[450px]  mx-auto shadow-sm">
              <figure className=" ">
                <img src={item.image} alt="Shoes" className="" />
              </figure>
               <span className="absolute top-5 right-5  badge badge-neutral rounded-none p-4 font-medium">
                ${item.price}
              </span>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions">
                  <button className="mt-6 btn border-0  bg-transparent text-[#BB8506] border-b-2 border-[#BB8506] hover:bg-[#111827] hover:text-white font-bold rounded-md  w-40 h-14 hover:cursor-pointer ">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCard;
