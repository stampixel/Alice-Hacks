import './App.css';
import Typing from "./components/Typing"
import Deck from "./components/Cards"
import "animate.css"

// https://dbramwell.github.io/react-animate-on-scroll/#install

function App() {
    return (
        <div className="App bg-cornflower_blue font-satoshi overflow-x-hidden">
            <section id={"home"} className={"h-lvh"}>
                <img className={"absolute top-[20%] left-[10%]"} alt={"hearts"} src={"hearts.png"}/>
                <img className={"absolute top-[17%] right-[10%]"} alt={"card"} src={"acehearts.png"}/>
                <img className={"absolute top-[70%] left-[7%]"} alt={"clubs"} src={"clubs.png"}/>
                <img className={"absolute top-[75%] right-[7%]"} alt={"diamonds"} src={"diamonds.png"}/>
                <div className={"h-lvh flex lg:px-64 lg:text-left lg:flex-row"}>
                    <div className={"m-auto flex flex-col gap-y-3 lg:ml-0 lg:w-1/2"}>
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

                    <div id={"cards"} className={"hidden md:w-1/2"}>
                        <Deck/>
                    </div>
                </div>
            </section>

            <div id={"autoScrollContainer"}
                 className={"h-24 w-full overflow-hidden border-y-4 border-black flex bg-white"}>
                <div id={"autoScrollText"} className={"my-auto"}>
                    {/*https://blog.hubspot.com/website/scrolling-text-css*/}
                    {/*Make text wrap better*/}
                    <p className={"text-nowrap text-7xl font-bold tracking-tighter"}>Alice Hack! Alice Hack! Alice
                        Hack! Alice Hack! Alice Hack! Alice Hack! Alice Hack! Alice Hack! Alice Hack! Alice Hack!</p>
                </div>
            </div>

            <section id={"aboutUs"} className={"h-screen flex bg-gradient_blue"}>
                <div className={"m-auto"}>
                    <div className={"m-auto flex flex-col w-4/5 md:w-3/5"}>
                        <div
                            className={"bg-misty_rose z-10 -mx-4 -mb-2 w-3/5 p-3 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] slow-shift"}>
                            <div className={""}>
                                <h3 className={"text-3xl font-bold"}>About Us</h3>
                            </div>
                        </div>

                        <div
                            className="z-0 w-full px-8 py-4 bg-lavender_blush border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center md:p-8">
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

            <section id={"sponsorStats"} className={"h-[46rem] flex flex-col border-t-4 border-black md:h-screen"}>
                <div>
                    <h3 className={"text-3xl font-black pt-12 pb-6"}>Our Impact</h3>
                </div>
                {/*Floating text*/}

                {/*<div*/}
                {/*    className={"mx-auto pb-6 bg-misty_rose z-10 w-3/5 p-3 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] slow-shift"}>*/}
                {/*    <div className={""}>*/}
                {/*        <h3 className={"text-3xl font-bold"}>About Us</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"relative w-full h-full"}>
                    <img
                        className={"absolute w-6/12 left-0 right-0 top-11 mx-auto md:w-[19rem] animate__animated animate__slideInLeft"}
                        alt={""}
                        src={"/schools.png"}/>
                    <img
                        className={"absolute w-6/12 left-4 top-40 md:w-3/12 md:left-24 md:top-52 animate__animated animate__slideInLeft"}
                        alt={""}
                        src={"/schools.png"}/>
                    <img
                        className={"absolute w-6/12 right-8 top-64 md:w-3/12 md:right-16 animate__animated animate__slideInRight"}
                        alt={""}
                        src={"/schools.png"}/>
                    <img className={"absolute w-8/12 bottom-16 mx-auto left-0 right-0 md:w-5/12 "} alt={""}
                         src={"/bunny_cheer.png"}/>
                </div>
            </section>

            <section id={"sponsorEvent"} className={"h-[32rem] flex"}>
                <div
                    className={"bg-lavender_blush gap-y-2 m-auto w-11/12 px-8 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center md:w-8/12"}>
                    {/*<h1 className={"text-4xl font-black"}>Sponsor an Event of ${`{}`}</h1>*/}
                    <h1 className={"text-4xl font-black"}>Sponsor an Event of <h1 className={"text-gradient_blue"}>
                        <Typing/></h1></h1>

                    <p className={"text-xl font-medium"}>At the heart of our event are sponsors who make it possible. Want to help support the next
                        generation of talents? </p>

                    <a href={"google.com"} className={"p-2"}>
                        <button
                            className="h-14 border-black text-xl font-bold border-2 p-2.5 bg-navajo_white transition-all hover:shadow-none hover:bg-navajo_white_2 shadow-[4px_4px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
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
                                className={"mb-4 flex justify-center items-center"}>
                                <a href={"https://www.onlyoffice.com/"}
                                   className={"flex justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-back_grey shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/onlyoffice.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%]"}/>
                                </a>
                            </div>
                            <div
                                className={"mb-4 flex justify-center items-center"}>
                                <a href={"https://cryptochicks.ca/"}
                                   className={"flex justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/cryptochicks.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%]"}/>
                                </a>
                            </div>

                        </div>

                        <div className={"grid grid-cols-2 gap-4"}>

                            <div
                                className={"flex justify-center items-center"}>
                                <a href={"https://www.xanadu.ai/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)]  hover:shadow-none grid rounded-md"}>
                                    <img
                                        src="/sponsors/xanadu.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://artofproblemsolving.com/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/aops.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://www.wolframalpha.com/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/wolfram.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://www.echo3d.com/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/echo3d.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://www.jdoodle.com/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/jdoodle.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://www.ie.edu/university/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/ieuniversity.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://www.algoversecodingacademy.com/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/algoverse.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://www.standoutstickers.com"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/standoutstickers.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://certopus.com/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/octopus.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://balsamiq.com/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/balsamiq.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                            <div
                                className={"justify-center items-center"}>
                                <a href={"https://gen.xyz/"}
                                   className={" justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] grid hover:shadow-none rounded-md"}>
                                    <img
                                        src="/sponsors/xyz.png" alt={""}
                                        className={"max-h-[60%] max-w-[60%] m-auto"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <h3 className={"text-3xl font-black pt-12 pb-6"}>Our partners</h3>
                </div>

                <div className={"w-11/12 md:w-3/5 m-auto"}>
                    <div
                        className={"mb-4 flex justify-center items-center"}>
                        <a href={"https://www.bestbuy.com"}
                           className={"flex justify-center items-center w-full h-[20vw] bg-white border-2 border-black transition-all hover:translate-y-0.5 hover:bg-rosy_brown shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none rounded-md"}>
                        <img
                                src="/sponsors/hackclub.svg" alt={""}
                                className={"max-h-[60%] max-w-[60%]"}/>
                        </a>
                    </div>
                </div>
            </section>

            <section id={"footer"} className={"h-64 border-t-black border-t-4 bg-white flex"}>
                <div className={"flex flex-col gap-y-3 m-auto text-lg font-medium"}>
                    <h2 className={""}>
                        Made with ❤️ in
                        <br/>
                        Toronto, Ontario, Canada 🇨🇦
                    </h2>
                    <div className={"flex flex-row gap-x-2 m-auto w-4/6 items-center justify-center h-12"}>
                        <img src={"/icons/instagram.png"} className={"h-full"} alt={"instagram"}/>
                        <img src={"/icons/linkedin.png"} className={"h-full"} alt={"instagram"}/>
                        <img src={"/icons/tiktok.png"} className={"h-full"} alt={"instagram"}/>
                        <img src={"/icons/mail.png"} className={"h-full"} alt={"instagram"}/>
                    </div>
                    <p>Copyright @ AliceHacks</p>
                </div>

            </section>

        </div>
    );
}

export default App;
