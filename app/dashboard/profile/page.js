import { auth, signOut } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { LuLogOut } from "react-icons/lu";

export default async function Profile () {
    const session = await auth();
    console.log(session);
    if(!session?.user) {
        redirect("/auth/signin")
    }
    return (
        <main className="min-h-screen flex justify-center py-10 px-5">
            <div className="w-full md:w-90 md:max-h-140 rounded shadow-md py-5 px-4">
                <h1 className="text-center font-semibold text-xl">Profile Details</h1>
                <div className="flex justify-center">
                   <Image 
                    src={session?.user?.image}
                    alt="profile-image"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                   />
                </div>
                <div className="px-5 py-5 flex flex-col gap-4 mt-8 w-80 h-60 shadow rounded-md">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Full Name</p>
                        <p className="text-gray-600 text-xs">{session?.user?.name}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600 text-xs">{session?.user?.email}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Phone Number</p>
                        <p className="text-gray-600 text-xs">+234 803 6786 860</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-600 text-xs">Asokoro extension</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Gender</p>
                        <p className="text-gray-600 text-xs">Male</p>
                    </div>
                </div>
                <form action={async()=>{
                             "use server"
                          await signOut()
                }}
                 className="mt-5">
                    <button type="submit" className="bg-red-500 text-white w-30 h-10 cursor-pointer rounded flex justify-center items-center">
                       <LuLogOut className="text-2xl" />
                       <span className="ml-1">Logout</span>
                    </button>
                </form>

            </div>
            
        </main>
    )
}