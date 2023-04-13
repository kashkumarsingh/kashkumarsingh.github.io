// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper-bundle.min.css";

// const MarqueeSlider = () => {
//   const tools = [
//     "Figma",
//     "Adobe XD",
//     "PhotoShop",
//     "InVision",
//     "Axure",
//     "Sketch",
//     "Miro",
//     "Whimsical",
//     "Balsamiq",
//   ];
//   const skills = [
//     "User-centered design",
//     "User research",
//     "Information architecture",
//     "Wire Framing",
//     "Prototyping",
//     "Visual Design",
//     "Design System",
//     "Front-end development",
//     "Collaboration, Communication, and Problem-solving",
//   ];

//   const toolSlides = tools.map((tool, i) => (
//     <SwiperSlide key={i}>
//       <span className="relative px-4">{tool}</span>
//     </SwiperSlide>
//   ));
//   const skillSlides = skills.map((skill, i) => (
//     <SwiperSlide key={i}>
//       <span className="relative px-4">{skill}</span>
//     </SwiperSlide>
//   ));

//   const toolSettings = {
//     loop: true,
//     autoplay: {
//       delay: 0,
//       disableOnInteraction: false,
//     },
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     grabCursor: true,
//   };

//   const skillSettings = {
//     loop: true,
//     autoplay: {
//       delay: 0,
//       disableOnInteraction: false,
//     },
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     grabCursor: true,
//   };

//   return (
//     <section className="marquee" id="marquee">
//       <div className="marquee__container container-fluid">
//         <div className="marquee__inner">
//           <div className=" mx-4 marquees marquee__tools marquee-tools">
//             <h6 className="inline-block text-[#FFC857] marquee__heading">
//               UI/UX Tools that I&apos;ve worked:
//             </h6>
//             <Swiper {...toolSettings}>{toolSlides}</Swiper>
//           </div>
//           <div className=" mx-4 marquees marquee__skills marquee-skills">
//             <h6 className="inline-block text-[#FFC857] marquee__heading">
//               UI/UX Skills:
//             </h6>
//             <Swiper {...skillSettings}>{skillSlides}</Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarqueeSlider;