import myPhoto from './assets/mujahid.png'
import { FaGithub } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


function App() {
  return (
    <div className="bg-white h-auto">
      <div className="grid grid-rows-1 lg:grid-cols-2 lg:h-screen ">
        {/* Details Section */}
        <div
          className="lg:h-full bg-slate-900  text-white p-8 lg:order-1 order-2"
         
        >
          <header>
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold">Mujahid Islam</h1>
              <p className="text-2xl">Front end Developer | Motion Designer</p>
            </div>
            <div className="flex gap-4 items-center my-5">
              <div className="flex gap-5">
                <button className="px-6 py-2 hover:border-1 border-white bg-slate-800">
                  Hire me
                </button>
                <button className=" px-4 py-2 hover:border-1 border-white bg-yellow-500 text-black">
                  Get Resume
                </button>
              </div>
              <div className="flex gap-3">
                <FaGithub fill="#FFFFFF" size={30} />
                <FaGithub fill="#FFFFFF" size={30} />
                <FaGithub fill="#FFFFFF" size={30} />
                <FaGithub fill="#FFFFFF" size={30} />
              </div>
            </div>
          </header>
          <main >
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

              <TabPanel className="py-3">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam non possimus quam itaque ducimus molestiae esse, facere
                  alias repudiandae nisi ratione recusandae aliquam odio minus.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  
                </h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </main>
        </div>

        {/* Profile Image Section */}
        <div className="lg:h-screen bg-white lg:order-2 order-1" >
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
