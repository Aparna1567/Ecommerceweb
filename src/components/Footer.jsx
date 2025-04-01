import { Link } from "react-scroll";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" bg-slate-500 text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div>
          <h1 className=" font-semibold text-3xl pb-4 text-yellow-500">ShoppyKart</h1>
          <div className=" flex gap-5 ml-3">
            <FaFacebook
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
            <RiTwitterXLine
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
            <RiInstagramFill
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-yellow-500">Shop</h1>
          <div className=" flex flex-col gap-2">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Products
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Overview
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-yellow-500">Company</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              About us
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Contact
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              News
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Support
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 text-yellow-500">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              123 Elm Street, Suite 456 Springfield, India
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              fashion@style.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4 text-yellow-500">
          @copyright developed by
          <span className=" text-black"> Aparna</span> | All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;