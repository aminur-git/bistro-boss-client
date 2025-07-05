import { motion } from "framer-motion";
import UseCart from "../../Hooks/UseCart";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Table from "../../Components/SectionTitle/Table";

const Cart = () => {
  const [cart, refetch] = UseCart();

  // Calculate Cart Price =====>>
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
             <Table items={cart} refetch={refetch}></Table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
