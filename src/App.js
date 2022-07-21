import { Fragment } from "react";
import myPhoto from "./assets/mujahid.png";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaLaptopCode,
  FaFilm,
  FaPalette,
  FaPencilRuler,
  FaJs,
  FaReact,
  FaPython,
  FaCode,
  FaGlobe,
} from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";
import { Tab } from "@headlessui/react";
import Items from "./Shared/Items";
import { portfolio } from "./portfolio";

function App() {
  return (
    <div className="bg-white h-auto w-full">
      <div className="grid grid-rows-1 lg:grid-cols-2 lg:h-screen ">
        {/* Details Section */}
        <div className="lg:h-full  bg-slate-900  text-white lg:p-8 pt-8 lg:order-1 order-2">
          <header className="flex flex-col lg:items-start items-center lg:mt-48">
            <div className="flex flex-col lg:items-start items-center gap-4">
              <h1 className="text-5xl font-bold">Mujahid Islam</h1>
              <p className="lg:text-2xl text-xl">
                Front end Developer | Motion Designer
              </p>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-4 gap-7 items-center my-5">
              <div className="flex gap-5">
                <button className="px-6 py-2 hover:bg-slate-900 border-white bg-slate-800 font-normal transition ease-in-ease delay-150">
                  Hire me
                </button>
                <button className=" px-4 py-2 hover:bg-slate-900 hover:text-white border-white bg-yellow-500 text-black font-bold transition ease-in-out delay-150">
                  Get Resume
                </button>
              </div>
              <div className="flex gap-4">
                <FaGithub fill="#FFFFFF" size={30} />
                <FaTwitter fill="#FFFFFF" size={30} />
                <FaLinkedin fill="#FFFFFF" size={30} />
                <FaBehance fill="#FFFFFF" size={30} />
              </div>
            </div>
          </header>
          <main className="mt-4">
            <Tab.Group>
              <Tab.List className="flex gap-4 justify-between items-center bg-slate-800 ">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "px-5 py-3  focus:tab-active bg-yellow-500 focus:text-slate-900 text-slate-900 font-semibold"
                          : "px-5 py-3  focus:tab-active   text-white  font-semibold"
                      }
                    >
                      Specialize
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "px-5 py-3  focus:tab-active bg-yellow-500 focus:text-slate-900 text-slate-900 font-semibold"
                          : "px-5 py-3  focus:tab-active   text-white  font-semibold"
                      }
                    >
                      Skills
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "px-5 py-3  focus:tab-active bg-yellow-500 focus:text-slate-900 text-slate-900 font-semibold"
                          : "px-5 py-3  focus:tab-active   text-white  font-semibold"
                      }
                    >
                      Portfolio
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "px-5 py-3  focus:tab-active bg-yellow-500 focus:text-slate-900 text-slate-900 font-semibold"
                          : "px-5 py-3  focus:tab-active   text-white  font-semibold"
                      }
                    >
                      Testmonial
                    </button>
                  )}
                </Tab>
              </Tab.List>
              {/* Specialize */}
              <Tab.Panels className="px-2">
                <Tab.Panel className="py-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <Items>
                    <FaLaptopCode size={40} />
                    <p className="mt-1">Web Development</p>
                  </Items>
                  <Items>
                    <FaFilm size={40} />
                    <p className="mt-1">Motion Graphics</p>
                  </Items>
                  <Items>
                    <FaPalette size={40} />
                    <p className="mt-1">Illustration</p>
                  </Items>
                  <Items>
                    <FaPencilRuler size={40} />
                    <p className="mt-1">UI/UX</p>
                  </Items>
                </Tab.Panel>

                {/* Skills */}

                <Tab.Panel className="py-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <Items>
                    <FaJs size={40} />
                    <p className="mt-1">JavaScript</p>
                  </Items>
                  <Items>
                    <FaReact size={40} />
                    <p className="mt-1">React JS</p>
                  </Items>
                  <Items>
                    <FaPython size={40} />
                    <p className="mt-1">Python</p>
                  </Items>
                  <Items>
                    <SiAdobeaftereffects size={40} />
                    <p className="mt-1">After Effects</p>
                  </Items>
                  <Items>
                    <SiAdobepremierepro size={40} />
                    <p className="mt-1">Premiere Pro</p>
                  </Items>
                  <Items>
                    <SiAdobeillustrator size={40} />
                    <p className="mt-1">Illustrator</p>
                  </Items>
                  <Items>
                    <SiAdobephotoshop size={40} />
                    <p className="mt-1">Photoshop</p>
                  </Items>
                  <Items>
                    <SiFigma size={40} />
                    <p className="mt-1">Figma</p>
                  </Items>
                </Tab.Panel>

                {/* Portfolio */}
                <Tab.Panel className="py-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {portfolio.map(
                    ({ thumb, tittle, repo, description, live }) => (
                      <Items>
                        <img
                          className="rounded-lg"
                          src={thumb}
                          alt="thumbnail"
                        />
                        <div className="mt-2">
                          <h1 className="text-xl font-bold">{tittle}</h1>
                          <h1>{description}</h1>
                        </div>
                        <div className="mt-2 flex gap-6 items-center">
                          <a href={repo} target="_blank" rel="noreferrer">
                            <button>
                              <FaCode size={25} />
                            </button>
                          </a>
                          <a href={live} target="_blank" rel="noreferrer">
                            <button>
                              <FaGlobe size={25} />
                            </button>
                          </a>
                        </div>
                      </Items>
                    )
                  )}
                </Tab.Panel>
                {/* Testmonial */}
                <Tab.Panel className="py-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {portfolio.map((item) => (
                    <Items>
                      <h1>{item.tittle}</h1>
                      <h1>{item.description}</h1>
                      <h1>{item.repo}</h1>
                    </Items>
                  ))}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </main>
        </div>

        {/* Profile Image Section */}
        <div className="lg:h-screen bg-white lg:order-2 order-1">
          <img
            className="w-full lg:h-screen grayscale hover:grayscale-0 transition ease-in-out delay-150 object-cover"
            src={myPhoto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
