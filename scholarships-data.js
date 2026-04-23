// ============================================
// SCHOLARSHIPS DATABASE
// ============================================

const scholarshipsData = [
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
        link: "s.html",
        highlights: [
            "Full tuition coverage",
            "Monthly stipend €1,200-€2,760",
            "Health insurance included",
            "Flight tickets provided"
        ],
        tags: ["International", "Full Funding", "Europe", "Research"]
    }
];

window.scholarshipsData = scholarshipsData;
