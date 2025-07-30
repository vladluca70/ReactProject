import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function HomePage()
{
    return(
        <>
            <h1>Welcome to my page</h1>
            <p>Here you can find a lot of apps</p>
            <hr/>

            <Link to={'/todolist'} >To Do List App</Link> <br/>
            <Link to={'/shoppinglist'}>Shopping List App</Link> <br/>
            <Link to={'bmicalculator'}>BMI Calculator</Link> <br/>
        </>
    );
}

export default HomePage;