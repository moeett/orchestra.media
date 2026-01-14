import Layout from "./Layout.jsx";

import AIEnhancements from "./AIEnhancements";

import About from "./About";

import BoothDesign from "./BoothDesign";

import Branding from "./Branding";

import CaseFalcon from "./CaseFalcon";

import CaseFormula1 from "./CaseFormula1";

import CaseJetex from "./CaseJetex";

import CaseKingdomTomorrow from "./CaseKingdomTomorrow";

import CaseMirionSunNuclear from "./CaseMirionSunNuclear";

import CasePrattWhitney from "./CasePrattWhitney";

import CaseRollsRoyce from "./CaseRollsRoyce";

import CaseStudies from "./CaseStudies";

import CaseStudyDetail from "./CaseStudyDetail";

import Contact from "./Contact";

import ContentProduction from "./ContentProduction";

import EventsManagement from "./EventsManagement";

import GlobalPresence from "./GlobalPresence";

import Home from "./Home";

import Marketing from "./Marketing";

import MultimediaImmersive from "./MultimediaImmersive";

import News from "./News";

import OurTeam from "./OurTeam";

import SalesAgent from "./SalesAgent";

import Sponsorship from "./Sponsorship";

import VIPServices from "./VIPServices";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    AIEnhancements: AIEnhancements,
    
    About: About,
    
    BoothDesign: BoothDesign,
    
    Branding: Branding,
    
    CaseFalcon: CaseFalcon,
    
    CaseFormula1: CaseFormula1,
    
    CaseJetex: CaseJetex,
    
    CaseKingdomTomorrow: CaseKingdomTomorrow,
    
    CaseMirionSunNuclear: CaseMirionSunNuclear,
    
    CasePrattWhitney: CasePrattWhitney,
    
    CaseRollsRoyce: CaseRollsRoyce,
    
    CaseStudies: CaseStudies,
    
    CaseStudyDetail: CaseStudyDetail,
    
    Contact: Contact,
    
    ContentProduction: ContentProduction,
    
    EventsManagement: EventsManagement,
    
    GlobalPresence: GlobalPresence,
    
    Home: Home,
    
    Marketing: Marketing,
    
    MultimediaImmersive: MultimediaImmersive,
    
    News: News,
    
    OurTeam: OurTeam,
    
    SalesAgent: SalesAgent,
    
    Sponsorship: Sponsorship,
    
    VIPServices: VIPServices,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<AIEnhancements />} />
                
                
                <Route path="/AIEnhancements" element={<AIEnhancements />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/BoothDesign" element={<BoothDesign />} />
                
                <Route path="/Branding" element={<Branding />} />
                
                <Route path="/CaseFalcon" element={<CaseFalcon />} />
                
                <Route path="/CaseFormula1" element={<CaseFormula1 />} />
                
                <Route path="/CaseJetex" element={<CaseJetex />} />
                
                <Route path="/CaseKingdomTomorrow" element={<CaseKingdomTomorrow />} />
                
                <Route path="/CaseMirionSunNuclear" element={<CaseMirionSunNuclear />} />
                
                <Route path="/CasePrattWhitney" element={<CasePrattWhitney />} />
                
                <Route path="/CaseRollsRoyce" element={<CaseRollsRoyce />} />
                
                <Route path="/CaseStudies" element={<CaseStudies />} />
                
                <Route path="/CaseStudyDetail" element={<CaseStudyDetail />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/ContentProduction" element={<ContentProduction />} />
                
                <Route path="/EventsManagement" element={<EventsManagement />} />
                
                <Route path="/GlobalPresence" element={<GlobalPresence />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Marketing" element={<Marketing />} />
                
                <Route path="/MultimediaImmersive" element={<MultimediaImmersive />} />
                
                <Route path="/News" element={<News />} />
                
                <Route path="/OurTeam" element={<OurTeam />} />
                
                <Route path="/SalesAgent" element={<SalesAgent />} />
                
                <Route path="/Sponsorship" element={<Sponsorship />} />
                
                <Route path="/VIPServices" element={<VIPServices />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}