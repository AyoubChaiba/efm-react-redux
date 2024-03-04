import { Link, BrowserRouter, Routes, Route, } from "react-router-dom";

export let Header = () => {
    return (
        <>
            <h1>Bibliothéque</h1>
            <BrowserRouter>
                <ul>
                    <li><Link to={"/"}>Accueil</Link></li>
                    <li><Link  to={"/details"}>details</Link></li>
                </ul>
                <Routes>
                <Route path="/" element={<h1>home</h1>} />
                <Route path="/details" element={<h1>details</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}