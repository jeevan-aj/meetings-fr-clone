import  {  useState } from "react";
import img1 from "../assets/Meetings-convention-1-2560x3251.jpg.webp";
import img2 from "../assets/meetings-outdoor.jpg.webp";
import img3 from "../assets/Meetings-reception-3-OK-2560x1703.jpg.webp";
import img4 from "../assets/mainHeader.webp";
import gsap from "gsap";
import {  Observer } from "gsap/all";



const TheModal = () => {
  gsap.registerPlugin(Observer);

  const [images, setImages] = useState([img1, img2, img3, img4]);

  function prev() {
    setImages((prev) => {
      const first = prev[0];
      return [...prev.slice(1, prev.length), first];
    });
    prevAnimation.play()
  }
  console.log(images)

  function next() {
    setImages((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
    nextAnimation.play()
  }


  const nextAnimation = gsap.to(".modal-image", {
    rotate: -90,
    duration:2,
    ease: "power2.inOut",
  });

  const prevAnimation = gsap.to(".modal-image", {
    rotate: 90,
    duration:2,
    ease: "power2.inOut",
  });

 

 

//   useEffect(() => {
//     Observer.create({
//         target: '.next-prev-buttons', 
//         type: "pointer",
//         onClick: () => {
//           gsap.to(".modal-image", {
//             rotate: "20%",
//             duration:2,
//             ease: "back.inOut",
//           });
//         },
//       });
//   }, [images]);

  return (
    <div className="flex justify-center items-center">
      <button
        className="prev text-white pointer bg-white p-5 rounded-full cursor-pointer next-prev-buttons"
        onClick={prev}
      >
        {"<"}
      </button>
      <div className="flex justify-between items-center gap-x-14 mx-10 h-[500px]">
        <img
          src={images[0]}
          className="modal-image"
          width={200}
          height={200}
          loading="lazy"
        />
        <img
          src={images[1]}
          className="modal-image"
          width={200}
          height={200}
          loading="lazy"
        />
        <img
          src={images[2]}
          className="modal-image"
          width={200}
          height={200}
          loading="lazy"
        />
      </div>

      <button
        className="next text-white bg-white p-5 rounded-full cursor-pointer next-prev-buttons"

        onClick={next}
      >
        {">"}
      </button>
    </div>
  );
};

export default TheModal;
