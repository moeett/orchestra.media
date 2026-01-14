import { Suspense, lazy } from 'react';
import Layout from "./Layout.jsx";

const AIEnhancements = lazy(() => import("./AIEnhancements"));
const About = lazy(() => import("./About"));
const BoothDesign = lazy(() => import("./BoothDesign"));
const Branding = lazy(() => import("./Branding"));
const CaseFalcon = lazy(() => import("./CaseFalcon"));
const CaseFormula1 = lazy(() => import("./CaseFormula1"));
const CaseJetex = lazy(() => import("./CaseJetex"));
const CaseKingdomTomorrow = lazy(() => import("./CaseKingdomTomorrow"));
const CaseMirionSunNuclear = lazy(() => import("./CaseMirionSunNuclear"));
const CasePrattWhitney = lazy(() => import("./CasePrattWhitney"));
const CaseRollsRoyce = lazy(() => import("./CaseRollsRoyce"));
const CaseStudies = lazy(() => import("./CaseStudies"));
const CaseStudyDetail = lazy(() => import("./CaseStudyDetail"));
const Contact = lazy(() => import("./Contact"));
const ContentProduction = lazy(() => import("./ContentProduction"));
const EventsManagement = lazy(() => import("./EventsManagement"));
const GlobalPresence = lazy(() => import("./GlobalPresence"));
const Home = lazy(() => import("./Home"));
const Marketing = lazy(() => import("./Marketing"));
const MultimediaImmersive = lazy(() => import("./MultimediaImmersive"));
const News = lazy(() => import("./News"));
const OurTeam = lazy(() => import("./OurTeam"));
const SalesAgent = lazy(() => import("./SalesAgent"));
const Sponsorship = lazy(() => import("./Sponsorship"));
const VIPServices = lazy(() => import("./VIPServices"));

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { PAGE_URLS } from '@/utils';

const PAGES = {
    AIEnhancements,
    About,
    BoothDesign,
    Branding,
    CaseFalcon,
    CaseFormula1,
    CaseJetex,
    CaseKingdomTomorrow,
    CaseMirionSunNuclear,
    CasePrattWhitney,
    CaseRollsRoyce,
    CaseStudies,
    CaseStudyDetail,
    Contact,
    ContentProduction,
    EventsManagement,
    GlobalPresence,
    Home,
    Marketing,
    MultimediaImmersive,
    News,
    OurTeam,
    SalesAgent,
    Sponsorship,
    VIPServices,
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
            <Suspense fallback={<div className="min-h-screen bg-[#0a1628]" />}>
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
            </Suspense>
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