import {BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"; 
import Navgation from "./components/Navgation";
import Footer from "./components/Footer";
import PostPage from "./pages/PostPage";
import Main from "./pages/Main";
import styles from './components/Components.module.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./pages/Details";
import PostDetails from "./pages/PostDetails";
import { NewPost } from "./reducers/newPost";
import AboutUs from "./pages/AboutUs";





export default function App() {
  const [list, dispatch] = NewPost([])
  const [mode, setMode] = useState(false)
  const [news, setNews] = useState([])

  const data = list
  

  useEffect(()=>{
    const getNews = async ()=>{

      const res = await axios.get(`https://newsapi.org/v2/everything?q=ai%images&apiKey=${import.meta.env.VITE_API_KEY}`)
                       setNews(res.data.articles)
                       
    }
    getNews()
  },[])

  
  const handleMode = ()=>{
    setMode(!mode)
  }

  


  return (
    <div className={`${mode ? styles.light : styles.dark} bg-[var(--primary-color)] `}>
    <Router>
      <Navgation handleMode={handleMode} mode={mode} />
      
      
      <Routes>
        <Route exact path="/" element={<Main news={news}/>}/>
        <Route exact path="/gallery" element={<PostPage list={list} dispatch={dispatch}/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/gallery/:id" element={<PostDetails list={list} dispatch={dispatch} />}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        

      </Routes>
      <Footer/>
    </Router>
      
      
     
      
    </div>
  )
}