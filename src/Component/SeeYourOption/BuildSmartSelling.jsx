import { ArrowRight, Notebook } from "lucide-react";

function BuildSmartSelling(){
    return(
        <div className="bg-[#147568] py-10 px-10 md:px-20 lg:px-20 my-10">
            <div className="bg-white grid lg:grid-cols-3 items-center text-center px-10 p-5 rounded-xl ">
                <div>
                    <Notebook size={100} color="blue"/>
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl font-bold text-center">Build a smart selling plan</h2>
                    <p className="my-5">Talk to your agent about  thier marketing approach - especially online - to ensure you're getting the best possible price for your home.</p>
                    <a className="flex gap-2 text-blue-600 font-semibold items-center my-5" href="#">Creating a selling plan 
                        <ArrowRight size={20}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default BuildSmartSelling;