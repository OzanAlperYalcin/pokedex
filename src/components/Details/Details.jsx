import Types from "../Types"
import List from "./List"
import upperHandle from "../utils/upperCase"

function Details({ data }) {

    if (Object.keys(data).length === 0) return

    return (
        <div className="col-span-5 lg:col-span-4 flex flex-col divide-y-2 divide-zinc-200 pb-5 lg:p-5 gap-2.5">
            <div className="flex justify-between items-centertext-center px-5">
                <h1 className="title" >{upperHandle(data.name)}</h1>
                <div>
                    {data.types.map((type, i) => (
                        <Types key={i} className="m-1 py-1 px-2 text-xs text-white font-semibold rounded-md">
                            {type.type.name}
                        </Types>
                    ))}
                </div>
            </div>
            <div className="pt-5">
                <div className="flex flex-wrap justify-evenly gap-5">
                    <div>
                        <List
                            title={'Fiziksel Özellikler'}
                            data={Object.keys(data.physical).map(key => {
                                const name = key === 'height' ? 'Boy' : 'Kilo'
                                const value = data.physical[key]
                                return { name, value }
                            })} />
                    </div>
                    <div>
                        <List
                            title={'Saldırı Özellikleri'}
                            data={data.stats.map(item => ({ name: upperHandle(item.stat.name), value: item.base_stat }))}
                        />
                    </div>
                    <div>
                        <List title={'Özel Yetenekler'}
                            data={data.skills.map((item, i) => ({name: i+1+'. Yetenek', value: upperHandle(item.ability.name)}))}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details