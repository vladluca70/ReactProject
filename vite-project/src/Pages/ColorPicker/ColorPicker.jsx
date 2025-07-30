import { useState } from "react";
import { Link } from "react-router-dom";


function ColorPicker(){

    const [color, setColor]=useState("#FFFFFF");

    return(
        <>
            <div>
                <input type="color" 
                    value={color}
                />
            </div>

            <br/>
            <Link to={'/'}>Go back home</Link>
        </>
    );
}

export default ColorPicker;