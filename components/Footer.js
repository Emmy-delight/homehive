export function Footer (){
    const year = new Date().getFullYear();
    return (
        <footer className="bg-white px-5 py-5 block inset-shadow-sm  md:flex md:justify-between">
           <ul className="flex gap-2 text-gray-600"> 
               <li> &copy;{year} HomeHive</li>
               <li>All rights reserved</li>
            </ul> 
            <ul className="flex  text-gray-600 list-disc gap-5">
                <li>Privacy</li>
                <li>Terms of service</li>
                <li>Support</li>
            </ul>
        </footer>
    )
}