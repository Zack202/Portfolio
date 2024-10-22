import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    r,
    java,
    c,
    sql,
    flask,
    sbu,
    av,
    movie,
    map,
    doc,
    music,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend & Data Analysis & Machine Learning",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Data Analysis",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    }


];

export const experiences = [
    {
        title: "Bachelor of Science in Computer Science and Applied Mathematics and Statistics",
        company_name: "Stony Brook University",
        icon: sbu,
        iconBg: "#fbc3bc",
        date: "Aug 2020 - May 2024",
        points: [
            "Graduated with a double major in CS and AMS with a specialization in Artificial Intelligence and Data Science.",
            "Relevant coursework includes Full-stack Development, Data Structures, Algorithms, Machine Learning, Computer Networks, Scripting Languages, Stattical Analysis, Numerical Analysis, and more.",
            "Completed honors courses such as Theory of Computation and Advanced Algorithms.",
            "Graduated Magna Cum Laude with a 3.82 GPA and Dean's List recognition for all semesters.",
        ],
    },
    {
        title: "Undergraduate Teaching Assistant",
        company_name: "Stony Brook University",
        icon: sbu,
        iconBg: "#fbc3bc",
        date: "Aug 2022 - Dec 2023",
        points: [
            "Supported over 300 students in advanced probability and statistics courses, ensuring they gained a solid understanding of complex mathematical concepts.",
            "Collaborated closely with professors to align teaching strategies and materials with course objectives, enhancing the learning experience for students.",
            "Facilitated group discussions, review sessions, and one-on-one meetings to reinforce key topics, helping students prepare for exams and improve their academic performance.",
            "Played an integral role in grading assignments and exams, ensuring fairness and consistency while providing constructive feedback to help students improve",
        ],
    },
    {
        title: "Audio Visual Technician",
        company_name: "Hart to Hart Entertainment",
        icon: av,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Collaborated with a small team to efficiently set up audio, video, and lighting equipment for various events, ensuring that all technical aspects were prepared well before the start time.",
            "Demonstrated strong problem-solving skills by quickly identifying and resolving technical issues under pressure, allowing events to proceed smoothly without disruption.",
            "Proactively maintained and organized equipment, ensuring optimal functionality and a tidy workspace, which contributed to a more efficient workflow and minimized delays during events.",
            "Assisted in the execution of live events by monitoring equipment performance, adjusting settings as needed, and providing real-time technical support to ensure high-quality production standards.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Zack202',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/zachary-lowinger',
    }
];

export const projects = [
    {
        iconUrl: movie,
        theme: 'btn-back-pink',
        name: 'Movie Recomender Platform (MoTVies)',
        description: 'Developed a full-stack application that recommends movies to users based on their preferences, viewing history, and streaming services. Created own recommendation algorithm using collaborative and content based filtering. (Currently in development)',
        link: 'https://github.com/Zack202/Portfolio',
    },
    {
        iconUrl: map,
        theme: 'btn-back-blue',
        name: 'Full Stack Map Editor (My Map Styler)',
        description: 'Collaboratively designed and built a full stack application as part of a team, allowing users to edit, customize, and share maps. Contributed to features enabling users to create and customize maps with different colors, icons, and text.',
        link: 'https://github.com/Zack202/MyMapStylerFrontend',
        link2: 'https://github.com/Zack202/MyMapStylerBackend'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Microcenter Price Tracker',
        description: 'Developed an application that tracks various products, helping users find the best deals. This was made possible in a Jupyter notebook using the BeautifulSoup library in python to scrape data from Micro Center\'s website.',
        link: 'https://github.com/Zack202/Product-Tracker',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-black',
        name: 'AI Portfolio',
        description: 'Developed a portfolio of Artificial Intelligence (AI) systems, including various optimal searching stratagies, double traveling salesmen solving, optimal connect 4 solving, constraint satisfaction solving, and creating neural networks.',
        link: 'https://github.com/Zack202/AI-Portfolio',
    },
    {
        iconUrl: doc,
        theme: 'btn-back-yellow',
        name: 'NLP Systems Portfolio',
        description: 'Developed a portfolio of Natural Language Processing (NLP) systems, including a named entity recognition extraction, textual sentiment analyzer, and a semantical similarity analyzer.',
        link: 'https://github.com/Zack202/NLP-Systems',
    },
    {
        iconUrl: music,
        theme: 'btn-back-green',
        name: 'Full Stack Spotify Clone (Playlister)',
        description: 'Created a full-stack replica of the popular music platform "Spotify" enabling users to stream music, create playlists, and share songs with friends.',
        link: 'https://github.com/Zack202/Final-Playlister',
    },
];

 export default { skills, experiences, socialLinks, projects };