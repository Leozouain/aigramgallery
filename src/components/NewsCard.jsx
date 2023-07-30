/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function NewsCard({urlToImage , title, url, publishedAt, description, source }) {

  const [imgDefault, setImageDefault]= useState ( `https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1685924249/content-items/013/810/071/0001-original.png?16859242490`)
  useEffect(()=>{
    const checkImage = async ()=>{

      const res = await axios.get(urlToImage)
                      //  setNews(res.data.articles)
                       {res.status !== 403 ? setImageDefault(urlToImage)  : ''}
    }
    checkImage()
  },[])
    
  

  return (


    <div className="bg-[var(--secondary-color)] p-4 rounded-md">
      <div className="relative   rounded-md overflow-hidden bg-[var(--secondary-color)]">
        <img className="relative z-[0] opacity" src={imgDefault} alt="" width='500' height='424' />
        <p className="text-[var(--text-color)] bg-[rgba(0,0,0,0.53)] inset-0 absolute 
        font-bold p-4 flex justify-center items-center
        lg:p-14  " >{title}</p>
      </div>
      <div className="flex justify-between">
      <small className="text-[vart(--text-color)]">By: <Link className="text-[var(--third-color)]" to={url} target={"__blank"}> {source.name}</Link></small>
      <small>Published : {publishedAt.slice(0,10)}</small>
      </div>

    </div>

  )
}