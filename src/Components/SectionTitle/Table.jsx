
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { motion } from "framer-motion";


const Table = ({ items, refetch }) => {

    const axiosSecure = useAxiosSecure()
  
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
    <div>
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
          {items.map((item, idx) => (
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
                <h1 className="text-[#737373] font-semibold">{item.name}</h1>
              </td>
              <td>
                {" "}
                <h1 className="text-[#737373] font-semibold">${item.price}</h1>
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
  );
};

export default Table;
