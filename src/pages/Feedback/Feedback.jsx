
const FeedBack = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto">
            <section className="py-6 border border-orange-600 mt-5 rounded-3xl">
                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leading-none">Sent Us your Feedback</h1>
                        <p className="text-lg">Please help us with your valuable suggestions so that we can improve our service and bring it to your service. Your feedback is very important to us. We will try our best to implement your feedback. Your feedback is very important to us. We will try our best to implement your feedback. stay with us!</p>
                    </div>
                    <div className="items-center self-center justify-center flex-shrink-0 lg:justify-end">
                        <div className="w-[90%] md:w-full">
                            <textarea className="p-6 outline-0 border border-orange-600 rounded-2xl" placeholder="write your feedback here..." id="" cols="lg:30" rows="10"></textarea>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="relative  border border-orange-600 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                                <span className="h-48 w-[90%] rounded rotate-[-40deg] bg-orange-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="flex items-center gap-2 relative w-full text-orange-600 transition-colors duration-300 ease-in-out group-hover:text-white"> sent your Feedback </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeedBack;