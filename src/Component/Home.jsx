import NavSide from "./NavSide";
import Search from "./Search";
function Home() {
  return (
    <div className="flex">
      <NavSide />
      <div className="relative flex-1 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 pt-20 pl-20">
            <h1 className="text-6xl text-white font-extrabold">Rentals.Homes.</h1>
            <h1 className="text-6xl text-white font-extrabold">Agents.Loans</h1>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

// import NavSide from "./NavSide";
// import Search from "./Search";

// function Home(){
//     return(
//         <div className="flex">
//             <NavSide/>
//             <div className="relative h-105 overflow-hidden">
//                 <div className="bg-[url('/bg.jpg')] h-screen bg-cover bg-center absolute top-20 left-20">
//                     <h1 className="text-6xl text-white font-extrabold">Rentals.Homes.</h1>
//                     <h1 className="text-6xl text-white font-extrabold">Agents.Loans</h1>
//                     <Search/>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Home;