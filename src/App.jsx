function App() {
    return (
        <main className="relative flex items-center justify-center w-screen h-screen bg-blue-pale ">
            <img
                src="/images/pattern-background-desktop.svg"
                className="absolute top-0 left-0 hidden w-full sm:block "
                alt=""
            />
            <img
                src="/images/pattern-background-mobile.svg"
                className="absolute top-0 left-0 block w-full sm:hidden "
                alt=""
            />
            <article className="relative flex flex-col max-w-[30rem] overflow-hidden bg-white rounded-3xl m-6 card-shadow">
                <img
                    src="/images/illustration-hero.svg"
                    className="w-full"
                    alt=""
                />
                <div className="flex flex-col gap-4 p-6 py-8 text-center sm:gap-4 sm:p-12">
                    <h1 className="text-2xl font-black sm:text-3xl text-blue-dark">
                        Order Summary
                    </h1>
                    <p className="px-6 text-sm font-medium sm:text-lg text-blue-desa">
                        You can now listen to millions of songs, audiobooks, and
                        podcasts on any device anywhere you like!
                    </p>
                    <div className="flex flex-row items-center gap-5 p-6 mt-2 rounded-2xl bg-blue-v-pale">
                        <img src="/images/icon-music.svg" alt="" />
                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col items-start justify-center">
                                <h2 className="font-black text-blue-dark">
                                    Annual Plan
                                </h2>
                                <p className="text-sm font-medium md:text-lg text-blue-desa">
                                    $59.99/year
                                </p>
                            </div>
                            <a
                                href="/"
                                className="text-sm font-bold underline duration-75 decoration-solid text-blue-bright hover:solid hover:no-underline hover:text-opacity-60"
                            >
                                Change
                            </a>
                        </div>
                    </div>
                    <button className="w-full p-4 my-3 font-bold text-white duration-75 sm:my-4 bg-blue-bright rounded-xl hover:bg-opacity-70 custom-shadow">
                        Proceed to Payment
                    </button>
                    <button className="font-bold duration-75 text-blue-desa hover:text-blue-dark">
                        Cancel Order
                    </button>
                </div>
            </article>
        </main>
    );
}

export default App;
