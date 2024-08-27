import './App.css';

function App() {
    return (
        <div className="App bg-lavender_blush font-satoshi overflow-x-hidden">
            <section id={"home"}>
                <div className={"h-lvh flex"}>
                    <div className={"m-auto flex flex-col gap-y-3"}>
                        <h1 className={"font-black text-8xl"}>Alice</h1>
                        <h2 className={"font-black text-8xl"}>Hacks</h2>
                        <h3 className={"font-bold text-2xl"}>November 17-19, 2024</h3>
                        <a href={"google.com"} className={""}>
                            <button
                                className="h-14 border-black text-xl font-bold border-2 p-2.5 bg-beige transition-all hover:bg-rosy_brown shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none active:bg-[#00E1EF] rounded-md">
                                Register Soon!
                            </button>
                        </a>

                    </div>
                    <div>

                    </div>

                </div>

                <div id={"autoScrollContainer"} className={"h-24 w-full overflow-hidden border-y-4 flex"}>
                    <div id={"autoScrollText"} className={"my-auto"}>
                        {/*https://blog.hubspot.com/website/scrolling-text-css*/}
                        {/*Make text wrap better*/}
                        <p className={"text-nowrap text-7xl font-bold tracking-tighter"}>Alice Hack! Alice Hack! Alice
                            Hack! Alice Hack!</p>
                    </div>
                </div>
            </section>

            <section id={"about_us"} className={"h-screen flex"}>
                <div className={"m-auto"}>
                    <div className={"relative m-auto flex flex-col w-4/5"}>
                        <div className={"-mx-4 -mb-2 w-3/5 p-3  bg-gradient_blue border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] slow-shift"}>
                            <div className={""}>
                                <h3>ABOUT US</h3>
                            </div>
                        </div>

                        <div
                            className="z-10 w-full px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
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

            <section id={"sponsorStats"}>

            </section>

            <section id={"sponsorEvent"}>

            </section>

        </div>
    );
}

export default App;
