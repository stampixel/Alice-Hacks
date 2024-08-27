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
                            <button className="h-14 border-black text-xl font-bold border-2 p-2.5 bg-beige transition-all hover:bg-rosy_brown shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none active:bg-[#00E1EF] rounded-md">
                                Register Soon!
                            </button>
                        </a>

                    </div>
                    <div>

                    </div>

                </div>

                <div id={"autoScrollContainer"} className={"w-full overflow-hidden  border-y-4"}>
                    <div id={"autoScrollText"}>
                        <p className={"text-nowrap text-5xl font-bold"}>Alice Hack Alice Hack Alice Hack Alice Hack</p>
                    </div>

                </div>


            </section>

            <section id={"about us"}>

            </section>

            <section id={"sponsorStats"}>

            </section>

            <section id={"sponsorEvent"}>

            </section>

        </div>
    );
}

export default App;
