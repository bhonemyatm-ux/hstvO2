/* ==============================================
   career-journey.js — Career Journey Page v3.0
   Apple-premium upgrade — all original features preserved
   ============================================== */

/* =====================
   1) Career Advice Data
   ===================== */
const careerAdvice = {
    g10: {
        grade: "Grade 10",
        title: "Foundation Building 🏗️",
        subtitle: "Build strong academic foundation and discover your interests!",
        sections: [
            {
                title: "📚 Academic Focus",
                advice: [
                    "📖 Focus on core subjects: Math, Science, English, Myanmar language",
                    "🎯 Maintain good grades (aim for 75%+ in all subjects)",
                    "📝 Develop strong note-taking and study habits",
                    "🧮 Build strong foundation in Mathematics (crucial for most careers)",
                    "🔬 Explore science subjects deeply (Physics, Chemistry, Biology)",
                    "💻 Start learning basic computer skills (Microsoft Office, typing)"
                ]
            },
            {
                title: "🎯 Career Exploration",
                advice: [
                    "🤔 Start thinking about what subjects you enjoy most",
                    "💡 Explore different career fields through YouTube, books, articles",
                    "👥 Talk to professionals in different fields (doctors, engineers, teachers)",
                    "🌍 Research universities in Myanmar and abroad",
                    "📊 Take personality/career aptitude tests online",
                    "🎨 Try different activities: coding, art, writing, sports"
                ]
            },
            {
                title: "💪 Skill Development",
                advice: [
                    "🗣️ Improve English language skills (crucial for scholarships!)",
                    "💻 Learn basic coding (Python, Scratch) - free on Khan Academy",
                    "📱 Practice presentation skills in class",
                    "📖 Read books regularly (improves vocabulary and thinking)",
                    "✏️ Start writing essays or blog posts",
                    "🎯 Join school clubs or extracurricular activities"
                ]
            },
            {
                title: "🌟 Myanmar Student Tips",
                advice: [
                    "🇲🇲 Start preparing for matriculation exam early",
                    "📚 Use Myanmar education apps and online resources",
                    "👨‍🏫 Attend tuition classes if needed for weak subjects",
                    "📝 Practice past exam papers",
                    "🎓 Learn about different Myanmar universities and their requirements",
                    "💰 Start thinking about scholarship opportunities"
                ]
            },
            {
                title: "🎯 Action Steps This Year",
                advice: [
                    "✅  Set clear academic goals for each subject",
                    "✅  Create a study schedule and stick to it",
                    "✅  Join at least one extracurricular activity",
                    "✅  Start learning one new skill (coding, design, language)",
                    "✅  Read 5–10 books this year",
                    "✅  Make a list of careers that interest you"
                ]
            }
        ]
    },

    g11: {
        grade: "Grade 11",
        title: "Skill Development ⚡",
        subtitle: "Focus on specialized skills and prepare for university!",
        sections: [
            {
                title: "📚 Academic Excellence",
                advice: [
                    "🎯 Aim for distinction marks (80%+ in all subjects)",
                    "🔬 Focus deeply on science stream OR arts stream (choose wisely!)",
                    "📐 Master difficult concepts in Math, Physics, Chemistry",
                    "🌍 Improve Geography, History knowledge for well-rounded education",
                    "📝 Practice writing long-form essays and reports",
                    "🧪 Do science experiments and projects (for science students)"
                ]
            },
            {
                title: "🎓 University Planning",
                advice: [
                    "📋 Research Myanmar universities: UCS, UIT, MIIT, Tech Uni, etc.",
                    "🌍 Research foreign universities and their admission requirements",
                    "💰 Start learning about scholarships (ASEAN, Chevening, DAAD, etc.)",
                    "📊 Understand university entrance requirements for your dream schools",
                    "🎯 Set target scores for matriculation exam",
                    "📝 Create a list of 5–10 universities you want to apply to"
                ]
            },
            {
                title: "💻 Technical Skills",
                advice: [
                    "💻 Learn programming seriously (Python, JavaScript, Java)",
                    "🎨 Learn design tools if interested (Photoshop, Figma, Canva)",
                    "📊 Learn Microsoft Excel, PowerPoint for presentations",
                    "🌐 Build a simple personal website or portfolio",
                    "📱 Understand how technology and apps work",
                    "🤖 Explore AI, data science basics through online courses"
                ]
            },
            {
                title: "🗣️ Language Skills",
                advice: [
                    "🇬🇧 IELTS preparation starts NOW! (needed for most scholarships)",
                    "📖 Read English news daily (BBC, The Guardian, Al Jazeera)",
                    "🎧 Watch English movies/series with subtitles",
                    "✍️ Write in English every day (journal, blog, social media)",
                    "🗣️ Practice speaking English with friends or online",
                    "📚 Aim for IELTS 6.5+ by end of Grade 12"
                ]
            },
            {
                title: "🌟 Extracurricular Activities",
                advice: [
                    "🏆 Participate in competitions (math olympiad, science fair, debates)",
                    "👥 Join or lead a school club",
                    "🤝 Start volunteering in your community",
                    "🎤 Improve public speaking and presentation skills",
                    "📸 Document your activities for future university applications",
                    "🌍 Participate in online competitions and challenges"
                ]
            },
            {
                title: "💡 Career Clarity",
                advice: [
                    "🎯 Narrow down to 2–3 career paths you're serious about",
                    "👨‍💼 Do internships or job shadowing if possible",
                    "📞 Connect with Myanmar students studying abroad (ask questions!)",
                    "🌐 Join Myanmar student forums and Facebook groups",
                    "📊 Research salary ranges and job demand for your chosen careers",
                    "🎓 Understand what major/degree you need for each career"
                ]
            }
        ]
    },

    g12: {
        grade: "Grade 12",
        title: "University Preparation 🎯",
        subtitle: "Excel in final exams and secure your future!",
        sections: [
            {
                title: "📚 Matriculation Exam Preparation",
                advice: [
                    "🎯 Target: 450+ marks for competitive universities",
                    "📝 Practice past 10 years matriculation papers thoroughly",
                    "🔬 Focus on high-mark subjects: Math, Physics, Chemistry, English",
                    "⏰ Create intensive study schedule (4–6 hours daily)",
                    "📖 Join exam preparation classes if needed",
                    "🧠 Use memorization techniques for Myanmar, Geography, History"
                ]
            },
            {
                title: "🌍 Scholarship Applications",
                advice: [
                    "📋 Apply to 10–15 scholarships (increase your chances!)",
                    "✍️ Start writing scholarship essays NOW (takes time to perfect)",
                    "📄 Prepare required documents: transcripts, recommendations, passport",
                    "📸 Get passport photos, certifications, translations ready",
                    "🎯 Focus on these scholarships: ASEAN, Thailand, Korea, Japan, DAAD",
                    "⏰ Track all scholarship deadlines (don't miss any!)"
                ]
            },
            {
                title: "📝 Essay Writing",
                advice: [
                    "✍️ Write compelling personal statements (tell YOUR story)",
                    "🎯 Explain why you deserve the scholarship clearly",
                    "🌟 Highlight your achievements, challenges overcome, goals",
                    "🇲🇲 Connect your education to Myanmar's development",
                    "📖 Get teachers or mentors to review your essays",
                    "💡 Be authentic — don't copy from the internet!"
                ]
            },
            {
                title: "🗣️ IELTS/TOEFL Preparation",
                advice: [
                    "🎯 Target IELTS 7.0+ for competitive scholarships",
                    "📚 Take official practice tests to know your level",
                    "🗣️ Practice all 4 skills: Reading, Writing, Listening, Speaking",
                    "📅 Book IELTS exam 2–3 months before scholarship deadlines",
                    "💰 IELTS costs 250,000 MMK — prepare money in advance",
                    "📖 Use official IELTS materials (Cambridge books)"
                ]
            },
            {
                title: "🎓 University Applications",
                advice: [
                    "📋 Apply to Myanmar universities as backup (UCS, UIT, MIIT, etc.)",
                    "🌍 Apply to foreign universities even without a scholarship",
                    "📝 Fill application forms carefully (no mistakes!)",
                    "👨‍🏫 Get strong recommendation letters from teachers",
                    "📄 Prepare CV/Resume highlighting achievements",
                    "🎯 Apply to a mix of dream schools and safe schools"
                ]
            },
            {
                title: "💪 Mental Preparation",
                advice: [
                    "🧘 Manage stress — practice meditation, exercise, good sleep",
                    "🎯 Stay focused despite distractions and pressure",
                    "👥 Build support network (friends, family, teachers)",
                    "💭 Visualize success — imagine yourself at your dream university",
                    "📅 Balance exam prep and scholarship applications",
                    "😊 Stay positive even if you face rejections"
                ]
            },
            {
                title: "🚀 Final Checklist",
                advice: [
                    "✅ Ace matriculation exam (450+ marks)",
                    "✅ Submit 10–15 scholarship applications",
                    "✅ Complete IELTS/TOEFL (7.0+ score)",
                    "✅ Get all documents certified and translated",
                    "✅ Have a backup plan (Myanmar university applications)",
                    "✅ Prepare for interviews (practice common questions)"
                ]
            }
        ]
    },

    university: {
        grade: "University",
        title: "Higher Education 🎓",
        subtitle: "Make the most of your university experience!",
        sections: [
            {
                title: "📚 Academic Excellence",
                advice: [
                    "🎯 Maintain high GPA (3.5+ out of 4.0) for future opportunities",
                    "📖 Attend all lectures and participate actively",
                    "👨‍🏫 Build relationships with professors (for recommendations later)",
                    "📝 Submit assignments on time and exceed expectations",
                    "🔬 Participate in research projects and lab work",
                    "📊 Learn to use academic databases and write research papers"
                ]
            },
            {
                title: "💼 Internships & Experience",
                advice: [
                    "💼 Do internships every summer (build real-world experience)",
                    "🏢 Apply to companies in your field (local and international)",
                    "🤝 Network with professionals at events and conferences",
                    "📱 Use LinkedIn to connect with industry professionals",
                    "🎯 Join professional associations related to your field",
                    "💻 Contribute to open-source projects or create a portfolio"
                ]
            },
            {
                title: "🌟 Leadership & Activities",
                advice: [
                    "👥 Join or lead university clubs and organizations",
                    "🎤 Participate in student government or representative roles",
                    "🏆 Compete in hackathons, case competitions, debates",
                    "🤝 Volunteer regularly in community service",
                    "🌍 Join Myanmar student associations (network with compatriots)",
                    "📸 Document your activities for future job applications"
                ]
            },
            {
                title: "💻 Skills Development",
                advice: [
                    "💻 Master technical skills relevant to your field",
                    "📊 Learn data analysis (Excel, Python, R, SQL)",
                    "🎨 Develop creative skills (design, writing, video editing)",
                    "🗣️ Improve public speaking and presentation skills",
                    "📱 Stay updated with industry trends and technologies",
                    "🎓 Take online courses (Coursera, edX, Udemy) to supplement"
                ]
            },
            {
                title: "🎯 Career Planning",
                advice: [
                    "📋 Clarify your career goals by Year 2",
                    "💼 Start applying to internships in Year 1",
                    "📝 Build a strong CV and LinkedIn profile",
                    "🎤 Practice interview skills regularly",
                    "🌐 Research companies you want to work for",
                    "💰 Understand salary expectations for your field"
                ]
            },
            {
                title: "🇲🇲 Myanmar Connection",
                advice: [
                    "🤝 Stay connected with the Myanmar student community",
                    "💡 Think about how to contribute to Myanmar's development",
                    "📚 Keep learning about Myanmar's challenges and opportunities",
                    "🌍 Consider return pathways (work in Myanmar vs. abroad)",
                    "👥 Mentor younger Myanmar students pursuing scholarships",
                    "💼 Network with Myanmar professionals in your field"
                ]
            },
            {
                title: "🚀 Graduate School Preparation",
                advice: [
                    "🎓 Consider Master's or PhD if needed for career goals",
                    "📚 Start researching graduate programs in Year 3",
                    "👨‍🏫 Build strong relationships with professors (for recommendations)",
                    "🔬 Participate in research to prepare for graduate studies",
                    "💰 Look for funded programs (RA/TA positions, scholarships)",
                    "📝 Prepare for GRE/GMAT if required for your field"
                ]
            }
        ]
    },

    graduate: {
        grade: "Graduate",
        title: "Professional Start 👨‍🎓",
        subtitle: "Launch your professional career successfully!",
        sections: [
            {
                title: "💼 Job Search Strategy",
                advice: [
                    "🎯 Start job hunting 6 months before graduation",
                    "📝 Tailor CV and cover letter for each application",
                    "🌐 Use job boards: LinkedIn, Indeed, Glassdoor, local sites",
                    "🤝 Network actively — 70% of jobs are through connections",
                    "📧 Apply to 20–30 positions (increase chances)",
                    "💼 Consider contract/freelance work while searching for permanent role"
                ]
            },
            {
                title: "🎤 Interview Preparation",
                advice: [
                    "🗣️ Practice common interview questions (behavioral, technical)",
                    "🎯 Prepare STAR method answers (Situation, Task, Action, Result)",
                    "👔 Dress professionally and arrive early",
                    "💡 Research the company thoroughly before each interview",
                    "❓ Prepare smart questions to ask the interviewer",
                    "😊 Follow up with a thank-you email within 24 hours"
                ]
            },
            {
                title: "💰 Salary Negotiation",
                advice: [
                    "📊 Research salary ranges for your role and location",
                    "💪 Don't accept the first offer immediately — negotiate!",
                    "🎯 Know your minimum acceptable salary before negotiations",
                    "💼 Consider total package: salary, benefits, growth, work-life balance",
                    "🗣️ Practice negotiation conversations with friends",
                    "📈 Negotiate signing bonus, stock options, flexible work arrangements"
                ]
            },
            {
                title: "🌍 Location Decision",
                advice: [
                    "🇲🇲 Myanmar: Lower salary but close to family, contribute to country",
                    "✈️ Abroad: Higher salary, better opportunities, career growth",
                    "🌏 ASEAN: Good balance — higher salary, closer to Myanmar than West",
                    "💡 Consider 5-year plan: Work abroad 3–5 years, then return?",
                    "🏠 Factor in cost of living when comparing salaries",
                    "👥 Join Myanmar professional networks in your location"
                ]
            },
            {
                title: "📚 Continuous Learning",
                advice: [
                    "🎓 Never stop learning — take courses, certifications",
                    "📖 Read industry publications and stay updated",
                    "🎤 Attend conferences and workshops",
                    "👥 Find a mentor in your field",
                    "💻 Learn new tools and technologies regularly",
                    "📝 Consider professional certifications (PMP, CPA, AWS, etc.)"
                ]
            },
            {
                title: "💪 First Job Success",
                advice: [
                    "🎯 Excel in your first role — it sets the foundation for your career",
                    "👂 Listen more, talk less in the beginning",
                    "🤝 Build good relationships with colleagues",
                    "⏰ Be punctual and reliable",
                    "📈 Seek feedback and implement it",
                    "💡 Volunteer for challenging projects to learn and grow"
                ]
            },
            {
                title: "🚀 Career Growth Plan",
                advice: [
                    "📋 Set 1-year, 3-year, 5-year career goals",
                    "💼 Plan your career progression (IC vs Management track)",
                    "📊 Track your achievements and successes",
                    "🔄 Review and update your goals every 6 months",
                    "💰 Understand typical promotion timelines in your industry",
                    "🎯 Build skills needed for your next career level"
                ]
            }
        ]
    },

    career: {
        grade: "Career Success",
        title: "Professional Growth 💼",
        subtitle: "Build a successful long-term career and make an impact!",
        sections: [
            {
                title: "📈 Career Advancement",
                advice: [
                    "🎯 Aim for promotions every 2–3 years",
                    "💪 Take on leadership roles and responsibilities",
                    "👥 Manage and mentor junior team members",
                    "🚀 Lead high-impact projects successfully",
                    "💼 Consider job changes for significant salary increases",
                    "📊 Track and quantify your achievements (ROI, revenue, savings)"
                ]
            },
            {
                title: "💰 Financial Success",
                advice: [
                    "💵 Maximize your earning potential through skills and performance",
                    "📈 Negotiate salary increases regularly (every 1–2 years)",
                    "💼 Consider switching companies for 20–30% salary jumps",
                    "💰 Diversify income: freelancing, consulting, investments",
                    "🏦 Save and invest wisely (retirement, emergency fund)",
                    "📊 Aim to double your salary every 5–7 years"
                ]
            },
            {
                title: "🌟 Professional Brand",
                advice: [
                    "🌐 Build a strong LinkedIn presence (10,000+ connections)",
                    "✍️ Share knowledge through blog posts, articles, talks",
                    "🎤 Speak at conferences and industry events",
                    "📖 Contribute to industry publications",
                    "👥 Become a known expert in your niche",
                    "🏆 Win industry awards and recognition"
                ]
            },
            {
                title: "🤝 Networking & Relationships",
                advice: [
                    "👥 Build a network of 500+ professionals in your industry",
                    "🌍 Attend conferences, meetups, networking events regularly",
                    "💼 Join professional associations and groups",
                    "🤝 Help others — give value without expecting return",
                    "📱 Stay in touch with former colleagues and classmates",
                    "👨‍🏫 Find and maintain relationships with mentors"
                ]
            },
            {
                title: "🎯 Work-Life Balance",
                advice: [
                    "⚖️ Set boundaries between work and personal life",
                    "🏋️ Prioritize health: exercise, sleep, nutrition",
                    "👨‍👩‍👧 Spend quality time with family and friends",
                    "🎨 Pursue hobbies and interests outside work",
                    "🧘 Practice stress management and mindfulness",
                    "✈️ Take regular vacations to recharge"
                ]
            },
            {
                title: "🇲🇲 Giving Back to Myanmar",
                advice: [
                    "💡 Share your knowledge with Myanmar students (mentoring)",
                    "🎓 Support education initiatives in Myanmar",
                    "💼 Create job opportunities for Myanmar people",
                    "🤝 Invest in Myanmar businesses or startups",
                    "👥 Join Myanmar professional networks globally",
                    "🌍 Consider returning to Myanmar to contribute directly"
                ]
            },
            {
                title: "🚀 Long-term Success",
                advice: [
                    "🎯 Define what success means to YOU (not others)",
                    "💼 Consider entrepreneurship or consulting in later career",
                    "📚 Keep learning — technology and industries change fast",
                    "👥 Build a legacy — mentor the next generation of professionals",
                    "🌍 Create positive impact beyond just your job",
                    "😊 Find fulfillment and purpose in your work"
                ]
            }
        ]
    }
};

