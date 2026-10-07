function Rent(){
   return(
         <div className="group relative">
            <h1 className="hover:text-blue-700 cursor-pointer py-5">Rent</h1>
            <div className="hidden group-hover:flex fixed top-16 left-17 right-0 min-h-[300px] bg-white z-50 p-8 gap-20">
                <div>
                    <p>Rental listings</p>
                    <div>
                        <a href="#">Search apartments for rent</a>
                        <a href="#">Search houses for rent</a>
                        <a href="#">Search all rental listings</a>
                        <a href="#">Browse all rental buildings</a>
                        <a href="#">New construction</a>
                        <a href="#">Coming soon</a>
                        <a href="#">Recent home sales</a>
                        <a href="#">All homes</a>
                    </div>
                </div>
                <div>
                    <p>Tools for renters</p>
                    <div>
                        <a href="#">Estimate what you can afford</a>
                        <a href="#">See your application</a>
                        <a href="#">Manage your tours</a>
                        <a href="#">Pay your rent</a>
                        <a href="#">Build your credit</a>
                        <a href="#">Get renters insurance</a>
                        <a href="#">Explore housing voucher programs</a>
                        <a href="#">Learn more about renting</a>
                    </div>
                </div>
            </div>
        </div>
   )
}
export default Rent;