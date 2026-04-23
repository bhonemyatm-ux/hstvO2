// ============================================
// SCHOLARSHIPS DATABASE
// Add new scholarships here easily!
// ============================================

const scholarshipsData = [
    // 1. DAAD - Links to s.html
    {
        id: "daad",
        name: "DAAD Scholarship Programme",
        organization: "German Academic Exchange Service",
        country: "germany",
        flag: "🇩🇪",
        image: "daad-card.jpg",
        amount: "€1,200 - €2,000",
        amountValue: 2000,
        period: "per month",
        description: "Study in Germany or ASEAN countries with full funding covering tuition, living expenses, travel, and insurance for Master's, PhD, and Postdoctoral programs.",
        category: "government",
        degreeLevel: ["master", "phd", "postdoc"],
        deadline: "2026-03-31",
        link: "s.html", // ← YOUR DAAD DETAIL PAGE
        highlights: [
            "Full tuition coverage",
            "Monthly stipend €1,200-€2,760",
            "Health insurance included",
            "Flight tickets provided"
        ],
        tags: ["International", "Full Funding", "Europe", "Research"]
    },

    // 2. Chevening Scholarship
    {
        id: "chevening",
        name: "Chevening Scholarship",
        organization: "UK Government",
        country: "uk",
        flag: "🇬🇧",
        image: "chevening-card.jpg",
        amount: "Full Funding",
        amountValue: 30000,
        period: "for 1 year",
        description: "UK government's prestigious scholarship for outstanding emerging leaders to pursue one-year master's degrees at any UK university with full financial support.",
        category: "government",
        degreeLevel: ["master"],
        deadline: "2026-11-02",
        link: "scholarship-post-chevening.html",
        highlights: [
            "Any UK university",
            "Full tuition + living costs",
            "Return flights",
            "Leadership development"
        ],
        tags: ["International", "Leadership", "Full Funding", "UK"]
    },

    // 3. MEXT Scholarship
    {
        id: "mext",
        name: "MEXT Scholarship",
        organization: "Japanese Government",
        country: "japan",
        flag: "🇯🇵",
        image: "mext-card.jpg",
        amount: "¥144,000 - ¥145,000",
        amountValue: 1200,
        period: "per month",
        description: "Japanese government scholarship for undergraduate and graduate studies in Japan, including language training, tuition waiver, and generous monthly stipend.",
        category: "government",
        degreeLevel: ["bachelor", "master", "phd"],
        deadline: "2026-06-15",
        link: "scholarship-post-mext.html",
        highlights: [
            "Japanese language training",
            "Zero tuition fees",
            "Monthly allowance ¥144,000",
            "Round-trip airfare"
        ],
        tags: ["International", "Japan", "Full Funding", "Language Training"]
    },

    // 4. Australia Awards
    {
        id: "australia-awards",
        name: "Australia Awards Scholarship",
        organization: "Australian Government",
        country: "australia",
        flag: "🇦🇺",
        image: "australia-awards-card.jpg",
        amount: "Full Funding",
        amountValue: 35000,
        period: "for program duration",
        description: "Long-term development awards targeting future leaders from developing countries to undertake full-time undergraduate or postgraduate study at Australian universities.",
        category: "government",
        degreeLevel: ["bachelor", "master"],
        deadline: "2026-04-30",
        link: "scholarship-post-australia-awards.html",
        highlights: [
            "Full tuition coverage",
            "Return air travel",
            "Living allowance",
            "Health insurance"
        ],
        tags: ["International", "Australia", "Full Funding", "Development"]
    },

    // 5. Fulbright
    {
        id: "fulbright",
        name: "Fulbright Foreign Student Program",
        organization: "US Department of State",
        country: "usa",
        flag: "🇺🇸",
        image: "fulbright-card.jpg",
        amount: "Full Funding",
        amountValue: 40000,
        period: "for program duration",
        description: "Prestigious program enabling graduate students, young professionals and artists from abroad to study and conduct research in the United States.",
        category: "government",
        degreeLevel: ["master", "phd"],
        deadline: "2026-05-31",
        link: "scholarship-post-fulbright.html",
        highlights: [
            "Study at top US universities",
            "Tuition + living expenses",
            "Health insurance",
            "Professional development"
        ],
        tags: ["International", "USA", "Full Funding", "Research"]
    },

    // 6. Chinese Government Scholarship
    {
        id: "chinese-government",
        name: "Chinese Government Scholarship",
        organization: "Chinese Ministry of Education",
        country: "china",
        flag: "🇨🇳",
        image: "csc-card.jpg",
        amount: "¥3,000 - ¥3,500",
        amountValue: 450,
        period: "per month",
        description: "Comprehensive scholarship for international students to pursue Bachelor's, Master's or PhD programs at designated Chinese universities with full or partial funding.",
        category: "government",
        degreeLevel: ["bachelor", "master", "phd"],
        deadline: "2026-04-30",
        link: "scholarship-post-chinese-government.html",
        highlights: [
            "Tuition waiver",
            "Accommodation provided",
            "Monthly stipend",
            "Chinese language courses"
        ],
        tags: ["International", "China", "Full Funding", "Multiple Levels"]
    },

    // 7. KGSP - Korean Government Scholarship
    {
        id: "kgsp",
        name: "Korean Government Scholarship (KGSP)",
        organization: "Korean Government",
        country: "korea",
        flag: "🇰🇷",
        image: "kgsp-card.jpg",
        amount: "₩900,000 - ₩1,000,000",
        amountValue: 750,
        period: "per month",
        description: "Korean government scholarship program offering opportunities to study at Korean universities with language training, full tuition, and monthly allowance.",
        category: "government",
        degreeLevel: ["bachelor", "master", "phd"],
        deadline: "2026-03-20",
        link: "scholarship-post-kgsp.html",
        highlights: [
            "1 year Korean language course",
            "Full tuition waiver",
            "Monthly allowance",
            "Settlement allowance"
        ],
        tags: ["International", "Korea", "Full Funding", "Language Training"]
    },

    // 8. ASEAN Undergraduate Scholarship
    {
        id: "asean-scholarship",
        name: "ASEAN Undergraduate Scholarship",
        organization: "Singapore Government",
        country: "singapore",
        flag: "🇸🇬",
        image: "asean-scholarship-card.jpg",
        amount: "Full Funding",
        amountValue: 25000,
        period: "for 4 years",
        description: "Singapore government scholarship for ASEAN nationals to pursue undergraduate studies at top Singaporean universities with full financial support.",
        category: "government",
        degreeLevel: ["bachelor"],
        deadline: "2026-02-28",
        link: "scholarship-post-asean.html",
        highlights: [
            "Top Singapore universities",
            "Full tuition + allowance",
            "Pre-university course",
            "4-year program"
        ],
        tags: ["International", "Singapore", "ASEAN", "Undergraduate"]
    },

    // 9. Erasmus Mundus
    {
        id: "erasmus-mundus",
        name: "Erasmus Mundus Joint Masters",
        organization: "European Commission",
        country: "asean",
        flag: "🇪🇺",
        image: "erasmus-card.jpg",
        amount: "€1,400",
        amountValue: 1400,
        period: "per month",
        description: "Study in multiple European countries with this prestigious EU scholarship covering tuition, travel, and living costs for joint master's programs.",
        category: "government",
        degreeLevel: ["master"],
        deadline: "2026-01-15",
        link: "scholarship-post-erasmus.html",
        highlights: [
            "Study in 2-3 EU countries",
            "Full tuition waiver",
            "€1,400 monthly stipend",
            "Travel allowance"
        ],
        tags: ["International", "Europe", "Full Funding", "Multi-country"]
    },

    // 10. AIT Fellowship
    {
        id: "ait-fellowship",
        name: "AIT Fellowship Programme",
        organization: "Asian Institute of Technology",
        country: "asean",
        flag: "🇹🇭",
        image: "ait-card.jpg",
        amount: "$500 - $1,000",
        amountValue: 1000,
        period: "per month",
        description: "Fellowships for master's and doctoral students to study at AIT in Thailand, with partial to full funding depending on academic merit and financial need.",
        category: "university",
        degreeLevel: ["master", "phd"],
        deadline: "2026-03-15",
        link: "scholarship-post-ait.html",
        highlights: [
            "Study in Thailand",
            "Tuition waiver",
            "Monthly stipend",
            "Regional networking"
        ],
        tags: ["ASEAN", "Thailand", "Engineering", "Partial/Full Funding"]
    },

    // 11. UCST Excellence Scholarship
    {
        id: "ucst-merit",
        name: "UCST Excellence Scholarship",
        organization: "University of Computer Studies, Taunggyi",
        country: "myanmar",
        flag: "🇲🇲",
        image: "ucst-scholarship-card.jpg",
        amount: "500,000 MMK",
        amountValue: 250,
        period: "per year",
        description: "Merit-based scholarship for outstanding students enrolling in Computer Science or Computer Technology programs at UCST with full tuition coverage.",
        category: "university",
        degreeLevel: ["bachelor"],
        deadline: "2026-07-31",
        link: "scholarship-post-ucst.html",
        highlights: [
            "Full tuition waiver",
            "4-year renewable",
            "For CS/CT majors",
            "Local scholarship"
        ],
        tags: ["Local", "Myanmar", "Merit-Based", "Technology"]
    },

    // 12. Myanmar Government Scholarship
    {
        id: "myanmar-government",
        name: "Myanmar Government Scholarship",
        organization: "Ministry of Education, Myanmar",
        country: "myanmar",
        flag: "🇲🇲",
        image: "myanmar-gov-scholarship-card.jpg",
        amount: "300,000 MMK",
        amountValue: 150,
        period: "per year",
        description: "Government financial aid for students from low-income families to access higher education at Myanmar public universities with tuition and living support.",
        category: "government",
        degreeLevel: ["bachelor"],
        deadline: "2026-08-15",
        link: "scholarship-post-myanmar-gov.html",
        highlights: [
            "Need-based",
            "Myanmar citizens only",
            "Tuition + stipend",
            "All public universities"
        ],
        tags: ["Local", "Myanmar", "Need-Based", "Government"]
    }
];

// Make it globally accessible
window.scholarshipsData = scholarshipsData;