/* =====================
   2) Utilities
   ===================== */
function normalizeRole(s) {
    return (s || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function rand(min, max) { return Math.random() * (max - min) + min; }
function pick(arr)      { return arr[Math.floor(Math.random() * arr.length)]; }

function splitIconAndText(line) {
    const t = (line || "").trim();
    const i = t.indexOf(" ");
    if (i === -1) return { icon: "✨", text: t };
    return { icon: t.slice(0, i).trim() || "✨", text: t.slice(i + 1).trim() };
}

/* =====================
   3) Toast notification
   ===================== */
function showToast(msg) {
    const existing = document.getElementById("cjToast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "cjToast";
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: rgba(14,16,32,.95);
        color: #fff;
        padding: .8rem 1.6rem;
        border-radius: 999px;
        font-size: .9rem;
        font-weight: 600;
        font-family: inherit;
        border: 1px solid rgba(102,126,234,.35);
        box-shadow: 0 8px 32px rgba(0,0,0,.40);
        z-index: 9999;
        opacity: 0;
        transition: opacity .28s ease, transform .28s ease;
        max-width: 90vw;
        text-align: center;
        white-space: nowrap;
        backdrop-filter: blur(16px);
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
    });

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(10px)";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

/* =====================
   4) Hamburger menu
   ===================== */
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks  = document.getElementById("navLinks");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");
        hamburger.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
});

