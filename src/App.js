import myPhoto from './assets/mujahid.png'
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
} from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Items from './Shared/Items';
import { portfolio } from './portfolio';



function App() {
  return (
    <div className="bg-white h-auto">
      <div className="grid grid-rows-1 lg:grid-cols-2 lg:h-screen ">
        {/* Details Section */}
        <div className="lg:h-full bg-slate-900  text-white lg:p-8 pt-8 lg:order-1 order-2">
          <header className="flex flex-col lg:items-start items-center">
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
            <Tabs className="">
              <TabList className="flex gap-4 justify-between items-center bg-slate-800">
                <Tab className="px-4 py-3  focus:tab-active focus:bg-slate-900 focus:border-white text-white">
                  Specialize
                </Tab>
                <Tab className="px-4 py-3  focus:tab-active focus:bg-slate-900 focus:border-white text-white">
                  Skills
                </Tab>
                <Tab className="px-4 py-3  focus:tab-active focus:bg-slate-900 focus:border-white text-white">
                  Portfolio
                </Tab>
                <Tab className="px-4 py-3  focus:tab-active focus:bg-slate-900 focus:border-white text-white">
                  Testmonial
                </Tab>
              </TabList>
              {/* Specialize */}
              <div className="px-2">
                <TabPanel className="py-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
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
                </TabPanel>

                {/* Skills */}

                <TabPanel className="py-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <Items>
                    <FaJs size={40} />
                    <p className="mt-1">Web Development</p>
                  </Items>
                  <Items>
                    <FaReact size={40} />
                    <p className="mt-1">Motion Graphics</p>
                  </Items>
                  <Items>
                    <FaPython size={40} />
                    <p className="mt-1">Illustration</p>
                  </Items>
                  <Items>
                    <SiAdobeaftereffects size={40} />
                    <p className="mt-1">UI/UX</p>
                  </Items>
                  <Items>
                    <SiAdobepremierepro size={40} />
                    <p className="mt-1">UI/UX</p>
                  </Items>
                  <Items>
                    <SiAdobeillustrator size={40} />
                    <p className="mt-1">UI/UX</p>
                  </Items>
                  <Items>
                    <SiAdobephotoshop size={40} />
                    <p className="mt-1">UI/UX</p>
                  </Items>
                  <Items>
                    <SiFigma size={40} />
                    <p className="mt-1">UI/UX</p>
                  </Items>
                </TabPanel>

                {/* Portfolio */}
                <TabPanel className="py-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {portfolio.map((item) => (
                    <Items>
                      <h1>{item.tittle}</h1>
                      <h1>{item.description}</h1>
                      <h1>{item.repo}</h1>
                    </Items>
                  ))}
                </TabPanel>
                {/* Testmonial */}
                <TabPanel className="py-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {portfolio.map((item) => (
                    <Items>
                      <h1>{item.tittle}</h1>
                      <h1>{item.description}</h1>
                      <h1>{item.repo}</h1>
                    </Items>
                  ))}
                </TabPanel>
              </div>
            </Tabs>
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
