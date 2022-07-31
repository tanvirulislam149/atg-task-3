import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import UserDetails from "./UserDetails";
import UserName from "./UserName";

const User = () => {
   const [user, setUser] = useState([]);
   const [loader, setLoader] = useState(true);
   const [error, setError] = useState("");
   const [imgError, setImgError] = useState(true);
   const [userId, setUserId] = useState("");

   useEffect(() => {
      axios
         .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
         .then(function (response) {
            console.log(response.data);
            setLoader(false);
            setUser(response.data);
         })
         .catch(function (error) {
            setLoader(false);
            setError(error.message);
         });
   }, []);
   return (
      <div className="m-5">
         {loader ? (
            <>
               <Loader></Loader>
            </>
         ) : (
            <>
               {user.length ? (
                  <>
                     <div className="d-flex">
                        <div className="w-50 mx-5">
                           <h3 className="bg-info py-3 text-center">
                              Users List
                           </h3>
                           {user.map((u) => (
                              <UserName
                                 key={u.id}
                                 u={u}
                                 setUserId={setUserId}
                              ></UserName>
                           ))}
                        </div>
                        <UserDetails id={userId} user={user}></UserDetails>
                     </div>
                  </>
               ) : (
                  <>
                     <div>
                        <h1>{error}</h1>
                     </div>
                  </>
               )}
            </>
         )}
      </div>
   );
};

export default User;
