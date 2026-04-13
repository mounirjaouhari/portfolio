const translations = {
    fr: {
        location: "Casablanca, Maroc",
        
        download_cv: "Télécharger mon CV (PDF)",
        cv_link: "cv_mounir_jaouhari.pdf",

        welcome_title: "BIENVENUE SUR MON PORTFOLIO",
        welcome_desc: "Bonjour ! Je suis Mounir, passionné par la modélisation mathématique et l'ingénierie des données. Sur cette page, vous découvrirez mon parcours hybride, mêlant recherche scientifique rigoureuse et développement de solutions industrielles robustes.",

        profile_title: "PROFIL PROFESSIONNEL",
        profile_desc: "Ingénieur de Données & Chercheur (Doctorant) fusionnant la Rigueur Mathématique (Science des Données) et l'Excellence Opérationnelle (Ingénierie des Données). Je conçois des architectures de données robustes, transformant des modèles théoriques complexes en flux de données industriels fiables et performants.",
        
        exp_title: "EXPÉRIENCE PROFESSIONNELLE",
        job1_title: "Ingénieur de Données - Projet VertiFlow",
        job1_date: "Déc. 2025 – Fév. 2026",
        job1_desc: `<li>Architecture d’un système distribué (Apache NiFi → Kafka → ClickHouse) pour l’ingestion massive de flux IoT hétérogènes.</li>
                    <li>Déploiement opérationnel de modèles prédictifs (RandomForest, XGBoost) et d’un assistant IA générative (API Agri-Copilot) pour l’agriculture de précision.</li>
                    <li>Mise en œuvre d’une gouvernance stricte des données garantissant une intégrité de 99,98%.</li>
                    <li><strong>Environnement Technique :</strong> Python, Apache NiFi, Kafka, ClickHouse, Docker, GCP, FastAPI, Streamlit. <a href="https://github.com/mounirjaouhari/Vertiflow" target="_blank" class="code-link">[Code Source]</a></li>`,
        job2_title: "Doctorant-Chercheur en Mathématiques Appliquées",
        job2_date: "Déc. 2020 – À ce jour",
        job2_desc: `<li>Modélisation avancée de systèmes complexes (Équations aux Dérivées Partielles) et simulation numérique (Méthode des Éléments Finis - FEM) via Python (NumPy, SciPy, Pandas).</li>
                    <li>Développement d’algorithmes d’optimisation et production de publications scientifiques.</li>`,
        job3_title: "Enseignant & Consultant Pédagogique",
        job3_desc: `<li><strong>ENS Casablanca (2025-26):</strong> Enseignement en Modélisation Stochastique & Analyse Statistique.</li>
                    <li><strong>Ministère Éduc. Nationale (2016-24):</strong> Professeur de Mathématiques.</li>
                    <li><strong>Consultant Indépendant (2022-23):</strong> Ingénierie de cursus e-Learning gamifiés sur plateformes LMS.</li>`,

        edu_title: "FORMATION ACADÉMIQUE",
        edu1_title: "Certification Ingénierie des Données (Data Engineering)",
        edu1_desc: "Architecture Big Data, DataOps, Traitement en Flux (Streaming), ML/DL, Cloud (AWS, Azure, GCP).",
        edu2_title: "Doctorat en Mathématiques Appliquées",
        edu2_date: "2020 – À ce jour",
        edu2_desc: "Sujet : Modélisation de la propagation d'ondes (Analyse Numérique, Simulation FEM).",
        edu3_title: "Master Mathématiques et Applications",
        edu3_desc: "Analyse Numérique, Probabilités-Statistiques, Algorithmique Avancée.",

        skills_title: "COMPÉTENCES TECHNIQUES",
        skills_desc: `<li><strong>Ingénierie des Données :</strong> SQL, Apache NiFi, Kafka, ClickHouse, Docker, Airflow, Spark.</li>
                      <li><strong>Cloud Computing :</strong> AWS, GCP, Azure.</li>
                      <li><strong>Science des Données :</strong> Python (Pandas, NumPy, Scikit-learn, PyTorch), R, NLP.</li>
                      <li><strong>Outils & Méthodes :</strong> Git/GitHub, Jira, LaTeX, Linux.</li>
                      <li><strong>Langues :</strong> Français (Excellent), Anglais (Professionnel), Arabe (Natif).</li>`,

        cert_title: "CERTIFICATIONS & DISTINCTIONS",
        cert_desc: `<li>Microsoft Innovative Educator Expert (2023-2026)</li>
                    <li>AWS Academy Data Engineering | GCP Data Engineering</li>
                    <li>Azure ML Pipelines (Coursera) | Hugging Face Fine-tuning LLM</li>
                    <li>DataOps Developer (DataOps.live) | Advanced SQL (HackerRank) | Spark Fundamentals (IBM)</li>`,
        pub_title: "PUBLICATIONS SCIENTIFIQUES",
        
        footer_text: "© 2026 Mounir JAOUHARI. Tous droits réservés."
    },
    en: {
        location: "Casablanca, Morocco",
        
        download_cv: "Download my CV (PDF)",
        cv_link: "cv_mounir_jaouhari_english.pdf",

        welcome_title: "WELCOME TO MY PORTFOLIO",
        welcome_desc: "Hello! I am Mounir, passionate about mathematical modeling and data engineering. On this page, you will discover my dual background combining rigorous scientific research and the development of robust industrial solutions.",

        profile_title: "PROFESSIONAL PROFILE",
        profile_desc: "Data Engineer & Ph.D. Candidate combining Mathematical Rigor (Data Science) and Technical Pragmatism (Data Engineering). I develop complete value chains, transforming theoretical models into operational and reliable data pipelines.",
        
        exp_title: "PROFESSIONAL EXPERIENCE",
        job1_title: "Data Engineer - VertiFlow Project",
        job1_date: "Dec. 2025 – Feb. 2026",
        job1_desc: `<li>Designed a distributed data architecture (Apache NiFi → Kafka → ClickHouse) for heterogeneous IoT data ingestion.</li>
                    <li>Deployed predictive models (RandomForest, XGBoost) and a RAG assistant (Agri-Copilot API) for precision agriculture.</li>
                    <li>Implemented strict governance (JSON Schema Validation, DLQ) ensuring 99.98% data integrity.</li>
                    <li><strong>Stack :</strong> Python, Apache NiFi, Kafka, ClickHouse, Docker, GCP, FastAPI, Streamlit. <a href="https://github.com/mounirjaouhari/Vertiflow" target="_blank" class="code-link">[Source Code]</a></li>`,
        job2_title: "Ph.D. Researcher in Applied Mathematics",
        job2_date: "Dec. 2020 – Present",
        job2_desc: `<li>Modeling of complex systems (PDE) and numerical simulation (FEM) in Python (NumPy, SciPy, Pandas).</li>
                    <li>Designed optimization algorithms and authored scientific publications.</li>`,
        job3_title: "Adjunct Professor & Pedagogical Consultant",
        job3_desc: `<li><strong>ENS Casablanca (2025-26):</strong> Teaching Stochastic Modeling & Statistical Analysis.</li>
                    <li><strong>Ministry of National Education (2016-24):</strong> Mathematics Professor (8 years).</li>
                    <li><strong>Consultant (2022-23):</strong> Designed gamified e-Learning curricula (LMS) and technical documentation.</li>`,

        edu_title: "EDUCATION",
        edu1_title: "Data Engineering Certification",
        edu1_desc: "Data Engineering, DataOps, Streaming, ML/DL, Cloud (AWS, Azure, GCP).",
        edu2_title: "Ph.D. in Applied Mathematics",
        edu2_date: "2020 – Present",
        edu2_desc: "Subject: Wave Propagation Modeling (Numerical Analysis, FEM Simulation).",
        edu3_title: "Master in Mathematics and Applications",
        edu3_desc: "Numerical Analysis, Probability-Statistics, Algorithms.",

        skills_title: "TECHNICAL SKILLS",
        skills_desc: `<li><strong>Data Engineering :</strong> SQL, NiFi, Kafka, ClickHouse, Docker, Airflow, Spark.</li>
                      <li><strong>Cloud :</strong> AWS, GCP, Azure.</li>
                      <li><strong>Data Science :</strong> Python (Pandas, NumPy, Scikit-learn, PyTorch), R, NLP.</li>
                      <li><strong>Tools :</strong> Git/GitHub, Jira, LaTeX, Linux.</li>
                      <li><strong>Languages :</strong> French (Full Professional), English (Professional), Arabic (Native).</li>`,

        cert_title: "CERTIFICATIONS & AWARDS",
        cert_desc: `<li>Microsoft Innovative Educator Expert (2023-2026)</li>
                    <li>AWS Data Eng. | GCP Data Eng. | Azure ML | Hugging Face LLM</li>
                    <li>DataOps Developer | Advanced SQL | Spark Fundamentals | Agile</li>`,
        pub_title: "SCIENTIFIC PUBLICATIONS",
        
        footer_text: "© 2026 Mounir JAOUHARI. All rights reserved."
    }
};

