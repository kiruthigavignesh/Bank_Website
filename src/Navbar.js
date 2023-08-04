import React, { Component } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from 'react-router-dom';
import gif from "../src/images/savings.gif";
import technology from "../src/images/technology.gif";
import mutual from "../src/images/mutaulfund.gif";
import atm from "../src/images/atm-card.gif";
import insurance from "../src/images/insurance.gif";
import deposit from "../src/images/deposit.gif";
import pointer from "../src/images/Pointer.png";
import logo from "../src/images/dollar.gif";
import text from "../src/images/logo (2).png";

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked:
    !this.state.clicked})
  }  
  
render(){
return (
    <>
<div class="fixed_navbar  bg-gradient-to-br from-sky-300	 to-sky-800 via-sky-600 antialiased bg-no-repeat text-white md:bg-green-500">
  <header class="container mx-auto px-4  flex justify-between">
    <div >
   <Link to="/" className='flex  items-center'><img  className=" cursor-pointer" src={logo} width={"90px"} height={"20px"}/>
   <img  className=" cursor-pointer" src={text} width={"100px"} height={"20px"}/></Link> </div>
   
<div className='navbar_space '>
    <nav id='navbar' className={this.state.clicked ? " #navbar active" : "#navbar"}  >
      <ul class="lg:flex sm:block items-center pt-7 justify-center font-semibold ">
       
      <li className="active relative group px-3 py-2">
          <Link to="#"
           class="hover:opacity-50 cursor-default">About Us
          </Link>
        </li>
       
        <li class="edit  relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default lg:flex sm:block justify-center items-center gap-1">Personal Banking
        
            <AiFillCaretDown/>
          </button>

          <div
            class="media absolute top-0 -left-48 sm:-left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 
              transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
              </div>
             

              <div class="relative  w-[500px]">
             
{/* <div>
  <div>
    {popup?
  <div className='main  '>
    <h1 className='text-black' onClick={closePopup}>X</h1>
    </div>  :""
  }
  </div>
  </div>  */}
                <div class="lg:grid grid-cols-2 sm:block   gap-6 ">
                  <div>
                    <p class="uppercase tracking-wider text-blue-500 font-semibold text-[13px]">Corporate Banking</p>
                    <ul class="mt-3 text-[15px] text-black">
                      <div className='flex items-center justify-center'><div className='w-[100px]'><img src={gif}/></div>
                  <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Savings & Deposits                          </p>
                      </li></Link></div>
                      <div className='flex items-center justify-center'><div className='w-[100px]'><img src={technology}/></div>
                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Technology Products                      </p>
                      </li></Link></div>
                      <div className='flex items-center justify-center'><div className='w-[100px]'><img src={mutual}/></div>
<Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Mutal Funds                         </p>
                      </li></Link></div>
                     
                     
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-blue-500 font-semibold text-[13px]">Services</p>
                    <ul class="mt-3 text-[15px]">
                    <div className='flex items-center justify-center'><div className='w-[100px]'><img src={atm}/></div>

                    <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Card Services                         </p>
                      </li></Link></div>
                      <div className='flex items-center justify-center'><div className='w-[100px]'><img src={insurance}/></div>

                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Insurances Services                         </p>
                      </li></Link></div>
                      <div className='flex items-center justify-center'><div className='w-[100px]'><img src={deposit}/></div>

                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Deposits Services                          </p>
                      </li></Link></div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
     
          <li class=" edit relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default lg:flex sm:block justify-center items-center gap-1">Net Banking
        
            <AiFillCaretDown/>
          </button>

          <div
            class="media absolute top-0 -left-48 sm:-left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 
              transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative w-[300px]">
                <div class="lg:grid  sm:block   gap-6 ">
                  <div>
                    <p class="uppercase tracking-wider text-blue-500 font-semibold text-[13px]">Online Process</p>
                    <ul class="mt-3 text-[15px] text-black">
                  <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Online Account Opening                          </p>
                      </li></Link>
                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Online  Payment Processing                         </p>
                      </li></Link>
                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Candigital New                         </p>
                      </li></Link>
                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Download App                          </p>
                      </li></Link>
                     
                    </ul>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class=" relative group  py-2" >
          <button class="hover:opacity-50 cursor-default flex justify-center items-center gap-1">NRI Banking
          <AiFillCaretDown/>

          </button>
          <div
            class="active media3 absolute top-0 -left-48 sm:-left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50  transform">
            <div class="all_tools relative top-6 p-6 bg-white   rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white  transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative z-10 w-[300px]">
               
                <div class=" mt-6 lg:grid sm:block  gap-6">
               
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Deposit Products</p>
                    <ul class="mt-3 text-[15px]">
                    <div className='flex items-center '><div className='w-[15px] mr-3'><img src={pointer}/></div>
<Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Loans & Advances                         </p>
                      </li></Link></div>
                      <div className='flex items-center '><div className='w-[15px] mr-3'><img src={pointer}/></div>

                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Investments                          </p>
                      </li></Link></div>
                      <div className='flex items-center '><div className='w-[15px] mr-3'><img src={pointer}/></div>

                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Consultancy Services                          </p>
                      </li></Link></div>
                      <div className='flex items-center '><div className='w-[15px] mr-3'><img src={pointer}/></div>

                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Other Services                         </p>
                      </li></Link></div>
                      <div className='flex items-center '><div className='w-[15px] mr-3'><img src={pointer}/></div>

                      <Link to="#"><li><p
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 cursor-pointer">
Contact Details                          </p>
                      </li></Link></div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="active relative group px-3 py-2">
          <Link to="#"
           class="hover:opacity-50 cursor-default">Priority Portal
          </Link>
        </li>
        <li className="active relative group px-3 py-2">
          <Link to="/card"
           class="hover:opacity-50 cursor-default">Add ATM Card Details
          </Link>
        </li>
      </ul>
     
     

      </nav>
       </div>
   
     

    <div id='mobile'
  onClick={this.handleClick}>
    <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
   </div>

   


 
  </header>
 
  </div>
 

    </>
  )


      }
}

export default Navbar