/* =====================
   5) Accessible modal (focus trap + Esc + return focus)
   ===================== */
(function modalSetup() {
    const modal               = document.getElementById("adviceModal");
    if (!modal) return;

    const content             = modal.querySelector(".modal-content");
    const closeBtn            = modal.querySelector("[data-close]");
    const modalGrade          = document.getElementById("modalGrade");
    const modalTitle          = document.getElementById("modalTitle");
    const modalSubtitle       = document.getElementById("modalSubtitle");
    const modalAdviceContent  = document.getElementById("modalAdviceContent");

    let lastActive = null;

    function getFocusable(container) {
        return [...container.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )].filter(function (el) {
            return !el.hasAttribute("disabled") && el.offsetParent !== null;
        });
    }

    function renderAdvice(level) {
        const data = careerAdvice[level];
        if (!data) return;

        modalGrade.textContent    = data.grade;
        modalTitle.textContent    = data.title;
        modalSubtitle.textContent = data.subtitle;

        let html = "";
        data.sections.forEach(function (section) {
            html += `<div class="advice-section"><h3>${section.title}</h3><ul class="advice-list">`;
            section.advice.forEach(function (item) {
                const { icon, text } = splitIconAndText(item);
                html += `<li><span class="advice-icon">${icon}</span>${text}</li>`;
            });
            html += `</ul></div>`;
        });

        modalAdviceContent.innerHTML = html;
    }

    function openAdvice(level, triggerEl) {
        if (!careerAdvice[level]) return;

        lastActive = triggerEl || document.activeElement;
        renderAdvice(level);

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        requestAnimationFrame(function () {
            const focusables = getFocusable(modal);
            (focusables[0] || content).focus();
        });
    }

    function closeAdvice() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (lastActive) { lastActive.focus(); lastActive = null; }
    }

    document.querySelectorAll(".level-node[data-advice]").forEach(function (btn) {
        btn.addEventListener("click", function () { openAdvice(btn.dataset.advice, btn); });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeAdvice);

    modal.addEventListener("click", function (e) {
        if (e.target === modal || e.target.classList.contains("modal-backdrop")) closeAdvice();
    });

    document.addEventListener("keydown", function (e) {
        if (!modal.classList.contains("active")) return;

        if (e.key === "Escape") {
            e.preventDefault();
            closeAdvice();
            return;
        }

        if (e.key === "Tab") {
            const focusables = getFocusable(modal);
            if (!focusables.length) return;
            const first = focusables[0];
            const last  = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault(); last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); first.focus();
            }
        }
    });

    window.openAdvice  = function (level) { openAdvice(level, document.activeElement); };
    window.closeAdvice = closeAdvice;
})();

