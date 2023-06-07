function Pagination({ page, setQuery }) {

    const pageHandle = (url) => {
        const regex = /[?&]([^=#]+)=([^&#]*)/g;
        const match = url.match(regex).join("")
        window.location.href = 'http://localhost:5173/'+match
    }

    return (
        <div className='flex justify-center mt-5 gap-5'>
            {Object.keys(page).map(btn => (
                <button key={btn}
                    className={`${btn === 'next' ? 'bg-green-500 hover:bg-green-400' : 'bg-red-500 hover:bg-red-400'} btn-primary`}
                    disabled={page[btn] === null}
                    onClick={() => pageHandle(page[btn])}
                >
                    {btn === 'next' ? "İLERİ" : "GERİ"}
                </button>
            ))}
        </div>
    )
}

export default Pagination