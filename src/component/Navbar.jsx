import logo from "../assets/assets/protfolio.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";

const Navbar = () => {
    return < nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrinks-0 items-center">

            <img className='mx-3 w-20' src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl"  >
            <FaLinkedin />
            <FaGithub />
            <FaTwitterSquare />
            <FaInstagram />
            <FaGitlab />
        </div>
    </nav>
}

export default Navbar
