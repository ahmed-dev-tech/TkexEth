import { howData } from "../../dummyData";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function How() {
    return (
        <div className="how pt-12 pb-12">
            <div className="container mx-auto">
                <h1 className="text-5xl mb-5 text-white font-bold text-center">How It Works</h1>
                <p className="text-sm text-white font-light text-center mb-10">um is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, co</p>
                <div className="flex flex-wrap justify-center gap-5">
                    {howData.map((obj, index) => 
                        <Card data={obj} key={index}/>
                    )}
                </div>
            </div>
            <AnimationOnScroll initiallyVisible={true} animateIn="animate__flip">
                <Dao />
            </AnimationOnScroll>
        </div>
    )
}

function Card({data}) {
    return (
        <div className="max-w-xs p-5">
            <img className="w-16 mx-auto" src={require(`../../assets/${data.logo}`)} alt="icon"/>
            <h1 className="text-center mt-5 mb-5 font-bold text-white text-lg">{data.heading}</h1>
            <div className="text-center text-sm text-white font-light">{data.text}</div>
        </div>
    )
}

function Dao() {
    return (
        <div className="doa max-w-5xl pt-20 pb-20 rounded-3xl mt-12 mb-12 ml-3 mr-3  lg:mx-auto">
             <h1 className=" color-cyn text-4xl mb-5 text-gray-900 font-bold text-center">The Tkex DAO</h1>
             <p className="text-sm text-white font-light text-center mb-10">um is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, co</p>
             <div className="flex sm:flex-row flex-col justify-center gap-5">
                 <button className="pl-5 pr-5 pt-2 pb-2 mx-auto sm:mx-0 button-blue rounded-lg font-bold text-lg text-white">Reload Primer</button>
                 <button className="pl-5 pr-5 pt-2 pb-2 mx-auto sm:mx-0 border-slate-700 border-2 rounded-lg font-bold text-lg button-blue-border">Apply for Validators</button>
             </div>
        </div>
    )
}

export default How;