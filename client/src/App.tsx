import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Alumni from "./components/Alumni";
import AlumniRegistration from "./components/AlumniRegistration";
import About from "./pages/About";
import Recogniation from "./pages/Recogniation";
import AnnualReport from "./pages/AnnualReport";
import AnnualAccount from "./pages/AnnualAccount";
import SponseringBody from "./pages/SponseringBody";
import AdviseryBoard from "./pages/AdviseryBoard";
import AppliedScience from "./pages/AppliedScience";
import AI from "./pages/AI";
import ComputerScience from "./pages/ComputerScience";
import IOT from "./pages/IOT";
import Collbration from "./pages/Collbration";
import Calendar from "./pages/Calendar";
import DirecrorMessage from "./pages/DirecrorMessage";
import Registrar from "./pages/Registrar";
import CoE from "./pages/CoE";
import Council from "./pages/Council";
import Complaints from "./pages/Complaints";
import ComplaintsRegistration from "./components/ComplaintsRegistration";
import Team from "./pages/Team";
import Cells from "./pages/Cells";
import Organogram from "./pages/Organogram";
import RulesAndRegulations from "./pages/RulesAndRegulations";
import ResearchAndDevelopment from "./pages/ResearchAndDevelopment";
import Conferences from "./pages/Conferences";
import Funding from "./pages/Funding";
import IPRList from "./pages/IPRList";
import pbic from "./pages/pbic";
import SportsFacilities from "./pages/SportsFacilities";
import HostelFacilities from "./pages/HostelFacilities";
import PlacementPage from "./pages/PlacementPage";
import Grievances from "./pages/Grevience";
import ICCPage from "./pages/ICCPage";
import IdealLab from "./pages/IdealLab";
import PIETISTE from "./pages/PIETISTE";
import IEEEPage from "./pages/IEEEPage";
import IETEPage from "./pages/IETEPage";
import NSS from "./pages/NSS";
import Health from "./pages/Health";
import Disables from "./pages/Disables";
import Facilties from "./pages/Facilties";
import Publications from "./pages/Publications";
import LiteracyForum from "./pages/LiteracyForum";
import AcmChapter from "./pages/AcmChapter";
import AnnualEventsPage from './pages/AnnualEvents'
import GoverningCouncil from "./pages/GoverningCouncil";
import NEPPage from "./pages/NEPPage";
import NaacFirstCycle from "./pages/Naac";
import NirfPage from "./pages/Nirf";
import QivRankingPage from "./pages/Qiv";
import TimesRankingPage from "./pages/TimesRanking";
import ELibrary from "./pages/ELibrary";
import NbaPage from "./pages/Nba";
import OBE from "./pages/OBE";
import EventPage from "./pages/IPR-active";
import IQACPage from "./pages/IQAC";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/alumni" component={Alumni} />
      <Route path="/alumni-registration" component={AlumniRegistration} />
      <Route path="/about" component={About} />
      <Route path="/recognization" component={Recogniation} />
      <Route path="/annual-reports" component={AnnualReport} />
      <Route path="/annual-accounts" component={AnnualAccount} />
      <Route path="/sponsering-body" component={SponseringBody} />
      <Route path="/advisery-board" component={AdviseryBoard} />
      <Route path="/applied-sceince" component={AppliedScience} />
      <Route path="/artificial-intelligence" component={AI} />
      <Route path="/computer-science" component={ComputerScience} />
      <Route path="/dep-iot" component={IOT} />
      <Route path="/collbration" component={Collbration} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/director-message" component={DirecrorMessage} />
      <Route path="/registar-message" component={Registrar} />
      <Route path="/coe-message" component={CoE} />
      <Route path="/governing-council" component={GoverningCouncil} />
      <Route path="/complaints" component={Complaints} />
      <Route path="/complaints-registration" component={ComplaintsRegistration} />
      <Route path="/team-management" component={Team} />
      <Route path="/cells-committees" component={Cells} />
      <Route path="/organogram" component={Organogram} />
      <Route path="/rules-regulation" component={RulesAndRegulations} />
      <Route path="/research-development" component={ResearchAndDevelopment} />
      <Route path="/conferences" component={Conferences} />
      <Route path="/funding" component={Funding} />
      <Route path="/iprs" component={IPRList} />
      <Route path="/pbic" component={pbic} />
      <Route path="/sports" component={SportsFacilities} />
      <Route path="/hostel-facilties" component={HostelFacilities} />
      <Route path="/placements" component={PlacementPage} />
      <Route path="/greviance" component={Grievances} />
      <Route path="/icc" component={ICCPage} />
      <Route path="/ideal-lab" component={IdealLab} />
      <Route path="/pietiste" component={PIETISTE} />
      <Route path="/iee" component={IEEEPage} />
      <Route path="/iete" component={IETEPage} />
      <Route path="/nss" component={NSS} />
      <Route path="/health" component={Health} />
      <Route path="/disable" component={Disables} />
      <Route path="/facilties" component={Facilties} />
      <Route path="/publications" component={Publications} />
      <Route path="/literacy-forum" component={LiteracyForum} />
      <Route path="/acm" component={AcmChapter} />
      <Route path="/annual-events" component={AnnualEventsPage} />
      <Route path="/governing-concil" component={GoverningCouncil} />
      <Route path="/nep" component={NEPPage} />
      <Route path="/naac" component={NaacFirstCycle} />
      <Route path="/nirf" component={NirfPage} />
      <Route path="/qiv-ranking" component={QivRankingPage} />
      <Route path="/times-ranking" component={TimesRankingPage} />
          <Route path="/e-library" component={ELibrary} />
          <Route path="/iqac" component={IQACPage} />
          <Route path="/:rest*" component={NotFound} />

    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;