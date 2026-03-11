import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

export default function SignIn () {
    return (
        <main className="min-h-screen">
            <div className="bg-[url(/bg.jpg)] h-screen bg-no-repeat bg-cover flex justify-center px-5 py-10">
               <div className="w-full  bg-white shadow-md rounded md:w-92 md:flex-col md:gap-3 md:max-h-90 md:px-5 md:py-4">
                 <h1 className="text-2xl font-semibold text-center ">Sign Into HomeHive</h1>
                 <p className="text-sm text-gray-500 mt-2 text-center">Create an account or sign In</p>
                 <form className="flex flex-col gap-3 mt-3">
                    <div className="">
                       <TextField
                       fullWidth
                       size="small"
                       label="Email"
                       type="email"
                       placeholder="emmanuel@gmail.com"
                       />  
                    </div>
                    <button type="submit" className="text-white w-full h-10 font-semibold bg-blue-500 p-3 rounded-md cursor-pointer flex justify-center items-center">Continue</button>
                 </form>
                 <p className="text-gray-500 text-center mt-2">Or sign up with</p>
                 <div className="flex justify-center gap-4">
                   <form>
                     <button type="submit" className="w-12 h-12 cursor-pointer flex justify-center items-center rounded-md shadow-lg">
                        <FcGoogle className="text-4xl" />
                     </button>
                   </form>
                   <form>
                      <button type="submit" className="w-12 h-12 cursor-pointer flex justify-center items-center rouned-md shadow-lg">
                         <IoLogoGithub className="text-4xl" />
                      </button>
                   </form>
                </div>
                  
               </div>
                
            </div>
    
        </main>
    
    )
}