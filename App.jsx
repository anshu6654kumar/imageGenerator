import React from 'react';
import {BrowserRouter, Link,Route,Routes} from 'react-router-dom';
import {logo} from './assets';
import { Home,CreatePost } from './pages';
 
const App = () => {
  return (
    <BrowserRouter>
     <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
       <Link to="/home">
         <img src={logo} alt="logo" className="w-28 object-contain" />
       </Link>
       <Link to="/create-post123" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
     </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        {/* route are directing to address (which is created with Link tag) with help of path provided to it and printig the elements */}
        <Route path="/home" element={<Home/>} />
        <Route path="/create-post123" element={<CreatePost />} />
      </Routes>
      
    </main>

   </BrowserRouter>
 

  )
}

export default App