/* =====================
   6) Scroll entrance animation (IntersectionObserver)
   ===================== */
(function nodeEntrance() {
    const nodes = [...document.querySelectorAll(".level-node")];
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
        nodes.forEach(n => { n.style.opacity = "1"; n.style.transform = "none"; });
        return;
    }

    const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    nodes.forEach(function (node, i) {
        node.style.animationDelay = `${i * 0.1}s`;
        io.observe(node);
    });
})();

/* =====================
   7) Glow on scroll (rAF throttled)
   ===================== */
(function glowOnScroll() {
    const nodes = [...document.querySelectorAll(".level-node")];
    if (!nodes.length) return;

    let ticking = false;

    function update() {
        ticking = false;
        const h = window.innerHeight;
        nodes.forEach(function (node) {
            const rect = node.getBoundingClientRect();
            node.classList.toggle("glowing", rect.top < h * 0.78 && rect.bottom > h * 0.22);
        });
    }

    window.addEventListener("scroll", function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    }, { passive: true });

    update();
})();

/* =====================
   8) Role picker + floating cards
   ===================== */
(function rolePicker() {
    const roleForm      = document.getElementById("roleForm");
    const roleInput     = document.getElementById("roleInput");
    const roleEmojiEl   = document.getElementById("roleEmoji");
    const roleTextEl    = document.getElementById("roleText");
    const clearRoleBtn  = document.getElementById("clearRoleBtn");
    const floatingLayer = document.getElementById("floatingCardsLayer");

    if (!roleForm || !roleInput || !roleEmojiEl || !roleTextEl) return;

    const DEFAULT_ROLE_EMOJI = "✨";

   const ROLE_EMOJI_MAP = {
    doctor: "🩺",
    engineer: "🔧",
    "software engineer": "💻",
    programmer: "🧑‍💻",
    developer: "🧑‍💻",
    teacher: "👨‍🏫",
    lawyer: "⚖️",
    accountant: "🧾",
    designer: "🎨",
    architect: "🏗️",
    farmer: "🧑‍🌾",
    scientist: "🔬",
    pilot: "🧑‍✈️",
    chef: "👨‍🍳",
    police: "👮",
    soldier: "🪖",
    journalist: "📰",
    economics: "💹",
    economist: "💹"
};


    function roleToEmoji(roleText) {
        const key = normalizeRole(roleText);
        if (!key) return DEFAULT_ROLE_EMOJI;
        return ROLE_EMOJI_MAP[key] || DEFAULT_ROLE_EMOJI;
    }

    function renderRole(roleText) {
        const clean = (roleText || "").trim();
        roleEmojiEl.textContent = roleToEmoji(clean);
        roleTextEl.textContent  = clean || "Not set yet";
    }

    function saveRole(roleText) {
        try { localStorage.setItem("hst_role_goal", roleText); } catch (_) {}
    }

    function loadRole() {
        try { return localStorage.getItem("hst_role_goal") || ""; } catch (_) { return ""; }
    }

    function loadUniversityExport() {
        try {
            const raw = localStorage.getItem("hst_universities_export_v1");
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed.items) ? parsed.items : [];
        } catch (_) { return []; }
    }

    function scoreUniversity(u) {
        const marks = Number.isFinite(u.minMarks) ? u.minMarks : 0;
        const text  = `${u.name} ${u.major} ${u.type}`.toLowerCase();
        const bonus =
            (text.includes("university of medicine")                  ? 40 : 0) +
            (text.includes("information technology")                   ? 35 : 0) +
            (text.includes("technological")                            ? 20 : 0) +
            (text.includes("technology")                               ? 15 : 0) +
            (text.includes("computer studies")                         ? 25 : 0) +
            (text.includes("institute of information technology")      ? 25 : 0);
        return marks + bonus;
    }

    const ROLE_RULES = {
        doctor:    function (u) { return (u.type || "").includes("medical") || (u.major || "").includes("medicine") || (u.major || "").includes("medical"); },
        nurse:     function (u) { return (u.type || "").includes("nursing") || (u.name || "").toLowerCase().includes("nursing"); },
        engineer:  function (u) { return (u.major || "").includes("engineering") || (u.type || "").includes("engineering") || (u.type || "").includes("technology"); },
        programmer:function (u) { return (u.major || "").includes("computer") || (u.major || "").includes("computer-science") || (u.type || "").includes("technology"); },
        teacher:   function (u) { return (u.major || "").includes("education") || (u.name || "").toLowerCase().includes("education"); },
        lawyer:    function (u) { return (u.major || "").includes("law") || (u.type || "").includes("law"); },
        economist: function (u) { return (u.major || "").includes("economics") || (u.type || "").includes("economics"); },
        pilot:     function (u) { return (u.major || "").includes("aerospace") || (u.name || "").toLowerCase().includes("aerospace") || (u.type || "").includes("maritime"); },
        soldier:   function (u) { return (u.type || "").includes("military") || (u.major || "").includes("defense") || (u.name || "").toLowerCase().includes("defence"); }
    };

    const ROLE_ALIASES = {
        "software engineer": "programmer",
        developer:           "programmer",
        coder:               "programmer",
        medical:             "doctor",
        medic:               "doctor",
        economics:           "economist"
    };

    function resolveRole(roleText) {
        const k = normalizeRole(roleText);
        if (!k) return null;
        return ROLE_RULES[k] ? k : (ROLE_ALIASES[k] || null);
    }

    function pickTopUniversitiesForRole(roleKey, all) {
        const rule = ROLE_RULES[roleKey];
        if (!rule) return [];

        const matches = all.filter(rule);
        matches.sort(function (a, b) { return scoreUniversity(b) - scoreUniversity(a); });

        const top = matches.slice(0, 10);
        for (let i = top.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [top[i], top[j]] = [top[j], top[i]];
        }
        return top.slice(0, 6);
    }

    function spawnCards(cardsData) {
        if (!floatingLayer || prefersReducedMotion()) return;
        if (floatingLayer.childElementCount > 10) return;

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        cardsData.forEach(function (item, i) {
            const card = document.createElement("div");
            card.className = "floating-card";
            card.innerHTML = `<div class="title">${item.title}</div><div class="meta">${item.meta}</div>`;

            const x     = rand(20, Math.max(40, vw - 280));
            const y     = rand(vh * 0.55, vh - 80);
            const r     = rand(-8, 8);
            const dur   = rand(4.8, 6.8);
            const drift = rand(-120, 140);

            card.style.setProperty("--x",     `${x}px`);
            card.style.setProperty("--y",     `${y}px`);
            card.style.setProperty("--r",     `${r}deg`);
            card.style.setProperty("--dur",   `${dur}s`);
            card.style.setProperty("--drift", `${drift}px`);
            card.style.animationDelay = `${(i * 0.13) + rand(0, 0.35)}s`;

            floatingLayer.appendChild(card);
            window.setTimeout(function () { card.remove(); }, Math.ceil((dur + 1) * 1000));
        });
    }

    function spawnUniversityFloatingCards(roleText) {
        const roleKey = resolveRole(roleText);
        if (!roleKey) return;

        const allUnis = loadUniversityExport();
        if (!allUnis.length) return;

        const chosen = pickTopUniversitiesForRole(roleKey, allUnis);
        if (!chosen.length) return;

        const emoji = roleToEmoji(roleText);
        spawnCards(chosen.map(function (u) {
            const marksText = Number.isFinite(u.minMarks) ? `⭐ Min. Marks: ${u.minMarks}` : "⭐ Featured";
            return {
                title: `${emoji} ${u.name}`,
                meta:  `📍 ${u.location || u.region || ""}<br/>${marksText}`
            };
        }));
    }

    const SOFT_SKILL_CARDS = [
        { icon: "💛", title: "Kindness",        text: "Help others, build trust." },
        { icon: "🤝", title: "Teamwork",         text: "Learn to collaborate." },
        { icon: "🧠", title: "Curiosity",        text: "Ask questions, explore." },
        { icon: "🔥", title: "Discipline",       text: "Small habits, big results." },
        { icon: "🎯", title: "Focus",            text: "One task at a time." },
        { icon: "🌱", title: "Growth mindset",   text: "Improve every day." },
        { icon: "🗣️", title: "Communication",    text: "Explain clearly, listen well." },
        { icon: "⏳", title: "Patience",         text: "Progress takes time." }
    ];

    function spawnSoftSkillCards(keyword) {
        const items = [];
        for (let i = 0; i < 6; i++) {
            const item = pick(SOFT_SKILL_CARDS);
            items.push({
                title: `${item.icon} ${item.title}`,
                meta:  `${item.text}${keyword ? `<br/>✨ You typed: ${keyword}` : ""}`
            });
        }
        spawnCards(items);
    }

    const ROMANTIC_EASTER = [
        { icon: "💖", title: "A special message", text: "You're my favorite person." },
        { icon: "🌸", title: "Soft moment",        text: "Thank you for being in my life." },
        { icon: "💌", title: "Small promise",      text: "I'll always cheer for you." },
        { icon: "✨", title: "Cute reminder",      text: "You're doing great—keep going." },
        { icon: "🥰", title: "Sweet",              text: "Today is better because of you." }
    ];

    function isRomanticEasterEgg(input) {
        const t = (input || "").trim().toLowerCase();
        if (!t) return false;
        return t.includes("wanna be your") ||
               t.includes("hnin nwe aye's") ||
               t.includes("hnin nwe aye") ||
               t.includes("hnin nway aye");
    }

    function spawnRomanticCards(keyword) {
        const items = [];
        for (let i = 0; i < 7; i++) {
            const item = pick(ROMANTIC_EASTER);
            items.push({
                title: `${item.icon} ${item.title}`,
                meta:  `${item.text}${keyword ? `<br/>💗 ${keyword}` : ""}`
            });
        }
        spawnCards(items);
    }

    function handleRoleSubmit(val) {
        renderRole(val);
        saveRole(val);

        if (!val.trim()) return;

        if (isRomanticEasterEgg(val)) {
            spawnRomanticCards(val);
            showToast("💖 A sweet message just for you!");
            return;
        }

        const roleKey = resolveRole(val);
        if (roleKey) {
            spawnUniversityFloatingCards(val);
            showToast(`${roleToEmoji(val)} Goal set — university cards loading…`);
        } else {
            spawnSoftSkillCards(val);
            showToast("✨ Goal set! Soft skill tips are on their way.");
        }
    }

    roleInput.addEventListener("input", function () {
        renderRole(roleInput.value);
    });

    roleForm.addEventListener("submit", function (e) {
        e.preventDefault();
        handleRoleSubmit(roleInput.value.trim());
    });

    roleInput.addEventListener("change", function () {
        const val = roleInput.value.trim();
        if (!val) return;
        handleRoleSubmit(val);
    });

    if (clearRoleBtn) {
        clearRoleBtn.addEventListener("click", function () {
            roleInput.value = "";
            renderRole("");
            try { localStorage.removeItem("hst_role_goal"); } catch (_) {}
            roleInput.focus();
            showToast("🗑 Career goal cleared.");
        });
    }

    const saved = loadRole();
    roleInput.value = saved;
    renderRole(saved);
})();

