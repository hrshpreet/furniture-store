
const Intro = () => {
    return(
        <div className="md:w-2/5 text-center md:text-left">
            <div className=" text-6xl font-semibold">
                Luxury Bedroom Furniture
            </div>
            <div className=" text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit veniam minima autem libero doloremque odit.
            </div>
        </div>
    )
}

const HeroImage = () => {
    return(
        <div className="w-full md:w-[55%] md:ml-[5%] h-[60vh]">
            Pic
        </div>
    )
}

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row align-middle flex-wrap justify-center items-center px-[20px] md:px-[70px] my-[60px]">
            <Intro />
            <HeroImage />
        </div>
    )
}

export default Hero;