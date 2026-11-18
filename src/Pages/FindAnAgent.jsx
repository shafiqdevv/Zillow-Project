import FrequentlyQuestion from "../Component/common/FrequentlyQuestion";
import AgentDirectoryLinks from "../Component/findAnAgent/AgentDirectoryLinks";
import AgentListings from "../Component/findAnAgent/AgentListings";
import GetHelpAgent from "../Component/findAnAgent/GetHelpAgent";
import HeroAgent from "../Component/findAnAgent/HeroAgent";
import agentQuestions from "../Component/findAnAgent/agentQuestionsData";
import AreYouReal from "../Component/findAnAgent/areYouReal";

function FindAnAgent() {
  return (
    <>
      <HeroAgent />
      <AgentListings/>
      <GetHelpAgent/>
      <FrequentlyQuestion questions={agentQuestions}/>
      <AreYouReal/>
      <AgentDirectoryLinks/>
    </>
  );
}

export default FindAnAgent;