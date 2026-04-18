import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Create from './Pages/Create';
import DetailedBlog from "./Pages/DetailBlog";
import logo from './logo.png';
import EditBlog from "./Pages/Edit";

function App(){
    return(
        <div class="p-4 mt-2 ml-5 " >
           <Router>
                <div class="md:flex justify-between items-center mr-14">
                    <img class="w-18 h-auto" src={logo} />
                    <h1 class="text-4xl font-bold font-mono">Blogs <span class="text-blue-500">App</span></h1>
                    <NavBar />
                </div>
                
                <br/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/create" element={<Create/>} />
                    <Route path="/blog/:id" element={<DetailedBlog/>} />
                    <Route path="/edit/:id" element={<EditBlog/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;