/* =====================
   9) Progress Tracker
   ===================== */
(function progressTracker() {
    const STORAGE_KEY = "hst_career_progress";

    function loadProgress() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
        catch (_) { return []; }
    }

    function saveProgress(arr) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); } catch (_) {}
    }

    function applyProgress(completed) {
        document.querySelectorAll(".level-node-wrap").forEach(function (wrap) {
            const key  = wrap.dataset.key;
            const done = completed.includes(key);
            wrap.classList.toggle("completed", done);
            const btn = wrap.querySelector(".node-complete-btn");
            if (btn) {
                const label = btn.querySelector(".ncb-label");
                if (label) label.textContent = done ? "Completed" : "Mark complete";
                btn.setAttribute("aria-pressed", String(done));
            }
        });
    }

    let completed = loadProgress();
    applyProgress(completed);

    document.querySelectorAll(".node-complete-btn").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const key  = btn.dataset.complete;
            if (!key) return;

            const idx = completed.indexOf(key);
            if (idx === -1) {
                completed.push(key);
                showToast("✅ Milestone marked as complete!");
            } else {
                completed.splice(idx, 1);
                showToast("↩ Milestone unmarked.");
            }

            saveProgress(completed);
            applyProgress(completed);
        });
    });
})();

/* =====================
   10) Ambassador Space Modal
   ===================== */
