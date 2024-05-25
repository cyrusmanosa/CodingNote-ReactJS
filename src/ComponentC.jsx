//  方法一
// import React from "react";

// function ComponentC(props) {

//     return (
//         <>
//             <div className="box">
//                 <h1>ComponentC</h1>
//                 <h2>{`Bye ${props.user}`}</h2>
//             </div>
//         </>
//     );
// }

// export default ComponentC;


//  方法二
import React, { useContext } from "react";
import { userContext } from "./ComponentA";

function ComponentC() {

    const user = useContext(userContext);

    return (
        <>
            <div className="box">
                <h1>ComponentC</h1>
                <h2>{`Bye ${user}`}</h2>
            </div>
        </>
    );
}

export default ComponentC;