import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Service from "./component/Service";
import Header from "./component/Header";
import react from "./assets/react.svg"

function App(){
  return <>
    <h1>This is our App .jsx</h1>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About img={react} proTitle="REACT"/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
}
export default App;