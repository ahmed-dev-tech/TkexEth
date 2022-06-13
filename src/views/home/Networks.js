import { Card } from "../../components";
import { cardData } from "./../../dummyData";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Networks() {
    return (
        <div className="networks pt-12 pb-12 bg-red-400">
            <div className="container mx-auto">
                <h1 className="text-5xl mb-8 text-white font-bold text-center">Supports Networks</h1>
                <p className="text-base text-white font-normal text-center">um is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, co</p>
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                    {cardData.map((data, index) => 
                        <AnimationOnScroll animateIn="animate__tada">
                            <Card data={data} key={index}/>
                        </AnimationOnScroll>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Networks;