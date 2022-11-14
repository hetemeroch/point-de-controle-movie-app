import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Detail from './detail';
import AjoutMovie from './addmovie';
const Myroute = () => {
    return (
        <div>
           <BrowserRouter>
           <Navbar/>
           <Routes>
           <Route path="/" element = {<Home/>}/>
           <Route path="/about" element = {<About/>}/>
           <Route path="/detail" element = {<Detail/>}/>
           <Route path="/addmovie" element = {<AjoutMovie/>}/>
           </Routes>
           </BrowserRouter>

        </div>
    )
}
export default Myroute