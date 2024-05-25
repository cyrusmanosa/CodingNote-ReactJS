function Button2() {

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     } else {
    //         console.log(`${name} stop clicking me`)
    //     }
    // }
    // return (<button onClick={() => handleClick("Bro")}> Click me </button>);


    // const handleClick2 = (e) => console.log(e);
    // return (<button onClick={(e) => handleClick2(e)}> Click me </button>);
    const handleClick3 = (e) => e.target.textContent = "OUCH!";


    return (<button onDoubleClick={(e) => handleClick3(e)}> Click me </button>);
}

export default Button2