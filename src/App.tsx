import logo from "./assets/images/logo.png";
import rightWhite from "./assets/images/RightWight.png";
import illustration from "./assets/images/Illustration.png";
import client0 from "./assets/images/client0.png";
import client1 from "./assets/images/client1.png";
import client2 from "./assets/images/client2.png";
import client3 from "./assets/images/client3.png";
import client4 from "./assets/images/client4.png";
import client5 from "./assets/images/client5.png";
import client6 from "./assets/images/client6.png";
import membership from "./assets/images/membership.png";
import national from "./assets/images/national.png";
import groups from "./assets/images/groups.png";
import illustration2 from "./assets/images/illustration2.png";
import members from "./assets/images/Members.png";
import clubs from "./assets/images/clubs.png";
import event from "./assets/images/event.png";
import payment from "./assets/images/payment.png";
import illustration3 from "./assets/images/illustration3.png";
import tesla from "./assets/images/tesla.png";
import greenRight from "./assets/images/green-right.png";
import blueClient0 from "./assets/images/blueClient0.png";
import marketing1 from "./assets/images/marketing1.png";
import marketing2 from "./assets/images/marketing2.png";
import marketing3 from "./assets/images/marketing3.png";
import bigLogo from "./assets/images/bigLogo.png";
import instagram from "./assets/images/instagram.png";
import dribble from "./assets/images/dribble.png";
import x from "./assets/images/x.png";
import youtube from "./assets/images/youtube.png";
import send from "./assets/images/send.png";

