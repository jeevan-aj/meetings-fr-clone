import React, {  useEffect } from "react";
import firstHeader from "../assets/mainHeader.webp";
import gsap from "gsap";

const Header = () => {
  useEffect(() => {
    gsap.to("#header-img-1", {
      width:"100%",
      ease:"power2.inOut",
      duration:4,
      scrollTrigger: {
        trigger: "#header-img-1",
        start: "top-=100 top ",
        end: "bottom 90%",
        scrub:2,
      },
    });

  });

  return (
    <div className=" flex justify-center items-center h-[100vh]">
      <img src={firstHeader} alt="" className="w-[80%]" id="header-img-1" />
    </div>
  );
};

export default Header;