const btnFr = document.getElementById("btn-fr");
const btnEn = document.getElementById("btn-en");
const htmlTag = document.getElementById("html-tag");
const cvLink = document.getElementById("download-cv");
const themeToggle = document.getElementById("theme-toggle");

// DARK MODE LOGIC
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// TRANSLATION LOGIC
function switchLang(lang) {
    htmlTag.lang = lang;
    
    // Update texts
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update HTML content
    document.querySelectorAll("[data-i18n-html]").forEach(element => {
        const key = element.getAttribute("data-i18n-html");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update Download Link
    if (cvLink) {
        cvLink.href = translations[lang]["cv_link"];
    }

    // Update buttons UI
    if (lang === 'fr') {
        btnFr.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        btnEn.classList.add('active');
        btnFr.classList.remove('active');
    }
}

btnFr.addEventListener("click", () => switchLang('fr'));
btnEn.addEventListener("click", () => switchLang('en'));


// --- SCROLL ANIMATIONS ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section, header').forEach(el => {
    el.classList.add('animate-section');
    observer.observe(el);
});

// --- DATA NETWORK ANIMATION (CANVAS) ---
// Symbolise les flux de données (Data Engineering) et les graphes (Mathématiques)
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height, particles;

function initCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];
    // Densité ajustée pour ne pas surcharger
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 100); 
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1.5
        });
    }
}

function drawNetwork() {
    ctx.clearRect(0, 0, width, height);
    
    const isDark = document.body.classList.contains('dark-mode');
    const color = isDark ? 'rgba(77, 163, 255,' : 'rgba(0, 86, 179,';
    
    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Rebondir sur les bords
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        // Dessiner le point (nœud de donnée)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color + ' 0.6)';
        ctx.fill();
        
        // Dessiner les connexions (graphe, flux de données)
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            
            if (dist < 130) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = color + ` ${1 - dist/130})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    });
    
    requestAnimationFrame(drawNetwork);
}

// Relancer l'animation si la fenêtre change de taille
window.addEventListener('resize', initCanvas);

// Démarrer
initCanvas();
drawNetwork();
