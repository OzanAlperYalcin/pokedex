function List({ title, style, data }) {
    return (
        <div className="grid justify-center hover:scale-105 transition-all">
            <div className={`${style} py-2.5 px-5 w-52 border border-zinc-300 shadow-md rounded-xl text-xs`}>
                <h1 className="font-semibold text-center">{title}</h1>
                {data.map((item, i) => (
                        <li key={i} className="flex justify-between py-2 first:pt-0 last:pb-0">
                        <p>{item.name}</p>
                        <p>{item.value}</p>
                    </li>
                    ))}
            </div>
        </div>
    )
}

export default List