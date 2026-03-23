   "use client"
import { db } from "@/config/firebase.config";
import { Card, CardContent, CardHeader, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
   title: yup.string().required("Title is required"),
   location: yup.string().required("Location is required"),
   price: yup.number().typeError("Price must be a number").positive("price must be a positive number").required("price is required"),
   description: yup.string().required("Description is required").min(15),
})

export default function AddListing () {
   const {data: session} = useSession();
   console.log(session);
   const {handleSubmit,handleChange,values,errors,touched} = useFormik({
      initialValues: {
           title: "",
           location: "",
           price: "",
           description: "",
      },
      onSubmit: async (values,{resetForm})=>{
         try {
           await addDoc(collection(db,"houses"),{
               user: session?.user?.id,
               title: values.title,
               location: values.location,
               price: values.price,
               description: values.description,
               status: "available",
               timecreated: new Date(),
           });
           alert("Houses added successfully");
           resetForm();
         }
         catch(error) {
           console.error("error adding house:",error)
           alert("Failed to list house")
           resetForm();
         }
      },
      validationSchema:schema,
   })
    return(
        <main className="min-h-screen flex justify-center py-6 px-4">
            <Card sx={{ width: 380, height: 470}}>
                 <CardHeader 
                 sx={{textAlign: "center"}}
                  title="Add House Listing"
                  subheader="Fill in the details below"
                 />
                 <CardContent>
                    <form onSubmit={handleSubmit} className="py-2 flex flex-col gap-3 px-2">
                       <div>
                          <TextField
                          fullWidth
                          type="text"
                          label="Title"
                          placeholder="3 Bedroom Duplex"
                          size="small"
                          id="title"
                          onChange={handleChange}
                          value={values.title}
                          sx={{borderColor: "gray"}}
                          />
                          {touched.title && errors.title ? <span className="text-xs text-red-500">{errors.title}</span>: null}
                       </div>
                       <div>
                          <TextField
                          fullWidth
                          type="text"
                          label="Location"
                          id="location"
                          placeholder="e.g Abuja,  Lagos"
                          size="small"
                          onChange={handleChange}
                          value={values.location}
                          />
                          {touched.location && errors.location ? <span className="text-xs text-red-500">{errors.location}</span>: null}
                       </div>
                       <div>
                        <TextField
                        fullWidth
                        type="number"
                        label="Price (₦)"
                        id="price"
                        placeholder="e.g 50,000,000"
                        size="small"
                        onChange={handleChange}
                        value={values.price}
                        />
                        {touched.price && errors.price ? <span className="text-xs text-red-500">{errors.price}</span>: null}
                       </div>
                       <div>
                         <TextField
                          fullWidth
                          multiline
                          rows={3}
                          type="text"
                          label="Description"
                          id="description"
                          onChange={handleChange}
                          value={values.description}
                          placeholder="Describe the property...."
                         />
                         {touched.description && errors.description ? <span className="text-xs text-red-500">{errors.description
                           
                           
                           }</span>: null}
                       </div>
                       <button type="submit" className="w-full h-10 bg-blue-500 rounded-md shadow flex justify-center items-center text-white cursor-pointer font-semibold hover:opacity-75">Add Listing</button>
                    </form>
                 </CardContent>
            </Card>

        </main>
    )
}