import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { gsap } from "gsap";
import { Observer, ScrollTrigger } from "gsap/all";

const Navbar = () => {
  useEffect(() => {
    gsap.registerPlugin(Observer, ScrollTrigger);

    const observer = Observer.create({
      target: "#searchIcon", // observe the search icon
      type: "pointer", // only listen for hover events
      onHover: () =>
        gsap.to("#searchIcon", {
          scale: 0.85,
        }),
      onHoverEnd: () =>
        gsap.to("#searchIcon", {
          scale: 1,
        }),
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".navbarContents",
      start: "0",
      //   endTrigger: ".navContents",
      //   end: "100%",
      onToggle: () => {
        gsap.to(".logo,#searchIcon", {
          y: 0,
        });
        gsap.fromTo(".navContent", {autoAlpha:0.1},{
          y: 0,
          stagger: 0.06,
          autoAlpha: 1,
        });
      },
      onUpdate: () => {
        gsap.to(".navContent,.logo,#searchIcon", {
          y: -100,
        });
      },
    });

    // Cleanup observer on unmount
    return () => {
      observer.kill();
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className=" flex justify-between items-center bg-black text-white h-[100px] px-5">
      <div className="lusitana-bold Lusitana font-bold text-6xl logo">Logo</div>
      <div>
        <ul className="flex justify-between items-center gap-5 lusitana-regular navbarContents">
          <li className="navContent" id="navContent1">
            The Company
          </li>
          <li className="navContent" id="navContent2">
            Jobs
          </li>
          <li className="navContent" id="navContent3">
            References
          </li>
          <li className="navContent" id="navContent4">
            Catalog
          </li>
          <li className="navContent" id="navContent5">
            News
          </li>
          <li className="navContent" id="navContent6">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <div className="flex items-center">
          <button
            className="flex justify-center items-center rounded-full bg-white  cursor-pointer w-[80px] h-[80px]"
            id="searchIcon"
          >
            <CiSearch color="black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
