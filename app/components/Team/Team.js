// "use client";
// import React, { useState, useRef } from "react";
// import Slider from "react-slick";
// import {
//   FaArrowLeft,
//   FaArrowRight,
//   FaInstagram,
//   FaYoutube,
//   FaLinkedin,
//   FaEnvelope,
//   FaTwitter,
//   FaGithub,
// } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const CustomNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white p-1 rounded-full"
//       aria-label="Next"
//     >
//       <FaArrowRight />
//     </button>
//   );
// };

// const CustomPrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white p-1 rounded-full"
//       aria-label="Prev"
//     >
//       <FaArrowLeft />
//     </button>
//   );
// };

// const TeamSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//     autoplay: true,
//     autoplaySpeed: 5000,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     afterChange: (current) => setActiveSlide(current),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   const members = [
//     {
//       id: 1,
//       name: "TRK",
//       role: "Developer",
//       image: "/dummy1.jfif",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo ac ex aliquet efficitur.",
//       social: {
//         instagram: "https://www.instagram.com/trk_dev/",
//         youtube: "https://www.youtube.com/user/trkdev",
//         linkedin: "https://www.linkedin.com/in/trkdev/",
//         mail: "trk.dev@example.com",
//         twitter: "https://twitter.com/smith_designer",
//         github: "https://github.com/smithdesign",
//       },
//     },
//     {
//       id: 2,
//       name: "Smith",
//       role: "Designer",
//       image: "/dummy2.jpg",
//       desc: "Vivamus volutpat, elit eget gravida sagittis, elit nisi cursus dui, nec malesuada justo justo at ligula.",
//       social: {
//         instagram: "https://www.instagram.com/smith_designer/",
//         youtube: "https://www.youtube.com/user/smithdesigns",
//         linkedin: "https://www.linkedin.com/in/smithdesigner/",
//         mail: "smith.design@example.com",
//         twitter: "https://twitter.com/smith_designer",
//         github: "https://github.com/smithdesign",
//       },
//     },
//     {
//       id: 3,
//       name: "Shiva",
//       role: "Project Manager",
//       image: "/dummy3.jfif",
//       desc: "Praesent vitae imperdiet velit. Sed eu vestibulum sapien. Proin et tincidunt mi.",
//       social: {
//         instagram: "https://www.instagram.com/shiva_pm/",
//         youtube: "https://www.youtube.com/user/shivapm",
//         linkedin: "https://www.linkedin.com/in/shivapm/",
//         mail: "shiva.pm@example.com",
//         twitter: "https://twitter.com/smith_designer",
//         github: "https://github.com/smithdesign",
//       },
//     },
//     {
//       id: 4,
//       name: "Marilyn",
//       role: "Developer",
//       image: "/dummy4.jfif",
//       desc: "Duis vestibulum dolor nec ullamcorper ultrices. Aenean ac justo a est fermentum posuere nec vitae lectus.",
//       social: {
//         instagram: "https://www.instagram.com/marilyn_dev/",
//         youtube: "https://www.youtube.com/user/marilyndev",
//         linkedin: "https://www.linkedin.com/in/marilyndev/",
//         mail: "marilyn.dev@example.com",
//         twitter: "https://twitter.com/smith_designer",
//         github: "https://github.com/smithdesign",
//       },
//     },
//     {
//       id: 5,
//       name: "Bhargavn",
//       role: "Designer",
//       image: "/dummy2.jpg",
//       desc: "In hac habitasse platea dictumst. Suspendisse potenti. Sed in nisl id ligula tincidunt accumsan vel et elit.",
//       social: {
//         instagram: "https://www.instagram.com/bhargavn_designer/",
//         youtube: "https://www.youtube.com/user/bhargavndesigns",
//         linkedin: "https://www.linkedin.com/in/bhargavndesigner/",
//         mail: "bhargavn.design@example.com",
//         twitter: "https://twitter.com/smith_designer",
//         github: "https://github.com/smithdesign",
//       },
//     },
//   ];

