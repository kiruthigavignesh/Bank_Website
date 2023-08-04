import gif from "../src/images/bank-providing-loan-amount.gif";
import atm from "../src/images/atm-card.gif";
import scanning from "../src/images/QR scanning.gif";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./components/Credit";
import loan from "../src/images/loanapproval.gif";
import business from "../src/images/business.gif";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="mt-10">
        <section class="bg-gray-900 text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={gif}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                We Listen, We Care
                <span class="sm:block mb-6"> Improve Your Lifestyle. </span>
              </h1>

              <p class="mb-8 leading-relaxed">
                {" "}
                UnLock the door to happiness, with our Home Loans.Join us now
                and experience banking made simple, secure, and rewarding. Let's
                build a brighter future together.
              </p>
              <div class="flex justify-center gap-5">
                <button class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                  {" "}
                  Apply Online
                </button>
                <button class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <div class="h-full mt-16">
          <div class="container mx-auto  lg:px-20">
            <div class="grid grid-cols-3 h-full pb-40">
              <div class="border-r border-gray-300 mx-3 lg:pl-20">
                <div class=" py-10 pb-3 mt-72  relative bg-sky-600 group hover:bg-sky-500 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div class="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-indigo-200 group-hover:bg-purple-50"></div>
                    <img src={loan} />
                  </div>
                  <div class="px-7 mt-20">
                    <h1 class="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">
                      01.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">
                      Get instant Loan Approval
                    </h2>
                    <p class="mt-2 opacity-60 group-hover:opacity-70 "></p>
                  </div>
                </div>
              </div>
              <div class="border-r border-gray-300 mx-3 lg:pl-20">
                <div class=" py-10  pb-3 mt-32  relative bg-indigo-300 group hover:bg-sky-500 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div class="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-indigo-100  group-hover:bg-indigo-50"></div>
                    <img src={atm} />
                  </div>
                  <div class="px-7 mt-20">
                    <h1 class="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">
                      02.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">Card Services</h2>
                  </div>
                </div>
              </div>
              <div class="border-r border-gray-300 mx-3 lg:pl-20">
                <div class=" py-10 pb-3 mt-5  relative bg-sky-600 group hover:bg-sky-500 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div class="w-4 h-1/5 	absolute right-0 -bottom-44 bg-indigo-100 group-hover:bg-red-50"></div>
                    <img src={scanning} />
                  </div>
                  <div class="px-7 mt-5">
                    <h1 class="text-3xl font-bold group-hover:text-red-300 transition ease-out duration-300">
                      03.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">Quick Access</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-center mt-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Easy Card Transaction,
          <span class="sm:block mb-6"> Secure and Protected </span>
        </h1>
        <Canvas style={{ height: "900px", width: "1250px" }}>
          <OrbitControls enableRotate={true} />
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>

      <section class="text-gray-600 body-font">
        <h1 class="text-center mt-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Personal EMI Loan Are Available,
          <span class="sm:block mb-6"> Secure and Protected </span>
        </h1>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    CREDIT CARD PROCESS
                  </h2>
                  <p class="leading-relaxed">
                    Convenient, handy, and useful – Credit Cards give you the
                    freedom to make payments for your various expenses.{" "}
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Online Bill Payment
                  </h2>
                  <p class="leading-relaxed">
                    Providing you with a convenient and hassle-free way to pay
                    bills is a priority for us.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Recharge: Instant and Easy Online Recharge
                  </h2>
                  <p class="leading-relaxed">
                    Instantly, conveniently and easily recharge your mobile
                    voice and data plans.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Loan and Credit Card Repayment
                  </h2>
                  <p class="leading-relaxed">
                    Your credit card dues will be payable on the due date
                    mentioned in the statement.{" "}
                  </p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Online E-Tax Payment
                  </h2>
                  <p class="leading-relaxed">
                    Pay your taxes the smart way, on time and avoid being a
                    defaulter. Pay all types of taxes - direct or indirect,
                    income or service, state or central.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src={business}
              alt="step"
            />
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};
export default Home;
