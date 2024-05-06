import Image from 'next/image';
import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/5 p-5 rounded-tl-1xl rounded-bl-1xl text-purple-500 relative" style={{ backgroundColor: "#222222" }}>
          <Image src="/2.png" alt="Logo" height={200} width={200} className="absolute top-0 left-0 w-30 h-30" style={{ paddingLeft: "20px", paddingTop: "20px" }} />
          <h2 className="text-4xl font-bold pt-28 pl-72 pb-6" style={{ color: "#045757" }}>Collaborators</h2>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center" }}>Anushka Biswas</p>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center"  }}>Aveepsa Das</p>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center"  }}>Kazi Abdul Baset</p>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center"  }}>Pinac Chetan Joshi</p>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center"  }}>Plaban Kr. Mondal</p>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center"  }}>Samarth Jangir</p>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center"  }}>Shirshendu Ghosh</p>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center"  }}>Sneha Chakraborty</p>
          <p className="text-2xl font-bold" style={{ color: "#045757", textAlign:"center"  }}>Srijeeta Mukherjee</p>
        </div>
        <div className="w-2/5" style={{ backgroundColor: "#12C6C6", color: "#045757" }}>
        <Link href="/user/homepage"><Image src="/2.png" alt="Logo" height={400} width={400} className="relative top-0 left-0 w-30 h-30" style={{ paddingLeft: "100px", paddingTop: "100px" }} /></Link>
        
        </div>
        </div>
    </>
  );
}
