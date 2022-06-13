import img from "../../assets/Image 2.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Audits() {
    return (
        <div className="how pt-12 pb-12">
            <div className="container mx-auto">
                <h1 className="text-5xl mb-5 text-white font-bold text-center">How It Works</h1>
                <p className="text-sm mx-auto text-white font-light max-w-2xl text-center mb-10">um is that it has a more-or-less normal distribution of letters, as opposed to using it has a more-or-less normal distribution of letters, as opposed to using 'Content here, co</p>
                <div className="flex flex-wrap justify-center gap-10">
                    <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
                        <Card />
                    </AnimationOnScroll>
                    <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
                        <Card />
                    </AnimationOnScroll>
                    <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
                        <Card />
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className="doa max-w-sm rounded-2xl">
            <img className="w-44 pl-8  pt-8 pr-8" src={img} alt="icon"/>
            <p className="text-sm pl-8 pr-8 font-normal mt-7 mb-7 text-white">Lorem Ipsum i galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
            <div className="text-hidden"></div>
            <div className="pl-8 mt-5 mb-5 pb-3 text-lg font-bold color-cyn">See Reports</div>
        </div>
    )
}

export default Audits;