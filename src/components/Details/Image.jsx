
function Image({ image }) {
    return (
        <div className="col-span-5 lg:col-span-1 my-10">
            <div className="h-full flex flex-col items-center justify-center">
                <div className="border border-red-500 rounded-full p-1 scale-150 relative">
                    <img src={image} />
                    <div className="absolute top-0 left-0 bg-red-100 h-full w-full rounded-full -z-10" />
                </div>
            </div>
        </div>
    )
}

export default Image