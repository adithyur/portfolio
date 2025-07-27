import React, { useRef, useState, useEffect } from "react";
import { FaChevronDown, FaNode, FaReact } from "react-icons/fa";
import emailjs from "emailjs-com";
import { GoTriangleRight } from "react-icons/go";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiMongodb } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ozlon from "../static/images/ozlon.png";
import kiran from "../static/images/kiran.png";
import alwin from "../static/images/alwin-portfolio.png";
import aswin from "../static/images/aswin-portfolio.png";
import shophub from "../static/images/shophub.png";
import todo from "../static/images/todo.png";
import jansakthi from "../static/images/janasakthi.png";
import "./styles.css";

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const sections = useRef({
    "#home": null,
    "#about": null,
    "#project": null,
    "#contact": null,
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    Object.values(sections.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sections.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        //console.log('SUCCESS!', response.status, response.text);
        toast.success("Form submitted successfully!");
      })
      .catch((err) => {
        //console.log('FAILED...', err);
        toast.error("Form submission failed. Please try again.");
      });
  };

  return (
    <div className="container mx-auto">
      <div className="mx-2 md:mx-20 lg:mx-20 2xl:mx-40">
        {/* NAVBAR */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mt-8 mx-2 md:mx-24 lg:mx-28 xl:mx-40">
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/adithyu.png`}
                  className="h-8"
                  alt="Logo"
                />
              </div>
              <div className="hidden md:flex">
                <a
                  href="#home"
                  className={`mx-2 ${
                    activeLink === "#home" ? "my-button1" : "my-button"
                  }`}
                  onClick={() => handleLinkClick("#home")}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className={`mx-2 ${
                    activeLink === "#about" ? "my-button1" : "my-button"
                  }`}
                  onClick={() => handleLinkClick("#about")}
                >
                  About
                </a>
                <a
                  href="#project"
                  className={`mx-2 ${
                    activeLink === "#project" ? "my-button1" : "my-button"
                  }`}
                  onClick={() => handleLinkClick("#project")}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={`mx-2 ${
                    activeLink === "#contact" ? "my-button1" : "my-button"
                  }`}
                  onClick={() => handleLinkClick("#contact")}
                >
                  Contact
                </a>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#home"
                    className={`block px-3 py-2 text-base font-bold ${
                      activeLink === "#home"
                        ? "bg-black text-white"
                        : "text-black"
                    }`}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className={`block px-3 py-2 text-base font-bold hover:text-black ${
                      activeLink === "#about"
                        ? "bg-black text-white"
                        : "text-black"
                    }`}
                  >
                    About
                  </a>
                  <a
                    href="#project"
                    className={`block px-3 py-2 text-base font-bold hover:text-black ${
                      activeLink === "#project"
                        ? "bg-black text-white"
                        : "text-black"
                    }`}
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className={`block px-3 py-2 text-base font-bold hover:text-black ${
                      activeLink === "#contact"
                        ? "bg-black text-white"
                        : "text-black"
                    }`}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* END OF NAVBAR */}

        {/* HOME */}
        <div id="home" ref={(el) => (sections.current["#home"] = el)}>
          <div className="bg-slate-100 mt-24 md:mt-20 lg:mt-32 xl:mt-20 h-[73vh] md:h-[75vh] xl:h-5/6 rounded-md flex flex-col items-center justify-center">
            <div>
              <h1 className="pt-40 md:pt-52 lg:pt-60 text-4xl lg:text-7xl font-extrabold text-gray-800">
                I'M ADITHYU R
              </h1>
            </div>
            <div className="mt-5 bg-white rounded-md mb-40 md:mb-52 lg:mb-40">
              <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-gray-500 px-5 text-gray-500 font-bold">
                Front-end developer
              </p>
            </div>
          </div>
          <div className="container mx-auto flex items-center justify-center mt-8">
            <a
              href="#about"
              className="explr-btn hover:text-black flex items-center px-4 py-2"
            >
              <span className="font-bold text-2xl tracking-wide">
                Examine More
              </span>
              <div className="icon-container">
                <FaChevronDown
                  size={18}
                  className="mt-1 ms-2 icon blink-delay-1"
                />
                <FaChevronDown
                  size={18}
                  className="-mt-3 ms-2 icon blink-delay-2"
                />
                <FaChevronDown
                  size={18}
                  className="-mt-3 ms-2 icon blink-delay-3"
                />
              </div>
            </a>
          </div>
        </div>
        {/* END OF HOME */}

        {/* ABOUT */}
        <div
          id="about"
          ref={(el) => (sections.current["#about"] = el)}
          className=" sm:mt-20 mt-16"
        >
          <div className="flex">
            <div className="flex flex-col items-center h-2/3 w-auto hidden md:block">
              <img
                src={`${process.env.PUBLIC_URL}/adithyu.jpg`}
                className="h-2/3 w-auto"
              />
              <div className="flex flex-col items-center justify-center mt-4">
                <h1 className="tracking-wide font-semibold subpixel-antialiased	text-2xl ">
                  ADITHYU R
                </h1>
                <p className="rounded-full border border-2 py-3 px-6 border-slate-100 mt-4 text-gray-700">
                  Available for Work <span class="blinking-green"></span>
                </p>
              </div>
            </div>
            <div className="ms-2 md:ms-10 ">
              <div className="about-me-header">
                <h1 className="tracking-morewide font-bold">ABOUT ME</h1>
                <div className="line ms-5 bg-gray-500"></div>
              </div>
              <div className="flex flex-col w-auto sm:block md:hidden mt-10">
                <img
                  src={`${process.env.PUBLIC_URL}/adithyu.jpg`}
                  className="-ms-1"
                />
                <div className="flex flex-col items-center justify-center mt-4">
                  <h1 className="tracking-wide font-semibold subpixel-antialiased	text-2xl ">
                    ADITHYU R
                  </h1>
                  <p className="rounded-full border border-2 py-3 px-6 border-slate-100 mt-4 text-gray-700">
                    Available for Work <span class="blinking-green"></span>
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-2xl md:text-xl font-normal font-gray-700 tracking-wide leading-10">
                  I'm Adithyu R, a passionate front-end developer building
                  impactful web experiences with the MERN stack. I specialize in
                  crafting user interfaces with React.js, ensuring smooth
                  performance and engaging interactions.
                </p>
              </div>
              <div className="hidden xl:flex w-full mt-5">
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="tracking-widest font-bold">Skills</h2>
                    <div className="line ms-2 bg-gray-500 h-1"></div>
                  </div>
                  <div className="pt-4">
                    <ul className="flex flex-col gap-y-4">
                      <li className="flex items-center">
                        <FaReact className="font-gray-500 me-2" /> React.js
                      </li>
                      <li className="flex items-center">
                        <FaNode className="font-gray-500 me-2" /> Node.js
                        (Express.js)
                      </li>
                      <li className="flex items-center">
                        <SiMongodb className="font-gray-500 me-2" /> MongoDB
                      </li>
                      <li className="flex items-center">
                        <RiTailwindCssFill className="font-gray-500 me-2" />{" "}
                        Tailwind CSS
                      </li>
                      <li className="flex items-center">
                        <SiMui className="font-gray-500 me-2" /> Material-ui
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-4 pe-4 mt-4 md:mt-0 md:ml-4 lg:ml-0">
                  <div className="flex items-center">
                    <h2 className="tracking-widest font-bold">Education</h2>
                    <div className="line ms-2 bg-gray-500 h-1"></div>
                  </div>
                  <div>
                    <ul className="border-l-2 border-gray-500 pl-4 relative mt-4 md:mt-5 pr-2 md:-mr-2">
                      <li className="relative mb-2">
                        <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border border-gray-500 rounded-full"></span>
                        <div className="flex gap-x-4 md:flex-col xl:flex-row justify-between mt-2 items-center">
                          <p className="bg-gray-200 flex items-center rounded-full px-2 text-[12px] h-8">
                            2021 <span>- </span> 2023
                          </p>
                          <p className="font-bold text-gray-800 md:text-sm xl:text-base xl:pt-0 md:pt-1">
                            University of Kerala <br />{" "}
                            <span className="font-normal text-gray-500">
                              Master Degree
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="relative mt-10">
                        <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border border-gray-500 rounded-full"></span>
                        <div className="flex gap-x-4 md:flex-col xl:flex-row justify-between mt-2 items-center">
                          <p className="bg-gray-200 flex items-center rounded-full px-2 text-[12px] h-8">
                            2018 <span>-</span> 2021
                          </p>
                          <p className="font-bold text-gray-800 md:text-sm xl:text-base xl:pt-0 md:pt-1">
                            University of Kerala <br />{" "}
                            <span className="font-normal text-gray-500">
                              Bachelor Degree
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-5 hidden xl:flex justify-center md:justify-start">
                <a
                  href={`${process.env.PUBLIC_URL}/Resume_Adithyu_R.pdf`}
                  download="Adithyu_R_CV.pdf"
                  className="dwnld-btn"
                  type="button"
                >
                  <span className="dwnld-btn-txt">Download CV</span>
                  <span className="dwnld-btn-icn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 35 35"
                      id="bdd05811-e15d-428c-bb53-8661459f9307"
                      data-name="Layer 2"
                      className="svg"
                    >
                      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:hidden grid grid-cols-2 w-full mt-5">
            <div className="p-4">
              <div className="flex items-center">
                <h2 className="tracking-widest font-bold">Skills</h2>
                <div className="line ms-2 bg-gray-500 h-1"></div>
              </div>
              <div className="pt-4">
                <ul className="flex flex-col gap-y-4">
                  <li className="flex items-center">
                    <FaReact className="font-gray-500 me-2" /> React.js
                  </li>
                  <li className="flex items-center">
                    <FaNode className="font-gray-500 me-2" /> Node.js
                    (Express.js)
                  </li>
                  <li className="flex items-center">
                    <SiMongodb className="font-gray-500 me-2" /> MongoDB
                  </li>
                  <li className="flex items-center">
                    <RiTailwindCssFill className="font-gray-500 me-2" />{" "}
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <SiMui className="font-gray-500 me-2" /> Material-ui
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-4 pe-4 md:ml-4 lg:ml-0">
              <div className="flex items-center">
                <h2 className="tracking-widest font-bold">Education</h2>
                <div className="line ms-2 bg-gray-500 h-1"></div>
              </div>
              <div>
                <ul className="border-l-2 border-gray-500 pl-4 relative mt-4 md:mt-5 pr-2 md:-mr-2">
                  <li className="relative md:pl-0 xl:pl-4 mb-2">
                    <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border border-gray-500 rounded-full"></span>
                    <div className="flex gap-x-4 mt-2 items-center">
                      <p className="bg-gray-200 flex items-center rounded-full px-2 text-[12px] h-8">
                        2021 <span>- </span> 2023
                      </p>
                      <p className="font-bold text-gray-800 md:text-sm xl:text-base xl:pt-0 md:pt-1">
                        University of Kerala <br />{" "}
                        <span className="font-normal text-gray-500">
                          Master Degree
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="relative md:pl-0 xl:pl-4 mt-10">
                    <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border border-gray-500 rounded-full"></span>
                    <div className="flex gap-x-4 mt-2 items-center">
                      <p className="bg-gray-200 flex items-center rounded-full px-2 text-[12px] h-8">
                        2018 <span>-</span> 2021
                      </p>
                      <p className="font-bold text-gray-800 md:text-sm xl:text-base xl:pt-0 md:pt-1">
                        University of Kerala <br />{" "}
                        <span className="font-normal text-gray-500">
                          Bachelor Degree
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center md:justify-start xl:hidden">
            <a
              href={`${process.env.PUBLIC_URL}/Resume_Adithyu_R.pdf`}
              download="Adithyu_R_CV.pdf"
              className="dwnld-btn"
              type="button"
            >
              <span className="dwnld-btn-txt">Download CV</span>
              <span className="dwnld-btn-icn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        {/* END OF ABOUT */}

        {/* PROJECT */}
        <div
          id="project"
          ref={(el) => (sections.current["#project"] = el)}
          className="mt-10 md:mt-16"
        >
          <div className="tracking-morewide font-bold flex items-center">
            <p className="mx-6">PROJECTS</p>
            <div className="line bg-gray-500 h-1 flex-grow"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-5">
              <a
              href="https://ozlon-learning-app.vercel.app/"
                //href="https://www.ozlonlearningapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full md:w-11/12 px-8 pb-8 pt-40 mt-10 group"
              >
                <img
                  src={ozlon}
                  className="absolute inset-0 h-full w-full object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  OZLON
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  Learning App
                </div>
              </a>
              <a
               href="https://welder-blue.vercel.app/"
                //href="https://www.kiranironbuilders.in"
                target="_blank"
                rel="noopener noreferrer"
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full md:w-11/12 px-8 pb-8 pt-40 mt-10 group"
              >
                <img
                  src={kiran}
                  className="absolute inset-0 h-full w-full object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  KIRAN
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  Iron Builders
                </div>
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <a
                href="https://alwin-portfolio-mauve.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full md:w-11/12 px-8 pb-8 pt-40 mt-10 group"
              >
                <img
                  src={alwin}
                  className="absolute inset-0 h-full w-full object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  Potfolio
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 ">
                  personal-potfolio
                </div>
              </a>

              <a
                href="https://janasakthipublicschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full md:w-11/12 px-8 pb-8 pt-40 mt-10 group"
              >
                <img
                  src={jansakthi}
                  className="absolute inset-0 h-full w-full object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  Janasakthi
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  Public School
                </div>
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <a
                href="https://shop-hub-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full md:w-11/12 px-8 pb-8 pt-40 mt-10 group"
              >
                <img
                  src={shophub}
                  className="absolute inset-0 h-full w-full object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  SHOPHUB
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 ">
                  e-commerce
                </div>
              </a>

              <a
                href="https://to-do-frontend-flax.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full md:w-11/12 px-8 pb-8 pt-40 mt-10 group"
              >
                <img
                  src={todo}
                  className="absolute inset-0 h-full w-full object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  TO-DO
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  Task reminder
                </div>
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <a
                href="https://aswin-portfolio-fawn.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full md:w-1/2 px-8 pb-8 pt-40 mt-10 group"
              >
                <img
                  src={aswin}
                  className="absolute inset-0 h-full w-full object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  Potfolio
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 ">
                  personal-potfolio
                </div>
                <div className="rounded-lg border flex items-center gap-x-1 bg-black right-2 bottom-2 absolute z-10 p-2">
                  <div className="rounded-full h-1 w-1 bg-red-500 "></div>
                  <p className="text-red-500 font-medium text-[10px]">
                    On going
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* END OF PROJECT */}

        {/* CONTACT */}
        <div
          id="contact"
          ref={(el) => (sections.current["#contact"] = el)}
          className="mt-16"
        >
          <div className="tracking-morewide font-bold flex items-center">
            <p className="mx-6">GET IN TOUCH</p>
            <div className="line bg-gray-500 h-1 flex-grow"></div>
          </div>
          <div className="flex flex-col md:flex-row mt-5">
            <div className="w-full bg-slate-100 md:w-1/3">
              <a className="flex items-center pt-10 px-5 hover:text-yellow-500">
                <FaLocationDot size={18} /> &nbsp; Kollam, Kerala
              </a>
              <a
                href="tel:+919048382436"
                className="flex items-center pt-5 px-5 hover:text-blue-500"
              >
                <FaPhoneAlt size={18} /> &nbsp; +91 9048382436
              </a>
              <a
                href="mailto:adithyur@gmail.com"
                target="_blank"
                className="flex items-center pt-5 px-5 hover:text-red-500"
              >
                <MdEmail size={18} /> &nbsp; adithyur@gmail.com
              </a>
              <a
                href="https://wa.me/919048382436"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center pt-5 px-5 hover:text-green-500"
              >
                <IoLogoWhatsapp size={18} /> &nbsp; +91 9048382436
              </a>
              <div className="mt-10">
                <h1 className="flex justify-center pb-5">FOLLOW ME</h1>
                <div className="flex justify-center mb-5">
                  <a
                    href="https://www.linkedin.com/in/adithyu-r-b54199224/"
                    target="_blank"
                    className="pr-12 hover:text-blue-500"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href="https://github.com/adithyur"
                    target="_blank"
                    className="hover:text-blue-500"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 md:ms-10 border border-2">
              <form onSubmit={handleSubmit} className="space-y-4 mx-10 my-10">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full md:w-1/2 rounded-md border-0 px-3.5 py-2.5 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full md:w-1/2 rounded-md border-0 px-3.5 py-2.5 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 mt-4 md:mt-0"
                  />
                </div>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                <div className="btn-conteiner mt-10">
                  <button type="submit" className="btn-content mt-5" href="#">
                    <span className="btn-title">SEND MESSAGE</span>
                    <span className="icon-arrow">
                      <svg
                        width="66px"
                        height="25px"
                        viewBox="0 0 66 43"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="arrow"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <path
                            id="arrow-icon-one"
                            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                            fill="#FFFFFF"
                          />
                          <path
                            id="arrow-icon-two"
                            d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                            fill="#FFFFFF"
                          />
                          <path
                            id="arrow-icon-three"
                            d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                            fill="#FFFFFF"
                          />
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
        {/* END OF CONTACT */}

        {/* FOOTER */}
        <div className="flex justify-center mt-10 border border-t-2 border-x-0">
          <p className="py-8">
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://adithyu-r.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Adithyu
            </a>
            , All rights reserved
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;

// py-40 md:py-52 lg:py-60

{
  /* <div className="flex flex-col md:flex-row mt-5">
              <div className="p-4 md:flex-1">
                <div className="flex items-center">
                  <h2 className="tracking-widest font-bold">Skills</h2>
                  <div className="line ms-2 bg-gray-500 h-1"></div>
                </div>
                <ul>
                  /* <li className='flex items-center mt-4'>
                                    <GoTriangleRight className='font-gray-500'/> React.js
                                </li>
                                <li className='flex items-center mt-2'>
                                    <GoTriangleRight className='font-gray-500'/> Node.js (Express.js)
                                </li>
                                <li className='flex items-center mt-2'>
                                    <GoTriangleRight className='font-gray-500'/> MongoDB
                                </li>
                                <li className='flex items-center mt-2'>
                                    <GoTriangleRight className='font-gray-500'/> Tailwind CSS
                                </li>
                                <li className='flex items-center mt-2'>
                                    <GoTriangleRight className='font-gray-500'/> Material-ui
                                </li> 

                  <li className="flex items-center mt-4">
                    <FaReact className="font-gray-500 me-2" /> React.js
                  </li>
                  <li className="flex items-center mt-2">
                    <FaNode className="font-gray-500 me-2" /> Node.js
                    (Express.js)
                  </li>
                  <li className="flex items-center mt-2">
                    <SiMongodb className="font-gray-500 me-2" /> MongoDB
                  </li>
                  <li className="flex items-center mt-2">
                    <RiTailwindCssFill className="font-gray-500 me-2" />{" "}
                    Tailwind CSS
                  </li>
                  <li className="flex items-center mt-2">
                    <SiMui className="font-gray-500 me-2" /> Material-ui
                  </li>
                </ul>
              </div>
              <div className="py-4 pe-4 md:flex-1 mt-4 md:mt-0 md:ml-4 lg:ml-0">
                <div className="flex items-center">
                  <h2 className="tracking-widest font-bold">Education</h2>
                  <div className="line ms-2 bg-gray-500 h-1"></div>
                </div>
                <ul className="border-l-2 border-gray-500 pl-4 relative mt-4 md:mt-5 pr-2 md:-mr-2">
                  <li className="relative pl-4 md:pl-0 xl:pl-4 mb-2">
                    <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border border-gray-500 rounded-full"></span>
                    <div className="flex md:flex-col xl:flex-row justify-between mt-2 items-center">
                      <p className="bg-gray-200 flex items-center rounded-full px-2 text-[12px] h-8">
                        2021 <span>- </span> 2023
                      </p>
                      <p className="font-bold text-gray-800 md:text-sm xl:text-base xl:pt-0 md:pt-1">
                        University of Kerala <br />{" "}
                        <span className="font-normal text-gray-500">
                          Master Degree
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="relative md:pl-0 xl:pl-4 mt-10">
                    <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border border-gray-500 rounded-full"></span>
                    <div className="flex md:flex-col xl:flex-row justify-between mt-2 items-center">
                      <p className="bg-gray-200 flex items-center rounded-full px-2 text-[12px] h-8">
                        2018 <span>-</span> 2021
                      </p>
                      <p className="font-bold text-gray-800 md:text-sm xl:text-base xl:pt-0 md:pt-1">
                        University of Kerala <br />{" "}
                        <span className="font-normal text-gray-500">
                          Bachelor Degree
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */
}
