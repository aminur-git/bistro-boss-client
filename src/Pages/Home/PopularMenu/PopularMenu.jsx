import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = ({ popularItem }) => {
  return (
    <section>
      <SectionTitle
        subHeading={"---Popular Items---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {popularItem.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <button className="mt-6 bg-transparent  btn border-0  shadow-none text-[#1F2937] border-b-2 border-[#1F2937]   hover:bg-[#1F2937] hover:text-white font-bold uppercase rounded-md  w-40 h-14 hover:cursor-pointer ">
        View Full  Menu
      </button>
      </div>
    </section>
  );
};

export default PopularMenu;
