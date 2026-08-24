const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");


// ======================================================
// ADD MESSAGE
// ======================================================

function addMessage(message, type) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message");

    if (type === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }

    messageDiv.innerHTML = `<p>${message}</p>`;

    chatBody.appendChild(messageDiv);

    chatBody.scrollTop = chatBody.scrollHeight;
}


// ======================================================
// ADD OPTIONS
// ======================================================

function addOptions(options) {

    const optionsDiv = document.createElement("div");

    optionsDiv.classList.add("quick-replies");

    options.forEach(function(option) {

        const button = document.createElement("button");

        button.classList.add("quick-btn");

        button.textContent = option;

        button.addEventListener("click", function() {

            addMessage(option, "user");

            optionsDiv.remove();

            handleOption(option);

        });

        optionsDiv.appendChild(button);
    });

    chatBody.appendChild(optionsDiv);

    chatBody.scrollTop = chatBody.scrollHeight;
}


// ======================================================
// SEND MESSAGE
// ======================================================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    userInput.value = "";

    answerUserQuestion(message);
}


// ======================================================
// KEYBOARD ENTER
// ======================================================

userInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// ======================================================
// SEND BUTTON
// ======================================================

sendButton.addEventListener("click", sendMessage);


// ======================================================
// INITIAL BUTTONS
// ======================================================

const quickButtons = document.querySelectorAll(".quick-btn");

quickButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedOption = button.textContent.trim();

        addMessage(selectedOption, "user");

        handleOption(selectedOption);

    });

});


// ======================================================
// HANDLE BUTTON OPTIONS
// ======================================================

