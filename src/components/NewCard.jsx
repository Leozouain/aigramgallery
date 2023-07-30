import {  useState } from "react"
import styles from './Components.module.css'
import { Link, useParams } from "react-router-dom"


export default function NewCard({item, dispatch }) {
   
    
      const [show, setShow] = useState(null)
      const [number, setNumber]= useState(0)
      const [like, setLike] = useState(false)
    
      const showing = ()=>{
        setShow(!show)
      }
    
      
      const handleLike = () => {
        if (!like) {
            setNumber(number + 1
                )
            setLike(true)
            
        } else {
            setNumber(number - 1)
            setLike(false)
        }
    
        
    }

    const handleDel = () => {



      dispatch({
        type: 'DEL',
        payload: { id: item.id } 
      })
    }

  return (
    <div
          
          className="h-[85vh] md:h-[55vh] relative overflow-hidden
         bg-[var(--secondary-color)] rounded-md
          my-10"
        >
          <Link to={`/gallery/${item.id}`}>
          
          <div onClick={handleLike}
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className={`h-[75vh] md:h-[43vh]
             w-screen sm:w-full overflow-auto
               absolute z-10
               ${show === null? "" : show ?   styles.cardOpen : styles.cardClose }`}
            alt="photo"
          ></div>
          </Link>
          <div
            className="h-[75vh] md:h-[43vh] overflow-y-scroll relative
                          px-20 py-4   "
          >
            <h1
              className=" text-[var(--text-color)] text-2xl tracking-wide 
            font-bold my-3 "
            >
              Prompt:
            </h1>
            <p
              className=" text-[var(--text-color)] tracking-normal 
            leading-relaxed mb-5"
            >
              {item.prompt}
            </p>
            <h1
              className=" text-[var(--text-color)] text-2xl tracking-wide 
            font-bold my-3  "
            >
              Negative Prompt:
            </h1>
            <p
              className=" text-[var(--text-color)] tracking-wide
             leading-relaxed mb-5"
            >
              {item.negPrompt}
            </p>
          </div>
          <p className="text-[var(--text-color)] flex justify-end gap-3 items-center mx-4 my-2 ">
            {!like? number: number  }{" "}
            <span>
              <svg onClick={handleLike}
               className={`${like ? styles.like : ""} cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
                fill={like? "red" : "none"}
                stroke={like? "red" : "white"}
                strokeWidth="40"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </span>{" "}
          </p>
          <div>
            
          </div>
          <button className="absolute inset-x-20 sm:inset-x-30 lg:inset-x-20
            bottom-5 "
           onClick={showing}>
            {show  ? "Hide":  show=== null? 'Show' :   "Show"} Prompt
            </button>
            <button
          onClick={handleDel}
        className=" mx-3 absolute top-2 z-10 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            viewBox="0 0 448 512"
            fill="white"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </button>

        
        </div>
  )
}