//   return (
//     <div className="team-slider-container mx-auto mb-10 overflow-hidden relative">
//       <h1 className="text-5xl bg-black text-white underline font-extrabold text-center my-4 py-4">
//         OUR TEAM
//       </h1>
//       <Slider ref={sliderRef} {...settings}>
//         {members.map((member, index) => (
//           <div
//             key={member.id}
//             onClick={() => sliderRef.current.slickGoTo(index)}
//           >
//             <div
//               className={`p-4 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out ${
//                 index === activeSlide
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 object-cover rounded-full mx-auto"
//               />
//               <h3 className="mt-2 text-lg font-semibold">{member.name}</h3>
//               <p>{member.role}</p>
//               <p>{member.desc}</p>
//               <div className="flex justify-center mt-4">
//                 <a
//                   href={member.social.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mx-2 text-3xl text-blue-500 hover:text-blue-700"
//                 >
//                   <FaInstagram />
//                 </a>
//                 <a
//                   href={member.social.youtube}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mx-2 text-3xl text-red-500 hover:text-red-700"
//                 >
//                   <FaYoutube />
//                 </a>
//                 <a
//                   href={member.social.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mx-2 text-3xl text-blue-800 hover:text-blue-900"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a
//                   href={`mailto:${member.social.mail}`}
//                   className="mx-2 text-3xl text-gray-700 hover:text-gray-900"
//                 >
//                   <FaEnvelope />
//                 </a>
//                 <a
//                   href={member.social.twitter}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mx-2 text-3xl text-blue-400 hover:text-blue-600"
//                 >
//                   <FaTwitter />
//                 </a>
//                 <a
//                   href={member.social.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mx-2 text-3xl text-gray-700 hover:text-gray-900"
//                 >
//                   <FaGithub />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default TeamSlider;

"use client";
// TeamSlider.js

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import {
  FaArrowLeft,
  FaArrowRight,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const members = [
  {
    id: 1,
    name: "TRK",
    role: "Developer",
    image: "/dummy1.jfif",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo ac ex aliquet efficitur.",
    social: {
      instagram: "https://www.instagram.com/trk_dev/",
      youtube: "https://www.youtube.com/user/trkdev",
      linkedin: "https://www.linkedin.com/in/trkdev/",
      mail: "trk.dev@example.com",
      twitter: "https://twitter.com/smith_designer",
      github: "https://github.com/smithdesign",
    },
  },
  {
    id: 2,
    name: "Smith",
    role: "Designer",
    image: "/dummy2.jpg",
    desc: "Vivamus volutpat, elit eget gravida sagittis, elit nisi cursus dui, nec malesuada justo justo at ligula.",
    social: {
      instagram: "https://www.instagram.com/smith_designer/",
      youtube: "https://www.youtube.com/user/smithdesigns",
      linkedin: "https://www.linkedin.com/in/smithdesigner/",
      mail: "smith.design@example.com",
      twitter: "https://twitter.com/smith_designer",
      github: "https://github.com/smithdesign",
    },
  },
  {
    id: 3,
    name: "Shiva",
    role: "Project Manager",
    image: "/dummy3.jfif",
    desc: "Praesent vitae imperdiet velit. Sed eu vestibulum sapien. Proin et tincidunt mi.",
    social: {
      instagram: "https://www.instagram.com/shiva_pm/",
      youtube: "https://www.youtube.com/user/shivapm",
      linkedin: "https://www.linkedin.com/in/shivapm/",
      mail: "shiva.pm@example.com",
      twitter: "https://twitter.com/smith_designer",
      github: "https://github.com/smithdesign",
    },
  },
  {
    id: 4,
    name: "Marilyn",
    role: "Developer",
    image: "/dummy4.jfif",
    desc: "Duis vestibulum dolor nec ullamcorper ultrices. Aenean ac justo a est fermentum posuere nec vitae lectus.",
    social: {
      instagram: "https://www.instagram.com/marilyn_dev/",
      youtube: "https://www.youtube.com/user/marilyndev",
      linkedin: "https://www.linkedin.com/in/marilyndev/",
      mail: "marilyn.dev@example.com",
      twitter: "https://twitter.com/smith_designer",
      github: "https://github.com/smithdesign",
    },
  },
  {
    id: 5,
    name: "Bhargavn",
    role: "Designer",
    image: "/dummy2.jpg",
    desc: "In hac habitasse platea dictumst. Suspendisse potenti. Sed in nisl id ligula tincidunt accumsan vel et elit.",
    social: {
      instagram: "https://www.instagram.com/bhargavn_designer/",
      youtube: "https://www.youtube.com/user/bhargavndesigns",
      linkedin: "https://www.linkedin.com/in/bhargavndesigner/",
      mail: "bhargavn.design@example.com",
      twitter: "https://twitter.com/smith_designer",
      github: "https://github.com/smithdesign",
    },
  },
];
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white p-1 rounded-full"
      aria-label="Next"
    >
      <FaArrowRight />
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white p-1 rounded-full"
      aria-label="Prev"
    >
      <FaArrowLeft />
    </button>
  );
};

const TeamSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const members = [
    {
      id: 1,
      name: "TRK",
      role: "Developer",
      image: "/dummy1.jfif",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo ac ex aliquet efficitur.",
      social: {
        instagram: "https://www.instagram.com/trk_dev/",
        youtube: "https://www.youtube.com/user/trkdev",
        linkedin: "https://www.linkedin.com/in/trkdev/",
        mail: "trk.dev@example.com",
        twitter: "https://twitter.com/smith_designer",
        github: "https://github.com/smithdesign",
      },
    },
    {
      id: 2,
      name: "Smith",
      role: "Designer",
      image: "/dummy2.jpg",
      desc: "Vivamus volutpat, elit eget gravida sagittis, elit nisi cursus dui, nec malesuada justo justo at ligula.",
      social: {
        instagram: "https://www.instagram.com/smith_designer/",
        youtube: "https://www.youtube.com/user/smithdesigns",
        linkedin: "https://www.linkedin.com/in/smithdesigner/",
        mail: "smith.design@example.com",
        twitter: "https://twitter.com/smith_designer",
        github: "https://github.com/smithdesign",
      },
    },
    {
      id: 3,
      name: "Shiva",
      role: "Project Manager",
      image: "/dummy3.jfif",
      desc: "Praesent vitae imperdiet velit. Sed eu vestibulum sapien. Proin et tincidunt mi.",
      social: {
        instagram: "https://www.instagram.com/shiva_pm/",
        youtube: "https://www.youtube.com/user/shivapm",
        linkedin: "https://www.linkedin.com/in/shivapm/",
        mail: "shiva.pm@example.com",
        twitter: "https://twitter.com/smith_designer",
        github: "https://github.com/smithdesign",
      },
    },
    {
      id: 4,
      name: "Marilyn",
      role: "Developer",
      image: "/dummy4.jfif",
      desc: "Duis vestibulum dolor nec ullamcorper ultrices. Aenean ac justo a est fermentum posuere nec vitae lectus.",
      social: {
        instagram: "https://www.instagram.com/marilyn_dev/",
        youtube: "https://www.youtube.com/user/marilyndev",
        linkedin: "https://www.linkedin.com/in/marilyndev/",
        mail: "marilyn.dev@example.com",
        twitter: "https://twitter.com/smith_designer",
        github: "https://github.com/smithdesign",
      },
    },
    {
      id: 5,
      name: "Bhargavn",
      role: "Designer",
      image: "/dummy2.jpg",
      desc: "In hac habitasse platea dictumst. Suspendisse potenti. Sed in nisl id ligula tincidunt accumsan vel et elit.",
      social: {
        instagram: "https://www.instagram.com/bhargavn_designer/",
        youtube: "https://www.youtube.com/user/bhargavndesigns",
        linkedin: "https://www.linkedin.com/in/bhargavndesigner/",
        mail: "bhargavn.design@example.com",
        twitter: "https://twitter.com/smith_designer",
        github: "https://github.com/smithdesign",
      },
    },
  ];

  return (
    <div className="team-slider-container mx-auto mb-10 overflow-hidden relative">
      <h1 className="text-5xl bg-black text-white underline font-extrabold text-center my-4 py-4">
        OUR TEAM
      </h1>
      <Slider ref={sliderRef} {...settings}>
        {members.map((member, index) => (
          <div
            key={member.id}
            onClick={() => sliderRef.current.slickGoTo(index)}
          >
            <div
              className={`p-4 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out ${
                index === activeSlide
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
              <h3 className="mt-2 text-lg font-semibold">{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.desc}</p>
              <div className="flex justify-center mt-4">
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-3xl text-blue-500 hover:text-blue-700"
                >
                  <FaInstagram />
                </a>
                <a
                  href={member.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-3xl text-red-500 hover:text-red-700"
                >
                  <FaYoutube />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-3xl text-blue-800 hover:text-blue-900"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${member.social.mail}`}
                  className="mx-2 text-3xl text-gray-700 hover:text-gray-900"
                >
                  <FaEnvelope />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-3xl text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-3xl text-gray-700 hover:text-gray-900"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
