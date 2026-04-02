 "use client"
import { db } from "@/config/firebase.config";
import { CircularProgress } from "@mui/material";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Apartment () {
    const {data: session} = useSession();
    const [loading,setLoading] = useState(true);
    const [houses,setHouses] = useState([]);
    const router = useRouter();

    useEffect(()=>{
        const fetchHouses = async ()=>{
             try{
            const houseRef = query(collection(db,"houses"),where("user","==",session?.user?.id));
            const snapShot = await getDocs(houseRef);
            const compiledHouse = [];
            snapShot.docs.forEach((doc)=>{
                compiledHouse.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            setHouses(compiledHouse);
            console.log(compiledHouse);
        }
        catch(error){
            console.error("Error fetching Houses;", error)
        }
        finally {
            setLoading(false)
        }    
     }
        if (session){
            fetchHouses()
        }
    },[session]);

    if(loading) {
        return(
            <main className="h-[80vh] flex items-center justify-center">
                <CircularProgress className="text-7xl" />
            </main>
        )
    }
    return (
        <main className="min-h-screen my-5 p-4">
            <h1 className="text-4xl font-bold text-center text-blue-500">Our Apartments</h1>
            <div className="px-3 py-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {houses.map(house =>
                <div onClick={()=>router.push(`/dashboard/apartments/${house.id}`)} key={house.id} className="w-80 h-85 rounded shadow-md relative">
                    <Image
                    src="/apartment.jpg"
                    alt="house"
                    width={200}
                    height={200}
                    className="w-80 h-45 rounded-t"
                    />
                    <div className="px-3 py-3">
                      <p className="text-xl font-semibold text-gray-800">{house.data.title}</p>
                      <p className="mt-1 text-xs text-green-500">₦{house.data.price.toLocaleString()}</p>
                      <p className="mt-1 text-sm">{house.data.location}</p>
                      <p className="mt-1 text-gray-800 text-sm">{house.data.description}</p>
                      <p className="text-gray-800">Status: <span className="text-green-500">{house.data.status}</span></p>
                   </div>
                   <div className="absolute top-2 right-2 w-25 h-8 flex justify-center items-center bg-red-300">
                      <p className="text-white">-10% off</p>
                   </div>
                </div>
                )}
            </div>

        </main>
    )
}