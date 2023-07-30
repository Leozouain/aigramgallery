import jsonData from '../json/db.json'
import Image from './Image'
import styles from './Components.module.css'


export default function Carrousel() {
    const photos = jsonData.map(photo => photo.imageUrl)
   

  return (
    
    <div  className={` overflow-hidden h-[45vh] rounded-lg bg-[var(--secondary-color)]
    flex justify-between absolute items-center gap-2 p-4 ${styles.slider}`}>
       
       {photos.map((photo, index) => 
            index < 15 ? (
                
                <Image key={index} photo={photo}/>
                
            ) : null)}
       

    </div>
  )
}