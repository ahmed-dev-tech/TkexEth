import Header from "./Header";
import heroImage from "../../assets/Elips1.png";

function Hero() {
    return (
        <div className="hero">
            <div className="container hero-inner mx-auto flex flex-col gap-5 ">
                <Header />
                <HeroMain />
            </div>
        </div>
    )
}

function HeroMain() {
    return (
        <div className="hero-main flex-grow flex justify-center items-center gap-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="lg:text-5xl text-3xl lg:text-left text-center text-white font-bold mb-6">Welcome to our Website</h1>
                    <p className="lg:text-base text-sm text-white font-normal lg:text-left text-center ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more</p>
                    <button className="hero-button text-xl font-bold lg:pl-16 pl-12 lg:pr-16 pr-12 pt-4 pb-4  block mx-auto lg:mx-0 text-white rounded-lg mt-10">Stake Now</button>
                </div>
                <div className="pl-5 flex justify-center items-center pr-5">
                    <img className="lg:w-[80%] w-[50%]" src={heroImage} alt="hero"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;