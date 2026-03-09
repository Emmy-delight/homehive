"use client"
import Image from "next/image";

export default function Home() {
   return(
    <main>
       <div className="bg-[url('/image1.png')] h-[40vh] bg-contain   md:bg-[url('/image1.png')] md:h-[50vh] md:bg-no-repeat md:bg-contain  lg:bg-[url('/image1.png')] lg:h-[80vh] lg:bg-no-repeat lg:bg-cover ">
       </div>
       <h1 className="mt-5 text-center text-4xl font-bold">Our Products</h1>
       <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="w-70 h-75 rounded-md shadow-md ">
             <Image
              src="/image1.png"
              alt="myimage"
              width={200}
              height={200}
              className="w-70 h-60 rounded-t-md"
             />
          </div>
          <div className="w-70 h-75 rounded-md shadow-md ">
             <Image
              src="/image1.png"
              alt="myimage"
              width={200}
              height={200}
              className="w-70 h-60 rounded-t-md"
             />
          </div>
          <div className="w-70 h-75 rounded-md shadow-md ">
             <Image
              src="/image1.png"
              alt="myimage"
              width={200}
              height={200}
              className="w-70 h-60 rounded-t-md"
             />
          </div>
          <div className="w-70 h-75 rounded-md shadow-md ">
             <Image
              src="/image1.png"
              alt="myimage"
              width={200}
              height={200}
              className="w-70 h-60 rounded-t-md"
             />
          </div>
       </div>

    </main>
    
   )
} 