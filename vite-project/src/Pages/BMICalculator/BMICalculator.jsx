import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function BMICalculator()
{
    const [weight, setWeight]=useState(0);
    const [height, setHeight]=useState(1);
    const [bmi, setBmi]=useState(null);
    const [category, setCategory] = useState("");


    function handleWeight(e)
    {
        setWeight(e.target.value);
    }

    function handleHeight(e)
    {
        setHeight(e.target.value);
    }

    function calculateBMI()
    {
        if(weight && height){
            const rez=weight/(height*height);
            setBmi(rez.toFixed(2));
            setCategory(getBMICategory(rez));

        }
        else{
            setBmi("Invalid data");
            setCategory("");

        }
    }

    function getBMICategory(bmi)
    {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25) return "Normal weight";
        if (bmi < 30) return "Overweight";
        if (bmi < 35) return "Obesity Class I (Moderate)";
        if (bmi < 40) return "Obesity Class II (Severe)";
        return "Obesity Class III (Very severe or Morbid)";
    }

    return(
        <>
            <div>
                <h2>BMI Calculator</h2>

                <input 
                    placeholder="Insert here your weight(kg)"
                    onChange={handleWeight}
                /> <br/>
                
                <input 
                    placeholder="Insert here your height(m)"
                    onChange={handleHeight}    
                /> <br/> <br/>


                <button
                    onClick={calculateBMI}
                >Send data</button>

                
                {bmi !== null && (
                    <>
                        <p>Your BMI is {bmi}.</p>
                        {category && <p>Category: {category}</p>}
                    </>
                )}

                <br/> <br/>
                <Link to={'/'}>Go back home</Link>
            </div>
        </>
    );
}

export default BMICalculator;