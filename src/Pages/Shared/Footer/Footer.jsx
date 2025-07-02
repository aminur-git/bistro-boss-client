import { FaFacebookF, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="">
      <div className=" flex flex-col md:flex-row  text-neutral-content ">
        <aside className=" w-full bg-[#1F2937] p-20">
          <div className=" flex justify-end">
            {" "}
            <div className="text-center">
              <p className="text-xl md:text-3xl font-medium ">CONTACT US</p>
              <p className="text-base pt-6">
                123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br />{" "}
                Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
        </aside>

        <aside className="w-full bg-[#111827] p-20 ">
          <div className="flex justify-center md:justify-start">
            <div className="text-center">
              <p className="text-xl md:text-3xl font-medium ">Follow US</p>
              <p className="text-base pt-6">
               Join us on social media
              </p>
              <div className="flex gap-2 text-2xl pt-8 justify-center">
                <FaFacebookF/>
                <FaInstagram/>
                <FaXTwitter/>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-[#151515]  p-4 text-white">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Aminur Rahman. All rights
            reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
