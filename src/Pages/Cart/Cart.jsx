import { motion } from "framer-motion";
import UseCart from "../../Hooks/UseCart";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  const [cart] = UseCart();

  // Calculate Cart Price =====>>
  let totalPrice = 0;
  cart.map((item) => {
    const itemPrice = item.price;
    totalPrice = totalPrice + itemPrice;
  });

  //   if (loading) {
  //     return (
  //       <div className="h-screen flex justify-center items-center">
  //         <span className="loading loading-infinity loading-xl"></span>
  //       </div>
  //     );
  //   } else
  return (
    <div className="space-y-20 ">
      <SectionTitle
        subHeading={"----- My Cart -----"}
        heading="wanna add more?"
      />

      <div className="bg-white p-8 max-w-4xl mx-auto rounded shadow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className=" "
        >
          <div className="flex justify-between cinzel items-center font-bold text-3xl">
            <h1>Total Orders: {cart.length}</h1>
            <h1>Total Price: ${totalPrice}</h1>
            <button className="uppercase btn bg-[#D1A054] text-white">
              Pay
            </button>
          </div>

          <div>
            <div className="overflow-x-auto pt-9">
              <table className="table">
                {/* head */}
                <thead className="bg-amber-100 uppercase">
                  <tr>
                    <th></th>
                    <th>Item Image</th>
                    <th>Item name</th>
                    <th>price</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cart.map((item, idx) => (
                    <motion.tr  initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: idx * 0.05,
                        duration: 0.4,
                        ease: "easeOut",
                      }} key={item._id} className="inter ">
                      <th>{idx + 1}</th>
                      <td className="">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-16 w-16">
                              <img src={item.image} alt="Cart Item Image" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h1 className="text-[#737373] font-semibold">
                          {item.name}
                        </h1>
                      </td>
                      <td>
                        {" "}
                        <h1 className="text-[#737373] font-semibold">
                          ${item.price}
                        </h1>
                      </td>
                      <th>
                        <button className="btn bg-[#B91C1C] btn-xs py-5 shadow-none">
                          <RiDeleteBin6Line  className="text-2xl text-white" />
                        </button>
                      </th>
                    </motion.tr >
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
