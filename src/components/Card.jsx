import NewCard from "./NewCard";

export default function Card({ list, dispatch }) {

  


   return (
    <div className="grid md:grid-cols-2 
     lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-4 
     md:container lg:container
    ">
      
      {list.map((item, index) => (
        <NewCard  key={index} item={item} dispatch={dispatch}/>
      ))}
    </div>
  );
}
