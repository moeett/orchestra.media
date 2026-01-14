


export const PAGE_URLS: { [key: string]: string } = {
    Home: '/',
    OurTeam: '/our-team/',
    GlobalPresence: '/global-presence/',
    SalesAgent: '/our-services/sales-agent-space-bookings/',
    BoothDesign: '/our-services/booth-design-construction/',
    EventsManagement: '/our-services/events/',
    VIPServices: '/our-services/vip-delegation-services/',
    Sponsorship: '/extra-services/sponsorship/',
    Marketing: '/extra-services/marketing/',
    Branding: '/extra-services/branding/',
    AIEnhancements: '/extra-services/ai-enhancements/',
    ContentProduction: '/extra-services/content-production/',
    MultimediaImmersive: '/extra-services/multimedia-immersive/',
    CaseStudies: '/case-studies/',
    CaseKingdomTomorrow: '/project/kingdom-of-tomorrow-journey/',
    CasePrattWhitney: '/project/project019/',
    CaseRollsRoyce: '/project/rolls-royce/',
    CaseMirionSunNuclear: '/project/mirion-sun-nuclear-global-concept/',
    CaseJetex: '/project/jetex/',
    CaseFalcon: '/project/falcon/',
    CaseFormula1: '/project/formula-1-fanzone/',
    News: '/news/',
    Contact: '/contact/',
    About: '/about/',
    CaseStudyDetail: '/case-studies/detail/', // Fallback or strict routing
};

export function createPageUrl(pageName: string) {
    // Exact match
    if (PAGE_URLS[pageName]) {
        return PAGE_URLS[pageName];
    }

    // Fallback for case-insensitive lookup
    const foundKey = Object.keys(PAGE_URLS).find(k => k.toLowerCase() === pageName.toLowerCase());
    if (foundKey) {
        return PAGE_URLS[foundKey];
    }

    // Default fallback (legacy behavior safe-guard)
    return '/' + pageName.toLowerCase().replace(/ /g, '-');
}