(function ambassadorSpace() {

    /* ── Valid Ambassador IDs ──
       Add or change IDs here.
       IDs are case-insensitive and trimmed before checking.
    ──────────────────────────── */
    const VALID_IDS = [
        "HST-AMB-001",
        "HST-AMB-002",
        "HST-AMB-003",
        "HSTAMB2026",
        "AMBASSADOR"
    ];

    const REDIRECT_URL = "ambassadorspace.html";
    const REDIRECT_DELAY_MS = 2200;

    /* — Elements — */
    const openBtn     = document.getElementById("openAmbassadorBtn");
    const modal       = document.getElementById("ambModal");
    const sheet       = modal ? modal.querySelector(".amb-modal-sheet") : null;
    const backdrop    = modal ? modal.querySelector(".amb-modal-backdrop") : null;
    const cancelBtn   = document.getElementById("ambCancelBtn");
    const confirmBtn  = document.getElementById("ambConfirmBtn");
    const backBtn     = document.getElementById("ambBackBtn");
    const step1       = document.getElementById("ambStep1");
    const step2       = document.getElementById("ambStep2");
    const step3       = document.getElementById("ambStep3");
    const ambForm     = document.getElementById("ambForm");
    const idInput     = document.getElementById("ambIdInput");
    const inputWrap   = document.getElementById("ambInputWrap");
    const errorMsg    = document.getElementById("ambErrorMsg");
    const errorText   = document.getElementById("ambErrorText");
    const barFill     = document.getElementById("ambSuccessBarFill");

    if (!openBtn || !modal || !sheet) return;

    let lastFocus = null;

    /* — Helpers — */
    function showStep(stepEl) {
        [step1, step2, step3].forEach(function (s) { if (s) s.hidden = true; });
        if (stepEl) stepEl.hidden = false;
    }

    function openModal() {
        lastFocus = document.activeElement;
        showStep(step1);
        clearError();
        if (idInput) idInput.value = "";

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        requestAnimationFrame(function () {
            (cancelBtn || sheet).focus();
        });
    }

    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (lastFocus) { lastFocus.focus(); lastFocus = null; }
    }

    function clearError() {
        if (inputWrap) inputWrap.classList.remove("error");
        if (errorMsg)  errorMsg.hidden = true;
    }

    function showError(msg) {
        if (inputWrap) {
            inputWrap.classList.remove("error");
            void inputWrap.offsetWidth;
            inputWrap.classList.add("error");
        }
        if (errorMsg)  { errorMsg.hidden = false; }
        if (errorText) { errorText.textContent = msg || "Invalid ID. Please try again."; }
        if (idInput)   { idInput.focus(); idInput.select(); }
    }

    function verifyId(raw) {
        const id = (raw || "").trim().toUpperCase().replace(/\s+/g, "");
        return VALID_IDS.some(function (v) {
            return v.toUpperCase().replace(/\s+/g, "") === id;
        });
    }

    function runSuccess() {
        clearError();
        showStep(step3);

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                if (barFill) barFill.style.width = "100%";
            });
        });

        setTimeout(function () {
            closeModal();
            window.location.href = REDIRECT_URL;
        }, REDIRECT_DELAY_MS);
    }

    /* — Event Listeners — */
    openBtn.addEventListener("click", openModal);

    if (cancelBtn)  cancelBtn.addEventListener("click",  closeModal);

    if (confirmBtn) confirmBtn.addEventListener("click", function () {
        showStep(step2);
        requestAnimationFrame(function () {
            if (idInput) idInput.focus();
        });
    });

    if (backBtn) backBtn.addEventListener("click", function () {
        clearError();
        showStep(step1);
        requestAnimationFrame(function () { if (cancelBtn) cancelBtn.focus(); });
    });

    if (backdrop) backdrop.addEventListener("click", closeModal);

    if (ambForm) {
        ambForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const val = idInput ? idInput.value : "";

            if (!val.trim()) {
                showError("Please enter your Ambassador ID.");
                return;
            }

            if (verifyId(val)) {
                runSuccess();
            } else {
                showError("Invalid ID — double-check and try again.");
            }
        });
    }

    /* Clear error on typing */
    if (idInput) {
        idInput.addEventListener("input", clearError);
    }

    /* Focus trap + Esc */
    document.addEventListener("keydown", function (e) {
        if (!modal.classList.contains("active")) return;

        if (e.key === "Escape") {
            e.preventDefault();
            closeModal();
            return;
        }

        if (e.key === "Tab") {
            const focusables = [...sheet.querySelectorAll(
                'button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
            )].filter(function (el) { return el.offsetParent !== null; });

            if (!focusables.length) return;
            const first = focusables[0];
            const last  = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault(); last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); first.focus();
            }
        }
    });

    window.openAmbassadorModal  = openModal;
    window.closeAmbassadorModal = closeModal;
})();

console.log("🎮 Career Journey v3.0 Loaded — Apple-premium edition");
console.log("✨ Click each milestone to unlock career advice!");
console.log("🛡️  Ambassador Space ready.");
