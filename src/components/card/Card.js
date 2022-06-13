function Card({data}) {
    return (
        <div className="bg-white p-5 rounded-2xl max-w-sm">
            <img className="w-12 mx-auto mt-10 mb-3" src={require(`../../assets/${data?.logo}`)} alt="compony logo"/>
            <h1 className="text-center mt-3 mb-5 text-zinc-800 font-bold text-xl">{data.name}</h1>
            <p className="text-center mt-3 mb-3 text-zinc-400 text-sm font-base">{data.text}</p>
            <div className="flex justify-center sm:flex-row flex-col mt-5 mb-5">
                <div className="pr-5 left-border mx-auto sm:mx-0">
                    <p className="text-green-700 font-bold text-lg">{data.arp}</p>
                    <p className="text-zinc-400 text-xs  font-base">ARP</p>
                </div>
                <div className="pl-0 sm:pl-10 mx-auto sm:mx-0 ">
                    <p className="text-zinc-800 font-bold text-lg"> $ {data.staked}</p>
                    <p className="text-zinc-400 text-xs  font-base">Staked</p>
                </div>
            </div>
            <div className="flex justify-center mt-7 mb-3 gap-5 sm:flex-row flex-col">
                <button className="button-cyn pl-5 pr-5 pt-2 pb-2 mx-auto sm:mx-0 rounded-lg font-bold text-lg text-white">Learn More</button>
                <button className="button-blue pl-8 pr-8 pt-2 pb-2 mx-auto sm:mx-0 rounded-lg font-bold text-lg text-white">Stake Now</button>
            </div>
        </div>
    )
}

export default Card;