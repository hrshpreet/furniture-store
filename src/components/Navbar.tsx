import { useState } from "react"

function Logo() {
    return (
        <div className=" font-bold text-4xl pb-2 w-[250px] flex justify-center shrink-1">
            Cozy
        </div>
    )
}

interface IProps{
    isOpened: boolean;
}
function NavMenu(props:IProps) {
    return (
        <div className={`transition-all duration-300 w-screen absolute left-0 -z-10 text-2xl bg-bluish text-white md:hidden ${props.isOpened ? 'mt-[30px]' : '-mt-60'}`}>
            <div className="h-2"></div>
            <button className="w-full pb-3 relative bottom-0">Home</button>
            <button className="w-full pb-3 relative bottom-0">Categories</button>
            <button className="w-full pb-3 relative bottom-0">About Us</button>
        </div>
    )
}
function Hamburger() {
    const [HamburgerState, setHamburgerState] = useState<boolean>(false);
    // 0 - close | 1 - open

    const handleClick = () => {
        if (HamburgerState === false) {
            setHamburgerState(true);
        }
        else {
            setHamburgerState(false);
        }
    }
    return (
        <>
            <button onClick={handleClick} className={`block md:hidden h-fit relative`}>
                <div className={`h-2 w-10 bg-white my-1 rounded-full transition-all duration-300 ${HamburgerState ? 'rotate-45 w-12 absolute' : 'rotate-0'} `}></div>
                <div className={`h-2 w-10 bg-white my-1 rounded-full transition-all duration-300 ${HamburgerState ? '-rotate-45 w-12' : 'rotate-0'} `}></div>
            </button>
            <NavMenu isOpened={HamburgerState} />
        </>
    )
}

function Navigations() {
    return (
        <div className="shrink-1 w-[250px]">
            <div className="hidden md:flex justify-between text-sm">
                <button>Home</button>
                <button>Categories</button>
                <button>About Us</button>
            </div>
            <Hamburger />
        </div>
    )
}

function Account() {
    return (
        <div className="w-[250px] flex shrink-1 items-center justify-end">
            <div className="rounded-full"></div>
            <div className="rounded-full"></div>
        </div>
    )
}

export default function Navbar() {
    return (
        <div className="bg-bluish h-[75px] md:h-auto py-[12px] px-[20px] md:px-[40px] md:rounded-[25px] md:my-[20px] md:mx-[70px] text-white flex justify-between items-center">
            <Navigations />
            <Logo />
            <Account />
        </div>
    )
}