function handleOption(option) {

    setTimeout(function() {


        // ==================================================
        // WEBSITE
        // ==================================================

        if (
            option === "🌐 Website" ||
            option === "Website"
        ) {

            addMessage(
                "Great! Are you looking for a new website or do you want to improve your existing website?",
                "bot"
            );

            addOptions([
                "New Website",
                "Improve Existing Website"
            ]);
        }


        // ==================================================
        // NEW WEBSITE
        // ==================================================

        else if (option === "New Website") {

            addMessage(
                "Great! What type of business do you have?",
                "bot"
            );

            addOptions([
                "Manufacturing / B2B",
                "Healthcare / Hospital",
                "Education",
                "Restaurant / Wellness",
                "Other"
            ]);
        }


        // ==================================================
        // EXISTING WEBSITE
        // ==================================================

        else if (option === "Improve Existing Website") {

            addMessage(
                "Sure! What would you mainly like to improve on your existing website?",
                "bot"
            );

            addOptions([
                "Design & User Experience",
                "Mobile Responsiveness",
                "Website Speed",
                "SEO & Visibility",
                "Lead Generation"
            ]);
        }


        // ==================================================
        // BUSINESS TYPE
        // ==================================================

        else if (
            option === "Manufacturing / B2B" ||
            option === "Healthcare / Hospital" ||
            option === "Education" ||
            option === "Restaurant / Wellness" ||
            option === "Other"
        ) {

            addMessage(
                "Thanks! What is the main goal you want your new website to achieve?",
                "bot"
            );

            addOptions([
                "Generate More Leads",
                "Build Online Presence",
                "Showcase Products / Services",
                "Get More Enquiries"
            ]);
        }


        // ==================================================
        // WEBSITE GOALS
        // ==================================================

        else if (
            option === "Generate More Leads" ||
            option === "Build Online Presence" ||
            option === "Showcase Products / Services" ||
            option === "Get More Enquiries"
        ) {

            addMessage(
                "Excellent! A well-planned website can help your business attract visitors, communicate your services clearly, and generate enquiries.",
                "bot"
            );

            addAuditOptions();
        }


        // ==================================================
        // EXISTING WEBSITE OPTIONS
        // ==================================================

        else if (
            option === "Design & User Experience" ||
            option === "Mobile Responsiveness" ||
            option === "Website Speed" ||
            option === "SEO & Visibility"
        ) {

            addMessage(
                "Improving this area can create a better website experience and help visitors find and understand your business more easily.",
                "bot"
            );

            addAuditOptions();
        }


        // ==================================================
        // WEBSITE LEAD GENERATION
        // ==================================================

        else if (option === "Lead Generation") {

            addMessage(
                "We can help improve your website's ability to turn visitors into enquiries through better calls-to-action and lead-capture opportunities.",
                "bot"
            );

            addAuditOptions();
        }


        // ==================================================
        // SEO / AEO
        // ==================================================

        else if (
            option === "🔍 SEO / AEO" ||
            option === "SEO / AEO"
        ) {

            addMessage(
                "Great! What would you mainly like to improve?",
                "bot"
            );

            addOptions([
                "Google Search",
                "Local SEO",
                "AI Search / AEO"
            ]);
        }


        // ==================================================
        // GOOGLE SEARCH
        // ==================================================

        else if (option === "Google Search") {

            addMessage(
                "We can help improve your website's traditional SEO so your business can become more visible in Google search.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // LOCAL SEO
        // ==================================================

        else if (option === "Local SEO") {

            addMessage(
                "Local SEO focuses on improving your visibility when potential customers search for businesses and services in their area.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // AI SEARCH
        // ==================================================

        else if (option === "AI Search / AEO") {

            addMessage(
                "AEO, or Answer Engine Optimization, focuses on making your business information easier for AI-powered search and answer systems to understand.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // LEAD GENERATION
        // ==================================================

        else if (
            option === "📈 Lead Generation" ||
            option === "Lead Generation"
        ) {

            addMessage(
                "Great! What is your main lead-generation challenge?",
                "bot"
            );

            addOptions([
                "More Enquiries",
                "Better Conversions",
                "Automate Leads"
            ]);
        }


        // ==================================================
        // MORE ENQUIRIES
        // ==================================================

        else if (option === "More Enquiries") {

            addMessage(
                "We can help create a practical lead-generation system focused on attracting and capturing relevant enquiries.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // BETTER CONVERSIONS
        // ==================================================

        else if (option === "Better Conversions") {

            addMessage(
                "Improving conversions makes it easier for interested visitors to understand your offer and take action.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // AUTOMATE LEADS
        // ==================================================

        else if (option === "Automate Leads") {

            addMessage(
                "Lead automation can help capture enquiries, organize leads, and support follow-ups.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // PAID ADS
        // ==================================================

        else if (
            option === "📢 Paid Ads" ||
            option === "Paid Ads"
        ) {

            addMessage(
                "Great! Which type of paid advertising are you interested in?",
                "bot"
            );

            addOptions([
                "Google Ads",
                "Social Media Ads",
                "Both"
            ]);
        }


        // ==================================================
        // GOOGLE ADS
        // ==================================================

        else if (option === "Google Ads") {

            addMessage(
                "Google Ads can help businesses reach people who are actively searching for relevant products or services.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // SOCIAL MEDIA ADS
        // ==================================================

        else if (option === "Social Media Ads") {

            addMessage(
                "Social media advertising can help businesses reach relevant audiences across social platforms.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // BOTH ADS
        // ==================================================

        else if (option === "Both") {

            addMessage(
                "Using both search and social advertising can provide multiple ways to reach potential customers.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // WHATSAPP / CRM
        // ==================================================

        else if (
            option === "💬 WhatsApp / CRM" ||
            option === "WhatsApp / CRM"
        ) {

            addMessage(
                "Great! What would you like to automate with WhatsApp or CRM?",
                "bot"
            );

            addOptions([
                "WhatsApp Responses",
                "Lead Capture",
                "Notifications",
                "Follow-ups"
            ]);
        }


        // ==================================================
        // WHATSAPP RESPONSES
        // ==================================================

        else if (option === "WhatsApp Responses") {

            addMessage(
                "Automated WhatsApp responses can help your business respond to customer questions quickly and consistently.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // LEAD CAPTURE
        // ==================================================

        else if (option === "Lead Capture") {

            addMessage(
                "Lead capture automation can collect customer enquiries and organize the information for follow-up.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // NOTIFICATIONS
        // ==================================================

        else if (option === "Notifications") {

            addMessage(
                "Automated notifications can keep your team informed about new enquiries, customer actions, and important updates.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // FOLLOW UPS
        // ==================================================

        else if (option === "Follow-ups") {

            addMessage(
                "Automated follow-ups can help businesses stay connected with potential customers and reduce missed opportunities.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // AI SOLUTIONS
        // ==================================================

        else if (
            option === "🤖 AI Solutions" ||
            option === "AI Solutions"
        ) {

            addMessage(
                "Great! What would you like an AI solution to help with?",
                "bot"
            );

            addOptions([
                "Customer Support",
                "Lead Handling",
                "WhatsApp Automation",
                "Business Automation"
            ]);
        }


        // ==================================================
        // CUSTOMER SUPPORT
        // ==================================================

        else if (option === "Customer Support") {

            addMessage(
                "AI-powered customer support can help businesses answer common questions and provide assistance around the clock.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // LEAD HANDLING
        // ==================================================

        else if (option === "Lead Handling") {

            addMessage(
                "AI can help qualify leads, collect important information, and support your team during the lead-handling process.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // WHATSAPP AUTOMATION
        // ==================================================

        else if (option === "WhatsApp Automation") {

            addMessage(
                "AI-powered WhatsApp automation can help businesses handle customer conversations, enquiries, and follow-ups more efficiently.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // BUSINESS AUTOMATION
        // ==================================================

        else if (option === "Business Automation") {

            addMessage(
                "AI business automation can reduce repetitive work and help streamline customer and lead-related processes.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // BRANDING
        // ==================================================

        else if (
            option === "🎨 Branding" ||
            option === "Branding"
        ) {

            addMessage(
                "Great! What are you looking for?",
                "bot"
            );

            addOptions([
                "Brand Identity",
                "Brand Strategy",
                "Improve Existing Brand"
            ]);
        }


        // ==================================================
        // BRAND IDENTITY
        // ==================================================

        else if (option === "Brand Identity") {

            addMessage(
                "A strong brand identity helps your business create a professional and memorable impression through consistent visuals, messaging, and positioning.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // BRAND STRATEGY
        // ==================================================

        else if (option === "Brand Strategy") {

            addMessage(
                "A clear brand strategy helps define your positioning, target audience, messaging, and overall direction.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // IMPROVE BRAND
        // ==================================================

        else if (option === "Improve Existing Brand") {

            addMessage(
                "We can help strengthen your existing brand by improving its visual identity, messaging, consistency, and digital presence.",
                "bot"
            );

            addActionOptions();
        }


        // ==================================================
        // FREE AUDIT
        // ==================================================

        else if (
            option === "🆓 Free Website Audit" ||
            option === "Free Website Audit" ||
            option === "Yes, Start Free Audit"
        ) {

            addMessage(
                "Great! Let's get started with your Free Website Audit.",
                "bot"
            );

            addMessage(
                "Please enter your website URL below.",
                "bot"
            );

            userInput.focus();
        }


        // ==================================================
        // TALK TO TEAM
        // ==================================================

        else if (
            option === "👤 Talk to Team" ||
            option === "Talk to Team" ||
            option === "Talk to Our Team"
        ) {

            addMessage(
                "Absolutely! I'd be happy to connect you with the Promotionz.AI team.",
                "bot"
            );

            addMessage(
                "Please share your name, business name, email, phone number, and briefly describe your requirement.",
                "bot"
            );

            userInput.focus();
        }

    }, 500);
}


// ======================================================
// ACTION OPTIONS
// ======================================================

function addActionOptions() {

    addOptions([
        "Free Website Audit",
        "Talk to Our Team"
    ]);
}


// ======================================================
// AUDIT OPTIONS
// ======================================================

function addAuditOptions() {

    addMessage(
        "Would you like to start with our Free Website Audit?",
        "bot"
    );

    addOptions([
        "Yes, Start Free Audit",
        "Talk to Our Team"
    ]);
}


// ======================================================
// TYPED QUESTION / KNOWLEDGE BASE
// ======================================================

// ======================================================
// TYPED QUESTION / KNOWLEDGE BASE
// ======================================================

const knowledgeBase = [

    // ==================================================
    // GENERAL
    // ==================================================

    {
        keywords: [
            "what is promotionz",
            "what is promotionz ai",
            "what does promotionz do",
            "what do you do",
            "what services do you provide",
            "services",
            "how can you help my business",
            "how can you help",
            "what can you help with"
        ],

        answer:
            "Promotionz.AI helps businesses grow through digital solutions such as website development, SEO/AEO, lead generation, paid advertising, WhatsApp/CRM automation, AI solutions, and branding."
    },


    // ==================================================
    // WEBSITE
    // ==================================================

    {
        keywords: [
            "website",
            "web site",
            "web development",
            "web design",
            "build a website",
            "create a website",
            "new website",
            "website development",
            "need a website"
        ],

        answer:
            "Yes! Promotionz.AI provides professional website development and website improvement services. We can help with design, user experience, mobile responsiveness, website speed, SEO, and lead generation.",

        options: [
            "New Website",
            "Improve Existing Website",
            "Free Website Audit"
        ]
    },


    // ==================================================
    // NEW WEBSITE
    // ==================================================

    {
        keywords: [
            "new website",
            "build new website",
            "create new website",
            "website from scratch",
            "i need a new website",
            "want a new website"
        ],

        answer:
            "Absolutely! We can build a professional website based on your business, services, target customers, and goals.",

        options: [
            "Manufacturing / B2B",
            "Healthcare / Hospital",
            "Education",
            "Restaurant / Wellness",
            "Other"
        ]
    },


    // ==================================================
    // EXISTING WEBSITE
    // ==================================================

    {
        keywords: [
            "improve website",
            "improve my website",
            "existing website",
            "redesign website",
            "website redesign",
            "fix my website",
            "update my website",
            "website improvement"
        ],

        answer:
            "Sure! We can improve your existing website by focusing on design, user experience, mobile responsiveness, speed, SEO, and lead generation.",

        options: [
            "Design & User Experience",
            "Mobile Responsiveness",
            "Website Speed",
            "SEO & Visibility",
            "Lead Generation"
        ]
    },


    // ==================================================
    // SEO
    // ==================================================

    {
        keywords: [
            "seo",
            "search engine optimization",
            "search engine",
            "google ranking",
            "rank on google",
            "google visibility",
            "website ranking",
            "improve google ranking",
            "appear on google",
            "search visibility"
        ],

        answer:
            "Yes! Promotionz.AI provides SEO services to improve your website's visibility in search engines and help potential customers discover your business.",

        options: [
            "Google Search",
            "Local SEO",
            "AI Search / AEO"
        ]
    },


    // ==================================================
    // LOCAL SEO
    // ==================================================

    {
        keywords: [
            "local seo",
            "local search",
            "local ranking",
            "rank locally",
            "near me search",
            "google maps",
            "local business visibility"
        ],

        answer:
            "Local SEO helps your business become more visible when people search for products or services in their local area.",

        options: [
            "Free Website Audit",
            "Talk to Our Team"
        ]
    },


    // ==================================================
    // AEO
    // ==================================================

    {
        keywords: [
            "aeo",
            "answer engine optimization",
            "answer engine",
            "ai search",
            "ai search optimization",
            "appear in ai search",
            "chatgpt search",
            "ai visibility"
        ],

        answer:
            "AEO stands for Answer Engine Optimization. It focuses on making your business information easier for AI-powered search and answer systems to understand and surface.",

        options: [
            "Free Website Audit",
            "Talk to Our Team"
        ]
    },


    // ==================================================
    // LEAD GENERATION
    // ==================================================

    {
        keywords: [
            "lead generation",
            "generate leads",
            "get more leads",
            "more leads",
            "generate customers",
            "get customers",
            "customer enquiries",
            "more enquiries",
            "business leads"
        ],

        answer:
            "Promotionz.AI can help businesses attract, capture, organize, and follow up with potential customers through digital lead-generation solutions.",

        options: [
            "More Enquiries",
            "Better Conversions",
            "Automate Leads"
        ]
    },


    // ==================================================
    // PAID ADS
    // ==================================================

    {
        keywords: [
            "paid ads",
            "paid advertising",
            "online advertising",
            "digital advertising",
            "google ads",
            "facebook ads",
            "social media ads",
            "advertising campaign",
            "run ads"
        ],

        answer:
            "Yes! Paid advertising can help businesses reach relevant audiences and generate traffic, enquiries, and potential customers.",

        options: [
            "Google Ads",
            "Social Media Ads",
            "Both"
        ]
    },


    // ==================================================
    // GOOGLE ADS
    // ==================================================

    {
        keywords: [
            "google ads",
            "advertise on google",
            "google advertising",
            "search ads",
            "ppc",
            "pay per click"
        ],

        answer:
            "Google Ads can help your business reach people who are actively searching for relevant products or services.",

        options: [
            "Free Website Audit",
            "Talk to Our Team"
        ]
    },


    // ==================================================
    // SOCIAL MEDIA ADS
    // ==================================================

    {
        keywords: [
            "social media ads",
            "facebook advertising",
            "instagram advertising",
            "instagram ads",
            "facebook ads",
            "social advertising"
        ],

        answer:
            "Social media advertising can help businesses reach relevant audiences across social platforms and generate awareness, traffic, and enquiries.",

        options: [
            "Free Website Audit",
            "Talk to Our Team"
        ]
    },


    // ==================================================
    // WHATSAPP / CRM
    // ==================================================

    {
        keywords: [
            "whatsapp",
            "whatsapp automation",
            "crm",
            "customer relationship management",
            "automate whatsapp",
            "whatsapp business",
            "crm automation"
        ],

        answer:
            "Promotionz.AI can help automate WhatsApp and CRM-related processes such as customer responses, lead capture, notifications, and follow-ups.",

        options: [
            "WhatsApp Responses",
            "Lead Capture",
            "Notifications",
            "Follow-ups"
        ]
    },


    // ==================================================
    // AI SOLUTIONS
    // ==================================================

    {
        keywords: [
            "ai solution",
            "ai solutions",
            "artificial intelligence",
            "ai automation",
            "ai for business",
            "business automation",
            "automate my business",
            "ai chatbot"
        ],

        answer:
            "Promotionz.AI can provide AI-based solutions for customer support, lead handling, WhatsApp automation, and business process automation.",

        options: [
            "Customer Support",
            "Lead Handling",
            "WhatsApp Automation",
            "Business Automation"
        ]
    },


    // ==================================================
    // BRANDING
    // ==================================================

    {
        keywords: [
            "branding",
            "brand identity",
            "brand strategy",
            "build my brand",
            "improve my brand",
            "business branding",
            "brand design"
        ],

        answer:
            "Promotionz.AI can help with brand identity, brand strategy, and improving an existing brand's digital presence and consistency.",

        options: [
            "Brand Identity",
            "Brand Strategy",
            "Improve Existing Brand"
        ]
    },


    // ==================================================
    // FREE WEBSITE AUDIT
    // ==================================================

    {
        keywords: [
            "website audit",
            "free audit",
            "free website audit",
            "check my website",
            "analyze my website",
            "website analysis",
            "check website",
            "audit my website"
        ],

        answer:
            "Sure! You can start with our Free Website Audit. Please provide your website URL to get started."
    }
];


// ======================================================
// NORMALIZE TEXT
// ======================================================

function normalizeText(text) {

    return text
        .toLowerCase()
        .replace(/[^\w\s]/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
}


// ======================================================
// FIND BEST KNOWLEDGE BASE MATCH
// ======================================================

// ======================================================
// SMART FAQ MATCHING
// ======================================================

function findBestMatch(userText) {

    const text = normalizeText(userText);

    // Convert user's question into individual words
    const userWords = text.split(" ");

    let bestMatch = null;
    let highestScore = 0;

    knowledgeBase.forEach(function(item) {

        let score = 0;

        item.keywords.forEach(function(keyword) {

            const normalizedKeyword = normalizeText(keyword);

            // --------------------------------------------------
            // 1. Exact phrase match
            // --------------------------------------------------

            if (text.includes(normalizedKeyword)) {

                // Give higher score to longer phrases
                const phraseWords = normalizedKeyword.split(" ").length;

                score += phraseWords * 5;
            }


            // --------------------------------------------------
            // 2. Individual word matching
            // --------------------------------------------------

            const keywordWords = normalizedKeyword.split(" ");

            keywordWords.forEach(function(keywordWord) {

                // Ignore very small/common words
                if (keywordWord.length < 3) {
                    return;
                }

                if (userWords.includes(keywordWord)) {

                    score += 2;
                }

            });

        });


        // --------------------------------------------------
        // 3. Keep highest scoring FAQ
        // --------------------------------------------------

        if (score > highestScore) {

            highestScore = score;
            bestMatch = item;

        }

    });


    // ------------------------------------------------------
    // Minimum confidence
    // ------------------------------------------------------

    // If the match is too weak, don't give a random answer.

    if (highestScore < 2) {

        return null;

    }

    return bestMatch;
}

// ======================================================
// ANSWER TYPED QUESTION
// ======================================================

function answerUserQuestion(message) {

    const text = normalizeText(message);

    setTimeout(function() {

        // ==================================================
        // HELLO
        // ==================================================

        if (
            text === "hi" ||
            text === "hello" ||
            text === "hey" ||
            text.includes("good morning") ||
            text.includes("good afternoon") ||
            text.includes("good evening")
        ) {

            addMessage(
                "Hi! 👋 Welcome to Promotionz.AI. How can I help you today?",
                "bot"
            );

            addOptions([
                "🌐 Website",
                "🔍 SEO / AEO",
                "📈 Lead Generation",
                "📢 Paid Ads",
                "💬 WhatsApp / CRM",
                "🤖 AI Solutions",
                "🎨 Branding",
                "🆓 Free Website Audit",
                "👤 Talk to Team"
            ]);

            return;
        }


        // ==================================================
        // THANK YOU
        // ==================================================

        if (
            text.includes("thank you") ||
            text === "thanks" ||
            text.includes("thank")
        ) {

            addMessage(
                "You're very welcome! 😊 I'm here if you need any help with Promotionz.AI services.",
                "bot"
            );

            return;
        }


        // ==================================================
        // SEARCH KNOWLEDGE BASE
        // ==================================================

        const match = findBestMatch(text);


        // ==================================================
        // MATCH FOUND
        // ==================================================

        if (match) {

            addMessage(match.answer, "bot");

            if (match.options) {

                addOptions(match.options);

            }

            return;
        }


        // ==================================================
        // FALLBACK
        // ==================================================

        addMessage(
            "I'm not completely sure about that. You can choose one of the options below or talk to our team.",
            "bot"
        );

        addOptions([
            "🌐 Website",
            "🔍 SEO / AEO",
            "📈 Lead Generation",
            "📢 Paid Ads",
            "💬 WhatsApp / CRM",
            "🤖 AI Solutions",
            "🎨 Branding",
            "🆓 Free Website Audit",
            "👤 Talk to Team"
        ]);

    }, 500);
}