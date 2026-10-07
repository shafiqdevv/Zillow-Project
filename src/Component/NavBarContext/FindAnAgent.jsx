function FindAnAgent(){
    return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Find an agent</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div>
                    <p>Looking for pros?</p>
                    <div>
                        <a href="#">Real estate agents</a>
                        <a href="#">Home builders</a>
                    </div>
                </div>
                <div>
                    <p>I'm a pro</p>
                    <div>
                        <a href="#">Agent solutions</a>
                        <a href="#">Agent advertising</a>
                        <a href="#">Agent resource center</a>
                        <a href="#">Creat a free agent account</a>
                        <a href="#">Real estate business plan</a>
                        <a href="#">Real estate agent scripts</a>
                        <a href="#">Listing flyer templates</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FindAnAgent;