import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover text-white py-20 lg:py-32 max-w-[1920px]  mx-auto "
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 px-4 py-20 text-center  mx-auto ">
        <div className="text-center space-y-4 mb-12 max-w-3/4 md:max-w-4/12 mx-auto">
          <p className="text-[#D99904] italic">---Check it out---</p>
          <h2 className="border-y-2  border-base-300 p-4 text-2xl md:text-3xl text-[#ffffff] uppercase">
            FROM OUR MENU
          </h2>
        </div>

        <div className="py-10 flex flex-col md:flex-row justify-center gap-10 items-center ">
          <img src={featuredImg} className="max-w-sm md:max-w-lg " alt="" />
          <div className="text-left  max-w-sm">
            <p className="leading-7 text-xl pb-2">
              March 20, 2023 <br /> WHERE CAN I GET SOME?
            </p>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
          <button className="mt-6 btn bg-transparent border-x-0 border-t-0 shadow-none text-white border-b-2  hover:border-[#BB8506] hover:bg-[#BB8506] font-bold rounded-md  w-40 h-14 hover:cursor-pointer ">
            READ MORE
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
