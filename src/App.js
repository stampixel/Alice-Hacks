import './App.css';
import Typing from "./components/Typing"

function App() {
    return (
        <div className="App bg-lavender_blush font-satoshi overflow-x-hidden">
            <section id={"home"} className={"h-lvh"}>
                <div className={"h-lvh flex"}>
                    <div className={"m-auto flex flex-col gap-y-3"}>
                        <h1 className={"font-black text-8xl text-misty_rose_2"}>Alice</h1>
                        <h2 className={"font-black text-8xl"}>Hacks</h2>
                        <h3 className={"font-bold text-2xl"}>November 17-19, 2024</h3>
                        <a href={"google.com"} className={""}>
                            <button
                                className="h-14 border-black text-xl font-bold border-2 p-2.5 bg-beige transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none active:bg-[#00E1EF] rounded-md">
                                Register Soon!
                            </button>
                        </a>

                    </div>
                    <div>

                    </div>

                </div>

                <div id={"autoScrollContainer"} className={"h-24 w-full overflow-hidden border-y-4 border-black flex bg-white"}>
                    <div id={"autoScrollText"} className={"my-auto"}>
                        {/*https://blog.hubspot.com/website/scrolling-text-css*/}
                        {/*Make text wrap better*/}
                        <p className={"text-nowrap text-7xl font-bold tracking-tighter"}>Alice Hack! Alice Hack! Alice
                            Hack! Alice Hack! Alice Hack! Alice Hack! Alice Hack! Alice Hack! Alice Hack! Alice Hack!</p>
                    </div>
                </div>
            </section>

            <section id={"aboutUs"} className={"h-screen flex"}>
                <div className={"m-auto"}>
                    <div className={"m-auto flex flex-col w-4/5"}>
                        <div className={"z-10 -mx-4 -mb-2 w-3/5 p-3 bg-cornflower_blue border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] slow-shift"}>
                            <div className={""}>
                                <h3>ABOUT US</h3>
                            </div>
                        </div>

                        <div
                            className="z-0 w-full px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
                            <div>
                                <h1 className="text-xl mb-4">AliceHacks is a hackathon run by high school students that
                                    draws inspiration from the
                                    classic tale of Alice in Wonderland! Participants are encouraged to let their
                                    creativity, imagination, and silliness run wild rather than worrying too much about
                                    full
                                    technicality. We want to provide a platform for veterans and beginners to go hand in
                                    hand with each other without their technical skill differences!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={"sponsorStats"} className={"h-screen flex border-y-4 border-black bg-misty_rose"}>
                <div className={"relative w-full h-full"}>
                    {/*centers because of negative margins*/}
                    <img className={"absolute w-6/12 left-0 right-0 top-11 mx-auto"} alt={""} src={"/schools.png"}/>
                    <img className={"absolute w-6/12 left-4 top-40"} alt={""} src={"/schools.png"}/>
                    <img className={"absolute w-6/12 right-8 top-64"} alt={""} src={"/schools.png"}/>
                     {/*Change this to the 2 cheering bunny*/}
                    <img className={"absolute w-8/12 top-2/4 right-0"} alt={""} src={"/bunny.png"}/>
                </div>
            </section>

            <section id={"sponsorEvent"} className={"h-[32rem] flex"}>
                <div
                    className={"gap-y-2 m-auto w-11/12 px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                    {/*<h1 className={"text-4xl font-black"}>Sponsor an Event of ${`{}`}</h1>*/}
                    <h1 className={"text-4xl font-black"}>Sponsor an Event of <h1 className={"text-gradient_blue"}>
                        <Typing/></h1></h1>

                    <p>At the heart of our event are sponsors who make it possible. Want to help support the next
                        generation of talents? </p>

                    <a href={"google.com"} className={"p-2"}>
                        <button
                            className="h-14 border-black text-xl font-bold border-2 p-2.5 bg-beige transition-all hover:shadow-none hover:bg-rosy_brown shadow-[4px_4px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
                            Become a Sponsor!
                        </button>
                    </a>
                </div>
            </section>

            <section id={"ourSponsors"} className={"h-full mb-36"}>
                <div>
                    <h3 className={"text-3xl font-black pt-12 pb-6"}>Our Sponsors</h3>
                </div>
                <div id={"sponsors"} className={"w-screen flex flex-col gap-y-12"}>
                    <div className={"w-11/12 md:w-3/5 m-auto"}>
                        <div className={"flex flex-col"}>
                            <div
                                className={"h-[10rem] mb-4 px-12 py-4 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                                <a href={"https://www.bestbuy.com"} className={"h-full flex"}>
                                    <img
                                        src="/logos/BEST_BUY.png" alt={""}
                                        className={"object-scale-down h-full"}/>
                                </a>
                            </div>

                            <div
                                className={"h-[10rem] mb-4 px-12 py-4 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                                <a href={"https://automationroboticsarduino.com"} className={"h-full w-full flex"}><img
                                    src="/logos/GAR.png" alt={""} className={"object-scale-down mx-auto"}/></a>
                            </div>
                        </div>
                        <div className={"grid grid-cols-2 gap-4 place-items-center"}>
                            <div
                                className={"h-[7rem] px-8 py-8 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                                <a href={"https://certopus.com/"} className={"h-full w-full flex"}><img
                                    src="/logos/CERTOPUS.svg" alt={""}
                                    className={"object-scale-down mx-auto"}/></a>
                            </div>
                            <div
                                className={"h-[7rem] px-8 py-8 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                                <a href={"https://igda.org/"} className={"h-full w-full flex"}>
                                    <img
                                        src="/logos/IGDA.png" alt={""}
                                        className={"object-scale-down mx-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"h-[7rem] px-8 py-8 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                                <a className={"h-full w-full flex"}><img
                                    src="/logos/INTERVIEW_BUDDY.png" alt={""}
                                    className={"object-scale-down mx-auto"}/></a>
                            </div>
                            <div
                                className={"h-[7rem] px-8 py-8 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                                <a href={"https://interviewbuddy.net/"} className={"h-full w-full flex"}><img
                                    src="/logos/NORDVPN.png" alt={""}
                                    className={"object-scale-down mx-auto"}/></a>
                            </div>
                            <div
                                className={"h-[7rem] px-8 py-8 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                                <a href={"https://www.oreilly.com/"} className={"h-full w-full flex"}><img
                                    src="/logos/OREILLY.png" alt={""}
                                    className={"object-scale-down mx-auto"}/></a>
                            </div>
                            <div
                                className={"h-[7rem] px-8 py-8 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                                <a href={"https://gen.xyz/"} className={"h-full w-full flex"}>
                                    <img
                                        src="/logos/XYZ.png" alt={""}
                                        className={"object-scale-down mx-auto"}/></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <h3 className={"text-3xl font-black pt-12 pb-6"}>Our partners</h3>
                </div>

                <div className={"flex flex-col w-11/12 m-auto"}>
                    <div
                        className={"h-[10rem] mb-4 px-12 py-4 bg-white border-2 border-black transition-all hover:shadow-none hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid place-content-center"}>
                        <a href={"https://www.bestbuy.com"} className={"h-full w-full flex"}>
                            <img
                                src="/logos/BEST_BUY.png" alt={""}
                                className={"object-scale-down mx-auto"}/>
                        </a>
                    </div>
                </div>
            </section>

            <section id={"footer"} className={"h-64 border-t-black border-t-4 bg-white"}>

            </section>

        </div>
    );
}

export default App;
