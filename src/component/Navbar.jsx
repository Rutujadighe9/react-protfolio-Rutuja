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


            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitterSquare />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
            </a>
            <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer" aria-label="GitLab">
                <FaGitlab />
            </a>
        </div>
    </nav>
}

export default Navbar
