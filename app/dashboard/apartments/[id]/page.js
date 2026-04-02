  "use client"
import { db } from "@/config/firebase.config";
import { CircularProgress } from "@mui/material";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ApartmentDetails(){
  const {data: session} = useSession();
  const {id}  = useParams();
  const [loading,setLoading] = useState(true);
  const [house,setHouse] = useState(null);
  const router = useRouter();

   //fetch house details from the database
   useEffect(()=>{
      const fetchHouseDetials = async ()=>{
           try {
               const houseRef = doc(db,"houses",id);
               const houseSnapShot = await getDoc(houseRef);
               if(!houseSnapShot.exists()) {
                    router.push("/dashboard/apartments");
                    return;
               }
               setHouse({
                      id,
                      ...houseSnapShot.data(),
               })
           }
           catch(error){
             console.error("Error fetching house details", error);     
           }
           finally{
             setLoading(false);
           }
      }
      fetchHouseDetials();
   },[id,router]);
   // handleDelete
    const handleDelete = async ()=>{
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if(!confirmDelete) return;
         try{
             const deleteRef = doc(db,"houses",id);
             await deleteDoc(deleteRef);
             alert("Listing Deleted successfully");
             router.push("/dashboard/apartments");
         }
         catch(error) {
            console.error("Unable to delete",error);
            alert("Unable to delete listing, please try again later");
         }
    };
    if(loading) {
      return(
        <main className="flex justify-center items-center h-[80vh]">
             <CircularProgress className="text-4xl"/>
        </main>
      )
    };
    return(
        <main className="min-h-screen flex flex-col justify-center py-10 px-10">
          <h1 className="text-center text-2xl font-bold text-blue-500">List Details</h1>
          <div className="flex justify-center mt-5">
            <div className="w-130 h-95 shadow-md shadow-gray-500 rounded-md flex gap-3 justify-between relative pr-1">
              <Image 
               src="/apartment.jpg"
               alt="myImage"
               width={700}
               height={700}
               className="w-65 h-95 rounded-t-md"
              />
              <div>
                 <p className="text-2xl font-bold">{house?.title}</p>      
                 <p className="text-gray-800 text-xs mt-2">{house?.description}</p>      
                 <p className="mt-2 text-gray-900 text-sm">{house?.location}</p>      
                 <p className="text-green-500 text-xs">₦ {house?.price.toLocaleString()}.</p>      
              </div>
               <div className="absolute bottom-2 right-3">
                 <button onClick={handleDelete} className="bg-red-500 w-10 h-10 cursor-pointer flex justify-center items-center rounded-md shadow-md">
                   <RiDeleteBin6Line />
                 </button>
               </div>
            </div>
         </div> 
            
        </main>
    )
}