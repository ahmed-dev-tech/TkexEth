import img from "../../assets/1023522.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Community() {
    return (
        <div className="how pt-12 pb-12">
            <div className="container mx-auto">
                <h1 className="text-5xl mb-5 color-cyn font-bold text-center">Join Our Community</h1>
                <p className="text-sm mx-auto text-white font-light max-w-2xl text-center mb-10">um is that it has a more-or-less normal distribution of letters, as opposed to using it has a more-or-less normal distribution of letters, as opposed to using 'Content here, co</p>
                <div className="flex gap-10 justify-center flex-wrap">
                    {["", "", "", "", "", ""].map((v,i) => 
                        <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
                            <Card />
                        </AnimationOnScroll>
                    )}
                </div>
                <h1 className="text-5xl mt-14 mb-5 color-cyn font-bold text-center">Subscribe to Our Mailing List</h1>
                <p className="text-sm mx-auto text-white font-light max-w-2xl text-center mb-10">um is that it has a more-or-less normal distribution of letters, as opposed to using it has a more-or-less normal distribution of letters, as opposed to using 'Content here, co</p>
                <div className="max-w-2xl rounded-3xl mt-12 mb-12 ml-3 mr-3  lg:mx-auto">
                    <div className="div-border flex justify-between p-2 rounded-xl items-center">
                        <h1 className="text-white">Email Address</h1>
                        <button className="button-blue pl-6 pr-6 pt-2  pb-2 rounded-lg font-bold text-base text-white">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className="doa w-[400px] flex gap-5 p-8 rounded-2xl">
            <img className="w-8"  src={img} alt="icon"/>
            <div>
                <h1 className="color-cyn text-base font-bold">Twiter</h1>
                <h1 className="text-xs text-white">Follow us on twiter</h1>
            </div>
        </div>
    )
}

export default Community;