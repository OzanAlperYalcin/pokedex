import Types from "./Types"
import { useNavigate } from "react-router-dom"
import upperHandle from "./utils/upperCase"

function ItemCard({ data }) {

    const navigate = useNavigate()

    const handleClick = (name) => {
        if (name) {
            navigate('/pokemon/'+name)
        }
    }

    return (
        <div 
            className="card divide-y-2 w-48 hover:scale-105 transition-all cursor-pointer"
            onClick={() => handleClick(data.name)}
            >
            <div className="flex flex-col items-center">
                <img src={data.image} alt="" />
                <div className="flex justify-center items-center gap-1">
                    <img src={import.meta.env.VITE_POKE_BALL} className="h-4 w-4" />
                    <h1 className="font-light text-sm text-zinc-600">{upperHandle(data.name)}</h1>
                </div>
            </div>
            <div className="flex justify-center gap-2 w-full">
                {data.types.map((type, i) => (
                    <Types key={i} className="m-1 py-1 px-2 text-xs text-white font-semibold rounded-md">
                        {type.type.name}
                    </Types>
                ))}
            </div>
        </div>
    )
}

export default ItemCard