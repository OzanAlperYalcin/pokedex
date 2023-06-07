import ItemCard from "./ItemCard"

function DataList({ data }) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-2.5">
            {data.map((item, i) => (
                <ItemCard data={item} key={i} />
            ))}
        </div>
    )
}

export default DataList