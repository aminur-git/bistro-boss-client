import {  useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { convertToBDTime } from "../../../Hooks/useBangladeshTime";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { MdAdminPanelSettings } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {

        const axiosSecure = useAxiosSecure()


  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });

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
        axiosSecure.delete(`/users?id=${item._id}`).then((res) => {
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

  const handleMakeAdmin = (user) =>{
     Swal.fire({
      title: "Make this user ADMIN?",
      text: "think before confirm!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if(result.isConfirmed){
        axiosSecure.patch(`/users/${user._id}` )
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
              title: "Admin!",
              text: ` ${user.name} is now an Admin.`,
              icon: "success",
            })
            refetch()
            }
            if(res.data.modifiedCount ===0){
              toast.warning(` ${user.name} is Already an Admin`)
            }
            else{
              toast.error('Please Try Again!')
            }
            
        })
      }
      
    });
  }

  

  return (
    <div>
      <SectionTitle
        subHeading={"---- how many? ----"}
        heading={"manage all users"}
      ></SectionTitle>

      <div className="bg-white p-8 max-w-4xl mx-auto rounded shadow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className=" "
        >
          <div className="flex justify-between cinzel items-center font-bold text-3xl">
            <h1>Total Users: {users.length}</h1>
          </div>

          <div className="">
            <div className="overflow-x-auto overflow-y-hidden pt-9">
              <table className="table">
                {/* head */}
                <thead className="bg-[#D1A054] uppercase text-white  ">
                  <tr className="">
                    <th></th>
                    <th>User name</th>
                    <th>email</th>
                    <th>role</th>
                    <th>Joined</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users.map((item, idx) => (
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

                      <td>
                        <h1 className="text-[#737373] font-semibold">
                          {item.name}
                        </h1>
                      </td>
                      <td>
                        {" "}
                        <h1 className="text-[#737373] font-semibold">
                          {item.email}
                        </h1>
                      </td>
                      <td>
                        {" "}
                        {item.role == 'admin' ?  <button onClick={()=>handleMakeAdmin(item)} className="btn  bg-[#D1A054] text-white text-lg hover:bg-[#b37e30] "><MdAdminPanelSettings className="mx-auto" /></button>
                        : <button onClick={()=> handleMakeAdmin(item)}  className="btn  bg-[#D1A054] text-white text-lg hover:bg-[#b37e30] ">
                          <FaUserCircle className=" mx-auto"></FaUserCircle>
                        </button>  }
                      </td>

                      <td>
                        {" "}
                        <h1 className="text-[#737373] font-semibold">
                          {convertToBDTime(item.createdAt)}
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

export default AllUsers;
