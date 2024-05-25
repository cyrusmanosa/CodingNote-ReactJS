// 方法一
// import React, { useState } from "react";
// import ComponentB from "./ComponentB";
//     function ComponentA() {
//         const [user, setUser] = useState("Cyrus");
//         return (
//             <>
//                 <div className="box">
//                     <h1>ComponentA</h1>
//                     <h2>Hello {user}</h2>
//                     <ComponentB user={user} />
//                 </div>
//             </>
//         );
//     }
// export default ComponentA;

// 方法二
import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext()

function ComponentA() {
    const [user, setUser] = useState("Cyrus");
    return (
        <>
            <div className="box">
                <h1>ComponentA</h1>
                <h2>Hello {user}</h2>
                <userContext.Provider value={user}>
                    <ComponentB />
                </userContext.Provider>
            </div>
        </>
    );
}

export default ComponentA;