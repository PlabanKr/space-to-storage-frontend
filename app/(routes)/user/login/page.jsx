
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';


export default function Login() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen min-w-screen py-2" style={{backgroundImage: "url('/3.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
  <main className="flex flex-col items-center justify-center w-full flex-1 px-3 text-center" style={{ color: "black" }}>
  <div className=" bg-white rounded-2xl shadow-2xl flex w-5/6 max-w-6xl ">
      <div className="w-3/5 p-5 rounded-tl-2xl rounded-bl-2xl text-purple-500 relative" style={{backgroundColor:"#222222"}}>
        <Image src ="/2.png" alt="Logo" height={100} width={100} className="absolute top-0 left-0 w-30 h-30" style={{paddingLeft:"20px", paddingTop:"20px"}} />
        <h2 className="text-3xl font-bold pt-24 pr-44 pb-8" style={{color:"#045757"}}>Login to Your Account</h2>
        <form className="flex flex-wrap">
              <div className="group w-full pt-4 " style={{paddingLeft:"50px"}}>
                <input className="placeholder-gray-400"
                  type={"email"}
                  id="email"
                  placeholder={"Email"}
                  autoComplete="off"
                  style={{borderRadius:"12px", height:"35px", backgroundColor:"#029A9A",paddingLeft:"10px", color:"black", border:"transparent", width:"94%"}}
                />
              </div>
              <div className="group w-full pt-4 " style={{paddingLeft:"50px"}}>
                <input className="placeholder-gray-400"
                  type={"password"}
                  id="password"
                  placeholder={"Password"}
                  autoComplete="off"
                  style={{borderRadius:"12px", height:"35px", backgroundColor:"#029A9A",paddingLeft:"10px", color:"black", border:"transparent", width:"94%"}}
                />
              </div>
              <div className="pl-72 pt-6">
              <button className="hover:bg-white hover:text-purple-950 text-black font-bold py-2 px-4 rounded mt-4" style={{background:"#E4E4E4"}} type="submit">LOGIN</button>
              </div>
            </form>
      </div>

    <div className="w-2/5 p-5 rounded-tr-2xl rounded-br-2xl py-40 px-12"style={{backgroundColor:"#E4E4E4", color:"#045757"}}>
      <h2 className="text-3xl font-bold mb-8">New Here ?</h2>
      <p className="pb-6">Sign up and discover a great amount of new opportunities!</p>
      <Link href="/user/signup" className="hover:bg-white hover:text-teal-700 text-white font-bold py-2 px-4 rounded mt-4" style={{background:"#222222"}}>SIGNUP
      </Link>
      </div>
    </div>
  </main>
</div>
  );
}
