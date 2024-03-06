
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';


export default function Signup() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen min-w-screen py-2 bg-opacity-95 bg-black" style={{backgroundImage: "url('/3.jpeg')", backgroundSize: "cover", backgroundPosition: "center"}}>
  <main className="flex flex-col items-center justify-center w-full flex-1 px-3 text-center" style={{ color: "black" }}>
  <div className=" bg-white rounded-2xl shadow-2xl flex w-5/6 max-w-6xl ">
      <div className="w-3/5 p-5 rounded-tl-2xl rounded-bl-2xl text-purple-500 relative" style={{backgroundColor:"#E4E4E4"}}>
        <Image src ="/2.png" alt="Logo" height={100} width={100} className="absolute top-0 left-0 w-30 h-30" style={{paddingLeft:"10px", paddingTop:"5px"}} />
        <h2 className="text-3xl font-bold pt-12 pr-64" style={{color:"#045757"}}>Create Account</h2>
        <form className="flex flex-wrap">
              <div className="group w-1/2 pr-4 pl-16 pt-3">
                <input className="placeholder-teal-900"
                  type={"name"}
                  id="firstName"
                  placeholder={"First Name"}
                  autoComplete="off"
                  style={{borderRadius:"12px", height:"35px", backgroundColor:"#029A9A",paddingLeft:"10px", color:"black", border:"transparent"}}
                />
              </div>
              <div className="group w-1/2 pl-10 pt-3">
                <input className="placeholder-teal-900"
                  type={"name"}
                  id="lastName"
                  placeholder={"Last Name"}
                  autoComplete="off"
                  style={{borderRadius:"12px", height:"35px", backgroundColor:"#029A9A",paddingLeft:"10px", color:"black", border:"transparent"}}
                />
              </div>
              <div className="group w-full pt-4 " style={{paddingLeft:"50px"}}>
                <input className="placeholder-teal-900"
                  type={"email"}
                  id="email"
                  placeholder={"Email"}
                  autoComplete="off"
                  style={{borderRadius:"12px", height:"35px", backgroundColor:"#029A9A",paddingLeft:"10px", color:"black", border:"transparent", width:"94%"}}
                />
              </div>
              <div className="group w-full pt-4 " style={{paddingLeft:"50px"}}>
                <input className="placeholder-teal-900"
                  type={"password"}
                  id="password"
                  placeholder={"Password"}
                  autoComplete="off"
                  style={{borderRadius:"12px", height:"35px", backgroundColor:"#029A9A",paddingLeft:"10px", color:"black", border:"transparent", width:"94%"}}
                />
              </div>
              <div className="group w-full pt-4 " style={{paddingLeft:"50px"}}>
                <input className="placeholder-teal-900"
                  type={"password"}
                  id="confirmPassword"
                  placeholder={"Confirm Password"}
                  autoComplete="off"
                  style={{borderRadius:"12px", height:"35px", backgroundColor:"#038686",paddingLeft:"10px", color:"black", border:"transparent", width:"94%"}}
                />
              </div>
              <div className="flex items-center pt-4 pl-48">
                <input type="checkbox" id="terms" style={{ marginRight: "15px" }} />
                <label htmlFor="terms" style={{ color: "#045757" }}>I agree to the Terms and Conditions</label>
              </div>
              <div className="pl-72">
              <button className="hover:bg-white hover:text-purple-950 text-white font-bold py-2 px-4 rounded mt-4" style={{background:"#222222"}} type="submit">SIGNUP</button>
              </div>
            </form>
      </div>

    <div className="w-2/5 p-5 rounded-tr-2xl rounded-br-2xl py-40 px-12"style={{backgroundColor:"#222222", color:"#045757"}}>
      <h2 className="text-3xl font-bold mb-8">Already Have An Account?</h2>
      <Link href="/user/login" className="hover:bg-white hover:text-teal-700 text-black font-bold py-2 px-4 rounded mt-4" style={{background:"#E4E4E4"}}>LOGIN
      </Link>
      </div>
    </div>
  </main>
</div>
  );
}
