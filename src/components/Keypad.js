// Code Keypad Component Here

function Keypad (){

    const handleChange = (e) => {
        console.log("Entering password...")
    }

    return (
        <div>
            <p>Password</p>
            <input type="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;
