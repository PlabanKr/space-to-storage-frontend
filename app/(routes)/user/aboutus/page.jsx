import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/5 p-5 rounded-tl-2xl rounded-bl-2xl text-purple-500 relative" style={{ backgroundColor: "#222222" }}>
          <Image src="/2.png" alt="Logo" height={200} width={200} className="absolute top-0 left-0 w-30 h-30" style={{ paddingLeft: "20px", paddingTop: "20px" }} />
          <h2 className="text-4xl font-bold pt-28 pl-80 pb-6" style={{ color: "#045757" }}>About Us</h2>
          <p className="text-2xl font-bold" style={{ color: "#045757" }}>Our primary objectives include optimizing ground elevation to ensure proper drainage and soil health, implementing smart water storage solutions for efficient resource management, and integrating advanced technologies to enhance overall agricultural efficiency. Sustainability is at the core of our mission, aiming to reduce the ecological impact by encouraging responsible resource use and environmental stewardship. Additionally, we focus on empowering farmers with user-friendly tools and training, fostering self-reliance and adaptability. The ultimate vision is to usher in a new era of agriculture, where innovation and collaboration result in a more resilient, sustainable, and efficient farming landscape.</p>
        </div>
        <div className="w-2/5" style={{ backgroundColor: "#12C6C6", color: "#045757" }}>
        <h2 className="text-4xl font-bold pt-32 pl-40 pb-6" style={{ color: "#222222" }}>Colaborators</h2>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center" }}>Anushka Biswas</p>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center"  }}>Aveepsa Das</p>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center"  }}>Kazi Abdul Baset</p>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center"  }}>Pinac Chetan Joshi</p>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center"  }}>Plaban Kr. Mondal</p>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center"  }}>Samarth Jangir</p>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center"  }}>Shirshendu Ghosh</p>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center"  }}>Sneha Chakraborty</p>
          <p className="text-2xl font-bold" style={{ color: "#222222", textAlign:"center"  }}>Srijeeta Mukherjee</p>
        </div>
      </div>
    </>
  );
}
