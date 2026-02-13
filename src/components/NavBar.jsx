import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <div className="p-5 flex justify-between bg-emerald-900 text-white font-semibold ">
        <h2 className="font-medium text-2xl">Media Search</h2>
        <div className=" flex gap-5">
            <Link to={'/'} className="bg-white font-medium active:scale-95 text-emerald-900 px-3 py-2 rounded-lg text-center cursor-context-pointer">Search</Link>
            <Link to={'/collection'} className="bg-white font-medium active:scale-95 text-emerald-900 px-3 py-2 rounded-lg text-center cursor-context-pointer">Collection</Link>
        </div>
        </div>
      
    </div>
  )
}

export default NavBar
