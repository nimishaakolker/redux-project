import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice"

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection())
  }
  return (
    <div className="overflow-auto px-10 py-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font font-medium"> {collection.length > 0 ? 'Your Collection' : 'Collection is Empty'}</h2>
        <button onClick={ () => {
          clearAll()
        }}
         className="active:scale-95 transition cursor-pointer bg-red-700 text-white text-lg px-3 py-2 font-medium rounded"
        >Clear Collection</button>
       </div>
     


  <div className="flex justify-start w-full flex-wrap gap-6 overflow-auto px-3 py-6">
   {collection.map ((item, idx) => {
    return <div key={idx}>

      <CollectionCard item={item}/>
    </div>
   })}
      

    
    </div>
    </div>
  
  )
}

export default CollectionPage
