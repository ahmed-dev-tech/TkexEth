import img from "../../assets/1135646.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Stake() {
    return (
        <div className="how pt-12 pb-12">
            <div className="container mx-auto">
                <h1 className="text-5xl mb-5 text-white font-bold text-center">Stake With Tkex</h1>
                <p className="text-sm mx-auto text-white font-light max-w-2xl text-center mb-10">um is that it has a more-or-less normal distribution of letters, as opposed to using it has a more-or-less normal distribution of letters, as opposed to using 'Content here, co</p>
                <div className="flex gap-10 justify-center flex-wrap">
                    {
                        ["", "", "", "", "", "" ,""].map((value, index) => 
                            <AnimationOnScroll initiallyVisible={true} delay={2000} animateIn="animate__wobble">
                                <Card />
                            </AnimationOnScroll>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className="doa max-w-sm p-8 rounded-2xl">
            <img className="w-12"  src={img} alt="icon"/>
            <h1 className="color-cyn font-bold text-2xl mt-6">3.9%</h1>
            <p className="text-white text-lg mt-3">ARP</p>
            <button className="button-blue pl-6 pr-6 pt-2 mt-3 pb-2 mx-auto sm:mx-0 rounded-lg font-bold text-base text-white">Shake Now</button>

        </div>
    )
}

export default Stake;