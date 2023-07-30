export default function Image(photo) {
  return (
    <div style={{backgroundImage: `url(${photo.photo})`, backgroundSize: "cover", backgroundPosition: 'center'}}
     className="h-full w-40 flex justify-center
     rounded-md  overflow-hidden">

        {/* <img 
        className=" w-"
        src={photo.photo}
        alt=""/> */}
    </div>
 
  )
}