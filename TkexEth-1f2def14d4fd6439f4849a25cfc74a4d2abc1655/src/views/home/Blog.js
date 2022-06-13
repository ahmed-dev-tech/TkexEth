import img from "../../assets/Rectangle 30.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Blog() {
    return (
        <div className="button-blue pt-12 pb-12">
            <div className="container mx-auto">
                <h1 className="text-5xl mb-5 text-white font-bold text-center">How It Works</h1>
                <p className="text-sm mx-auto text-white font-light max-w-2xl text-center mb-10">um is that it has a more-or-less normal distribution of letters, as opposed to using it has a more-or-less normal distribution of letters, as opposed to using 'Content here, co</p>
                <div className="flex flex-wrap justify-center gap-10">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
                        <Card />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
                        <Card />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
                        <Card />
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className="bg-white max-w-sm rounded-2xl">
            <img className="" src={img} alt="icon"/>
            <h1 className="pl-8 pr-8 text-lg font-bold mt-3">Lorem ipsum is the dummy text</h1>
            <p className="text-sm pl-8 pr-8 font-normal mt-3 mb-7 text-zinc-500">Lorem Ipsum i galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
            <div className="text-hidden"></div>
            <div className="pl-8 pb-3 mt-5 mb-5 text-lg font-bold color-cyn">29/05/2020</div>
        </div>
    )
}

export default Blog;