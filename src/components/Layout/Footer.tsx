import Facebook from "@/components/misc/svg/Facebook";
import Twitter from "@/components/misc/svg/Twitter";
import Instagram from "@/components/misc/svg/Instagram";
import Linkedin from "@/components/misc/svg/Linkedin";
import GitHub from "@/components/misc/svg/GitHub";
import Email from "@/components/misc/svg/Email";
import Phone from "@/components/misc/svg/Phone";
import {footerItems} from "@/utils/constants/footer";
import {IFooterItem} from "@/utils/interface/misc";

const Footer = () => {

  const items = footerItems?.map((item:IFooterItem)=>{        
    return <li 
      className="p-3 hover:font-semibold" 
      key={item.value} >
      {item.text}
    </li>; 
  });

  return(
    <footer className="w-full py-6 px-4 bg-pink-700"> 
      <div className="mx-auto max-w-7xl flex flex-col items-center text-white">
        <div className="w-full flex flex-col flex-wrap justify-between items-center">
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
            {items}           
          </nav>
          {/* :CONTACT */}
          <div className="px-2 flex flex-col">
            {/* Email */}
            <p className="flex text-xs font-medium tracking-wide">
              <Email className="mr-1 h-5 w-5"/>            
              <a href="#email">fatemeh.paghar@outlook.com</a>
            </p>
            {/* Phone */}
            <p className="flex text-xs  font-bold">
              <Phone className="mr-1 h-5 w-5" />              
              <span>176-44544529</span>
            </p>
          </div>
        </div>
        {/* :COPYRIGHT */}
        <p className="pt-10 text-sm text-center">&copy;2024, Fancy Tailwind,React,Next.js,TypeScript All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;