function FindLocalAgent(){
    return(
        <div>
            <header>
                <h1>Contect with a local agent</h1>
                <p>well match you with a Zillow partner agent who can help.</p>
            </header>
            <form>
                <div>
                    <label htmlFor="">Name*</label>
                    <input type="text" placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="">Phone*</label>
                    <input type="text" placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="">Email*</label>
                    <input type="text" placeholder="Name"/>
                </div>
                <button>Connect now</button>
            </form>
            <footer>
                <p>By pressing Connect now, you are contacting a buyers agent, you that Zillow Group and its affiliates, and real esatate proffessional
                    may call/text you about your inquiry, which involve use of autimated means and precrecorded voices.you also agree to our 
                    <a href="">Terms of Use.</a>
                    Zillow receives a fee from the agents we connect you with, at no cost to you.Zillow does not endorse any real estate proofessional.
                    We may share information about your and future site activity with your agent ti help them understand what youre looking for in a home.
                </p>
            </footer>
        </div>
    )
}
export default FindLocalAgent;