import { useEffect, useState } from "react";

export default function Home() {
    const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:9000/users')
    //         .then(response => response.json())
    //         .then(data => {
    //             setUsers(data)
    //         })
    // }, [])

   
    
    return (
        <div>
            <h1 className="text-4xl text-center">User Post: </h1>
            <div className="grid grid-cols-3 m-5">
                
            </div>
          
               
                {/*  */}
               <div>
                
               </div>
                {/*  */}
           
        </div>
    )
}