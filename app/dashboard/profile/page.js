import { FaFacebook } from "react-icons/fa6";
import { Button, CircularProgress, TextField } from "@mui/material";


export default function Profile () {
    return (
        <main>
            <div className="flex flex-col gap-3 items-center justify-center">
                <FaFacebook className="text-4xl text-blue-500"/>
                <Button variant="contained">Sign Up</Button>
                <TextField/>
                <CircularProgress/>
            </div>

        </main>
    )
}