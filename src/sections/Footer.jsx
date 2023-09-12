import { iconLogoWhite } from "../assets/icons";
import { copyFooter, navFooter } from "../constant";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="wrapper py-3xl">
      <div className="grid gap-xl grid-cols-1 xl:grid-cols-3">
        <div className="text-md">
          <div className="mb-sm">
            <a className="py-[.6ex] block" href="#">
              <img src={iconLogoWhite} alt="Logo White" />
            </a>
          </div>
          <p className="group hover:text-primary cursor-pointer transition ease-in-out duration-300 py-[.6ex] flex gap-sm items-center">
            <BsTelephoneForward></BsTelephoneForward> (415) 319-9099
          </p>
          <p className="group hover:text-primary cursor-pointer transition ease-in-out duration-300 py-[.6ex] flex gap-sm items-center">
            <AiOutlineMail></AiOutlineMail> advisors@careerist.com
          </p>
          <div className="flex gap-md py-[.6ex] text-md">
            <a href="" className="group ">
              <FaFacebookF className="group-hover:fill-primary transition ease-in-out duration-300"></FaFacebookF>
            </a>
            <a href="" className="group">
              <FaTwitter className="group-hover:fill-primary transition ease-in-out duration-300"></FaTwitter>
            </a>
            <a href="" className="group">
              <FaInstagramSquare className="group-hover:fill-primary transition ease-in-out duration-300"></FaInstagramSquare>
            </a>
            <a href="" className="group">
              <FaLinkedin className="group-hover:fill-primary transition ease-in-out duration-300"></FaLinkedin>
            </a>
          </div>
        </div>
        <nav className="col-span-2">
          <ul className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-xl">
            {navFooter.map((item) => (
              <li className="" key={item.title}>
                <a className="text-md py-[.6ex] block" href="./">
                  {item.title}
                </a>
                <ul className="mt-sm max-w-lg">
                  {item.links.map((link) => (
                    <li key={link.name}>
                      <a
                        className="py-[.6ex] block hover:text-primary transition duration-200"
                        href={link.link}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-xl flex-col sm:flex-row flex-wrap pt-xl mt-xl justify-between border-t-slate-50 border-t  border-opacity-50">
        <div>© Careerist, 2023</div>
        <div className="grid">
          <ul className=" grid grid-cols-1 sm:grid-cols-3">
            {copyFooter.map((term) =>
              term.termsRow1.map((item) => (
                <li key={item.term} className="cursor-pointer">
                  <a className="py-[.6ex] block hover:text-primary duration-200">
                    {item.term}
                  </a>
                </li>
              ))
            )}
          </ul>
          <ul className="grid grid-cols-1 sm:grid-cols-3">
            {copyFooter.map((term) =>
              term.termsRow2.map((item) => (
                <li key={item.term} className="cursor-pointer">
                  <a className="py-[.6ex] block hover:text-primary duration-200">
                    {item.term}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
