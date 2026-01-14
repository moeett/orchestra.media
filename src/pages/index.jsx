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
import { PAGE_URLS } from '@/utils';

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

                <Route path={PAGE_URLS.Home} element={<Home />} />


                <Route path={PAGE_URLS.AIEnhancements} element={<AIEnhancements />} />

                <Route path={PAGE_URLS.About} element={<About />} />

                <Route path={PAGE_URLS.BoothDesign} element={<BoothDesign />} />

                <Route path={PAGE_URLS.Branding} element={<Branding />} />

                <Route path={PAGE_URLS.CaseFalcon} element={<CaseFalcon />} />

                <Route path={PAGE_URLS.CaseFormula1} element={<CaseFormula1 />} />

                <Route path={PAGE_URLS.CaseJetex} element={<CaseJetex />} />

                <Route path={PAGE_URLS.CaseKingdomTomorrow} element={<CaseKingdomTomorrow />} />

                <Route path={PAGE_URLS.CaseMirionSunNuclear} element={<CaseMirionSunNuclear />} />

                <Route path={PAGE_URLS.CasePrattWhitney} element={<CasePrattWhitney />} />

                <Route path={PAGE_URLS.CaseRollsRoyce} element={<CaseRollsRoyce />} />

                <Route path={PAGE_URLS.CaseStudies} element={<CaseStudies />} />

                <Route path={PAGE_URLS.CaseStudyDetail} element={<CaseStudyDetail />} />

                <Route path={PAGE_URLS.Contact} element={<Contact />} />

                <Route path={PAGE_URLS.ContentProduction} element={<ContentProduction />} />

                <Route path={PAGE_URLS.EventsManagement} element={<EventsManagement />} />

                <Route path={PAGE_URLS.GlobalPresence} element={<GlobalPresence />} />



                <Route path={PAGE_URLS.Marketing} element={<Marketing />} />

                <Route path={PAGE_URLS.MultimediaImmersive} element={<MultimediaImmersive />} />

                <Route path={PAGE_URLS.News} element={<News />} />

                <Route path={PAGE_URLS.OurTeam} element={<OurTeam />} />

                <Route path={PAGE_URLS.SalesAgent} element={<SalesAgent />} />

                <Route path={PAGE_URLS.Sponsorship} element={<Sponsorship />} />

                <Route path={PAGE_URLS.VIPServices} element={<VIPServices />} />

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