import imaeg from "../../assets/4964952.png";
import { ecoCard } from "../../dummyData";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function EcoSystem() {
    return (
        <>
            <div className="ecosystem pt-12 pb-12">
                <div className="container mx-auto">
                    <h1 className="text-5xl mb-5 text-white font-bold text-center">A Growing Tkex Ecosytem</h1>
                    <p className="text-sm max-w-2xl mx-auto text-white font-light text-center mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                </div>
                <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {ecoCard.map((value, index) => 
                        <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                            <Card logo={value.logo} name={value.name} key={index} />
                        </AnimationOnScroll>
                    )}
                    <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                        <div className="p-5 rounded-xl bg-white flex items-center justify-between">
                            <div>
                                <h1 className="mb-2 color-cyn font-bold text-lg">29</h1>
                                <p className="text-xs text-zinc-600 font-semibold">ecoSystem application</p>
                            </div>
                            <button className="pl-5 pr-5 pt-2 pb-2 button-blue rounded-lg text-lg font-bold text-white">View All</button>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </>
    )
}

function Card({logo, name}) {
    return (
        <>
            <div className="p-5 rounded-xl bg-white flex items-center gap-5">
                <img src={require(`../../assets/${logo}`)} alt="icon"/>
                <div>
                    <h1 className="mb-2 color-cyn font-bold text-lg">{name}</h1>
                    <p className="text-xs text-zinc-600 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </>
    )
}

export default EcoSystem;