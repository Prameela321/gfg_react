import { createContext, useEffect, useState } from 'react';
export const loginContext = createContext();



function LoginContextCreate({children}){
    // const [user,setUser] = useState({"_id" : 1, "displayName" : "test"})

    // useEffect(async()=>{
    //     try{
    //        const res = await  fetch('https://node-mongo-1.onrender.com/listRestaurant',{
    //             method : "GET",
    //             headers : {
    //             "Content-Type" : "application/json"
    //             },
    //             data : JSON.stringify({})
    //         })
    //         const response = await res.json();
    //         console.log(response);
    //         const first = (response.data)[0];
    //         // console.log(first._id,"first");
    //         setUser({"_id": first._id,"displayName" : first.displayName})
    //         console.log("user",user)
    //     }catch(err){
    //         console.log(err);
    //     }
    // })

    return (
        <>  
            <loginContext.Provider value={user}>
                {children}
            </loginContext.Provider>

        </>
    )

}

export default LoginContextCreate;