import Facebook from "../misc/svg/Facebook";
import Twitter from "../misc/svg/Twitter";
import Instagram from "../misc/svg/Instagram";
import Linkedin from "../misc/svg/Linkedin";
import GitHub from "../misc/svg/GitHub";
import Email from "../misc/svg/Email";
import Phone from "../misc/svg/Phone";

const Footer = () => {
  return(
    <footer className="w-full py-6 px-4 bg-pink-700"> 
      <div className="mx-auto max-w-7xl flex flex-col items-center text-white">
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center">
          {/* :SOCIALMEDIA */}
          <div className="py-4 px-2 flex">
            <Facebook className="w-6 h-6 mr-1"/>
            <Twitter className="w-6 h-6 mr-1"/>
            <Instagram className="w-6 h-6 mr-1"/>
            <Linkedin className="w-6 h-6 mr-1"/>
            <GitHub className="w-6 h-6 mr-1"/>          
          </div>
          {/* :NAVIGATION */}
          <nav className="py-4 px-2 flex flex-wrap justify-center list-none">
            <li className="p-3 hover:font-semibold">Team</li>
            <li className="p-3 hover:font-semibold">Terms and Conditions</li>
            <li className="p-3 hover:font-semibold">Privacy Policy</li>
            <li className="p-3 hover:font-semibold">API</li>            
          </nav>
          {/* :CONTACT */}
          <div className="px-2 flex flex-col">
            {/* Email */}
            <p className="flex text-xs font-medium tracking-wide">
              <Email className="mr-1 h-5 w-5"/>            
              <a href="#email">fancytailwind@paradise.com</a>
            </p>
            {/* Phone */}
            <p className="flex text-xs  font-bold">
              <Phone className="mr-1 h-5 w-5" />              
              <span>209-217-2459</span>
            </p>
          </div>
        </div>

        {/* :COPYRIGHT */}
        <p className="pt-10 text-sm text-center">&copy;2024, Fancy ,React, next.js All Rights Reserved.</p>

      </div>
    </footer>

  );
};

export default Footer;