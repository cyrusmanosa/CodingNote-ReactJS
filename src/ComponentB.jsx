// 方法一
// import React from "react";
// import ComponentC from "./ComponentC";
// function ComponentB(props) {

//     return (
//         <>
//             <div className="box">
//                 <h1>ComponentB</h1>
//                 <ComponentC user={props.user} />
//             </div>
//         </>
//     );
// }

// export default ComponentB;

// 方法二
import React from "react";
import ComponentC from "./ComponentC";
function ComponentB() {
    return (
        <>
            <div className="box">
                <h1>ComponentB</h1>
                <ComponentC />
            </div>
        </>
    );
}

export default ComponentB;