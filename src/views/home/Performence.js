import { CountUp } from 'use-count-up'

function Performance() {
    
    const countData = [["Total Staking assets", 17586172406], ["Total rewards paid", 396946227], ["Stakers", 96798]];
    
    return (
        <div className="performence pt-12 pb-12">
            <div className="container mx-auto flex flex-wrap justify-evenly gap-10">
                {countData.map((value, index) => (
                    <div className="">
                        <p className="text-white text-base font-medium">{value[0]}</p>
                        <p className="text-white text-3xl font-bold">
                            $ &nbsp;
                            <CountUp isCounting  end={value[1]} duration={6} />
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Performance;