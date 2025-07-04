import { motion } from "framer-motion";
import UseCart from "../../Hooks/UseCart";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axios from "axios";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
const Cart = () => {
  const [cart, refetch] = UseCart();

  // Calculate Cart Price =====>>
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart?id=${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: ` ${item.name} has been deleted.`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="space-y-20 pb-20">
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
            <h1>Total Price:  ${totalPrice.toFixed(2)}</h1>
            <button className="uppercase btn bg-[#D1A054] text-white">
              Pay
            </button>
          </div>

          <div className="">
            <div className="overflow-x-auto overflow-y-hidden pt-9">
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
                    <motion.tr
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: idx * 0.05,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      key={item._id}
                      className="inter "
                    >
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
                        <button
                          onClick={() => handleDelete(item)}
                          className="btn bg-[#B91C1C] btn-xs py-5 shadow-none"
                        >
                          <RiDeleteBin6Line className="text-2xl text-white" />
                        </button>
                      </th>
                    </motion.tr>
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