function App() {
  return (
    <>
      <header className="flex justify-around  px-6 py-3 font-display ">
        <div className="flex items-center ">
          <img src={logo} className="inline  pr-1 "></img>
          <span className="text-[rgba(38, 50, 56, 1)]  text-xl  font-bold leading-tight ">
            Nexcent
          </span>
        </div>
        <div className="flex">
          <div className="flex pl-20 text-d_gray text-[11px] font-medium self-center  mr-2">
            <span className="px-2">Home</span>
            <span className="px-2">Features</span>
            <span className="px-2">Community</span>
            <span className="px-2">Blog</span>
            <span className="px-2">Pricing</span>
          </div>
          <span className="flex ml-2">
            <button className="bg-primary text-white text-[11px] font-light px-6 py-2.5 rounded-sm">
              Register Now{" "}
              <img src={rightWhite} className="inline align-middle"></img>
            </button>
          </span>
        </div>
      </header>
      <main className="font-display">
        <section className=" justify-center flex py-15 bg-silver">
          <div className=" inline-block mr-8 self-center">
            <h1 className="text-[47.5px] text-d_gray font-semibold  leading-10t">
              Lessons and insights
            </h1>
            <h1 className="text-[47.5px] text-primary font-semibold leading-10 ">
              from 8 years
            </h1>
            <p className="text-[11px] text-d_gray leading-12">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="bg-primary text-white text-[11px] font-light px-6 py-2.5 rounded-sm ">
              Register
            </button>
          </div>
          <div className="ml-8 ">
            <img src={illustration}></img>
          </div>
        </section>
        <section className="text-d_gray pt-4">
          <div className="flex flex-col ">
            <h1 className="self-center text-[26px] font-semibold leading-12">
              Our Clients
            </h1>
            <p className="self-center text-[10px]">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <div className="flex justify-center items-center py-6">
            <img src={client0} className="pr-12"></img>
            <img src={client1} className="px-12"></img>
            <img src={client2} className="px-12"></img>
            <img src={client3} className="px-12"></img>
            <img src={client4} className="px-12"></img>
            <img src={client5} className="px-12"></img>
            <img src={client6} className="pl-12"></img>
          </div>
        </section>
        <section className="text-d_gray pt-4 space-y-4">
          <div className="flex flex-col ">
            <h1 className=" self-center text-[26px] font-semibold ">
              Manage your entire community
            </h1>
            <h1 className=" self-center text-[26px] font-semibold ">
              in a single system
            </h1>
            <p className="self-center text-[10px]">
              Who is Nextcent suitable for?
            </p>
          </div>
          <div className="flex justify-evenly ">
            <span className="flex flex-col justify-center w-[200px] shadow-xl py-2 px-2">
              <span className="self-center">
                <img src={membership}></img>
              </span>
              <p className="text-center text-md font-bold px-6">
                Membership Organisations
              </p>
              <p className="text-[10px] text-center text-grey leading-3.5 ">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </span>
            <span className="flex flex-col justify-center w-[200px] shadow-xl py-2 px-2">
              <span className="self-center">
                <img src={national}></img>
              </span>
              <p className="text-center text-md font-bold px-6">
                National Associations
              </p>
              <p className="text-[10px] text-center text-grey leading-3.5 ">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </span>
            <span className="flex flex-col justify-center w-[200px] shadow-xl py-2 px-2">
              <span className="self-center">
                <img src={groups}></img>
              </span>
              <p className="text-center text-md font-bold px-6">
                Clubs And Groups
              </p>
              <p className="text-[10px] text-center text-grey leading-3.5 ">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </span>
          </div>
        </section>
        <section className="py-10 flex justify-center  ">
          <span className="mr-3">
            <img src={illustration2}></img>
          </span>
          <span className="w-[430px] ml-3">
            <h1 className=" self-center text-[26px] font-semibold leading-8 ">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="text-[10px]  text-grey leading-3.5 py-4 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="bg-primary text-white text-[11px] font-light px-6 py-2.5 rounded-sm ">
              Learn More
            </button>
          </span>
        </section>
        <section className="bg-silver py-20 flex justify-evenly">
          <span className="self-center mr-5">
            <h1 className="self-center text-[26px] font-semibold leading-8">
              Helping a local
            </h1>
            <h1 className="self-center text-[26px] font-semibold leading-8 text-primary">
              business reinvent itself
            </h1>
            <p className="text-[#18191f] text-[11px]">
              We reached here with our hard work and dedication
            </p>
          </span>
          <span className="flex ml-5 ">
            <span className="flex flex-col ">
              <span className="flex mr-6 mb-3">
                <span className="self-center mr-1">
                  <img src={members}></img>
                </span>
                <span className="ml-1">
                  <h1 className=" text-xl font-bold ">2,245,341</h1>
                  <p className="text-[10px]  text-grey text-left">Members</p>
                </span>
              </span>
              <span className="flex mr-6 mt-3">
                <span className="self-center mr-1">
                  <img src={event}></img>
                </span>
                <span className="ml-1">
                  <h1 className=" text-xl font-bold ">828,867</h1>
                  <p className="text-[10px]  text-grey text-left">Clubs</p>
                </span>
              </span>
            </span>
            <span className="flex flex-col ">
              <span className="flex  ml-6 mb-3">
                <span className="self-center mr-1">
                  <img src={clubs}></img>
                </span>
                <span className="ml-1">
                  <h1 className=" text-xl font-bold ">46,328</h1>
                  <p className="text-[10px]  text-grey text-left">Members</p>
                </span>
              </span>
              <span className="flex ml-6 mt-3">
                <span className="self-center mr-1">
                  <img src={payment}></img>
                </span>
                <span className="ml-1">
                  <h1 className=" text-xl font-bold ">1,926,436</h1>
                  <p className="text-[10px]  text-grey text-left">Payments</p>
                </span>
              </span>
            </span>
          </span>
        </section>
        <section className="py-10 flex justify-center space-y-2 ">
          <span className="mr-3">
            <img src={illustration3}></img>
          </span>
          <span className="w-[430px] ml-3">
            <h1 className=" self-center text-[26px] font-semibold leading-8 ">
              How to design your site footer like we did
            </h1>
            <p className="text-[10px]  text-grey leading-3.5 py-4 text-left">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="bg-primary text-white text-[11px] font-light px-6 py-2.5 rounded-sm ">
              Learn More
            </button>
          </span>
        </section>
        <section className="bg-silver flex justify-center py-4  ">
          <span className=" self-center mr-2 ">
            <img src={tesla} className="w-[90%]"></img>
          </span>
          <span className="w-[470px] ml-2  ">
            <p className="text-[10px]  text-grey   text-left leading-4 ">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3 className="text-sm text-primary font-semibold py-2">
              Tim Smith
            </h3>
            <p className="text-[10px]  text-grey   text-left ">
              British Dragon Boat Racing Association
            </p>
            <div className="flex  items-center pt-3 ">
              <img src={blueClient0} className="pr-3"></img>
              <img src={client1} className="px-3"></img>
              <img src={client2} className="px-3"></img>
              <img src={client3} className="px-3"></img>
              <img src={client4} className="px-3"></img>
              <img src={client5} className="px-3"></img>
              <button className=" text-primary text-xs font-semibold pr-2 py-2.5 rounded-sm ">
                Meet all customers{" "}
                <img src={greenRight} className="inline ml-2"></img>
              </button>
            </div>
          </span>
        </section>
        <section className="py-10">
          <span className="flex flex-col items-center">
            <h1 className=" self-center text-[24px] font-semibold leading-10 ">
              Caring is the new marketing
            </h1>
            <p className="text-[10px]  text-grey   leading-4 w-[400px] text-center ">
              The Nextcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </span>
          <span className="flex justify-center py-2">
            <span className="mr-1.5 w-[256px]">
              <span>
                <img src={marketing1}></img>
              </span>
              <span className="bg-silver py-2 px-2 w-[215px] inline-block text-center relative rounded-md bottom-18 left-5 leading-tight">
                <p className=" text-[13px] font-medium text-grey    ">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <button className=" text-primary text-xs font-semibold pr-2 py-2.5 rounded-sm ">
                  Readmore <img src={greenRight} className="inline ml-2"></img>
                </button>
              </span>
            </span>
            <span className="mx-1.5 w-[256px]">
              <span>
                <img src={marketing2}></img>
              </span>
              <span className="bg-silver py-2 px-2 w-[215px] inline-block text-center relative rounded-md bottom-18 left-5 leading-tight">
                <p className=" text-[13px] font-medium text-grey    ">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <button className=" text-primary text-xs font-semibold pr-2 py-2.5 rounded-sm ">
                  Readmore <img src={greenRight} className="inline ml-2"></img>
                </button>
              </span>
            </span>
            <span className="ml-1.5 w-[256px]">
              <span>
                <img src={marketing3}></img>
              </span>
              <span className="bg-silver py-2 px-4 w-[215px] inline-block text-center relative rounded-md bottom-18 left-5 leading-tight">
                <p className=" text-[13px] font-medium text-grey    ">
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <button className=" text-primary text-xs font-semibold pr-2 py-2.5 rounded-sm ">
                  Readmore <img src={greenRight} className="inline ml-2"></img>
                </button>
              </span>
            </span>
          </span>
        </section>
        <section className="bg-silver  flex flex-col items-center  pb-5">
          <p className="text-4xl font-semibold w-[450px] text-center py-5">
            Pellentesque suscipit fringilla libero eu.
          </p>
          <button className="bg-primary text-white text-[11px] font-light px-6 py-2.5 rounded-sm ">
            Get a Demo{" "}
            <img src={rightWhite} className="inline align-middle"></img>
          </button>
        </section>

        <section className="bg-black py-10">
          <span className="flex justify-around">
            <span className="flex flex-col mr-0 self-center">
              <span className="flex ">
                <span className="mr-1 self-center">
                  <img src={bigLogo}></img>
                </span>
                <span className="text-white text-xl ml-.5 font-semibold">
                  Nexcent
                </span>
              </span>
              <p className="text-silver text-[10px] font-extralight pt-6 leading-5">
                Copyright © 2020 Landify UI Kit.
              </p>
              <p className="text-silver  text-[10px]  font-extralight pb-6">
                All rights reserved
              </p>
              <span className="flex">
                <img src={instagram} className="px-1"></img>
                <img src={dribble} className="px-1"></img>
                <img src={x} className="px-1"></img>
                <img src={youtube} className="px-1"></img>
              </span>
            </span>

            <span className="flex ml-0">
              <span className="mr-8">
                <p className="text-white text-md font-light pb-5">Company</p>
                <span className="text-silver text-[11px] font-extralight leading-5">
                  <p>About us</p>
                  <p>Blog</p>
                  <p>Contact us</p>
                  <p>Pricing</p>
                  <p>Testimonials</p>
                </span>
              </span>
              <span className="mx-8">
                <p className="text-white text-md font-light pb-5">Support</p>
                <span className="text-silver text-[11px] font-extralight leading-5">
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy policy</p>
                <p>Status</p>
                </span>
              </span> 
              <span className="ml-8 ">
                <p className="text-white text-md font-light pb-5">Stay up to date</p>
                <span className=" flex text-silver text-[11px] font-extralight leading-5">
                <input type="email"  placeholder="Your email address" className="bg-d_gray rounded-md px-2 py-1 outline-none text-[11px] font-extralight"></input>
                <button className="self-center relative right-[20px] "><img src={send}></img></button>
                </span>
              </span>
            </span>
          </span>
        </section>
      </main>
    </>
  );
}

export default App;
