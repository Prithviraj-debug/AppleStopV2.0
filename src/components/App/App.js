import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SigninPage from "../SigninPage/SigninPage";
import Mac from "../Mac/Mac";
import Iphone from "../Iphone/Iphone";
import Iwatch from "../Iwatch/Iwatch";
import AirPods from "../AirPods/AirPods";
import Tv from "../Tv/Tv";
import Accessories from "../Accessories/Accessories";
import Contact from "../Contact/Contact";
import Ipad from "../ipad/ipad";
import Exchange from "../Exchange/Exchange";



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <div id="page-body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/signin" element={<SigninPage />} />
                        <Route path="/mac" element={<Mac />} />
                        <Route path="/ipad" element={<Ipad />} />
                        <Route path="/iphone" element={<Iphone />} />
                        <Route path="/watch" element={<Iwatch />} />
                        <Route path="/airpods" element={<AirPods />} />
                        <Route path="/tv" element={<Tv />} />
                        <Route path="/accessories" element={<Accessories />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/exchange" element={<Exchange />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;