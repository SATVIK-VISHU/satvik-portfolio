'use client'
import { useState, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
    id: number;
    icon: string;
    name: string;
    description: string;
    techs: string[];
    github?: string;
    live?: string;
}

interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    badge: "internship";
}

// ─── Data — edit this section ────────────────────────────────────────────────


const PROJECTS: Project[] = [
    {
        id: 1,
        icon: "🎥",
        name: "Ytscraper",
        description:
            "Developed a timestamp-level semantic search engine over 126 DSA lectures, enabling students to ask questions in Hinglish or English and jump directly to the relevant moment in a video. Built an end-to-end RAG pipeline with Faster-Whisper, Qdrant, and Groq.",
        techs: [
            "Python",
            "FastAPI",
            "Qdrant",
            "Faster-Whisper",
            "Groq API",
            "RAG",
        ],
        github: "https://github.com/SATVIK-VISHU/ytscraper",
        live: "https://github.com/SATVIK-VISHU/ytscraper",
    },
    {
        id: 2,
        icon: "📄",
        name: "Resume Analyzer",
        description:
            "Built a full-stack application where recruiters upload a resume and job description to receive a match score, matching and missing skills, and a hiring verdict. Integrated Groq LLM-based extraction with Pydantic validation and deterministic Python scoring.",
        techs: [
            "React.js",
            "Tailwind CSS",
            "Python",
            "FastAPI",
            "Groq",
            "Pydantic",
        ],
        github: "https://github.com/SATVIK-VISHU/Resume_Analyser",
        live: "https://resume-analyser-1-axrf.onrender.com/",
    },
    {
        id: 3,
        icon: "🏡",
        name: "WanderLust",
        description:
            "Developed a full-stack property rental platform where users can list properties with images and map locations, browse stays, and post reviews. Implemented authentication, owner-only listing modifications, review permissions, and cascading deletion.",
        techs: [
            "JavaScript",
            "MongoDB",
            "Express.js",
            "Node.js",
            "Passport.js",
            "Cloudinary",
            "Mapbox",
        ],
        github: "https://github.com/SATVIK-VISHU/WanderLust",
        live: "https://wanderlust-6892.onrender.com/",
    },
];


const EXPERIENCE: Experience[] = [
    {
        company: "Xelron AI",
        role: "SDE Intern",
        period: "Feb 2026 – May 2026",
        location: "Remote",
        badge: "internship",
    },
];


// ─── Sub-components ──────────────────────────────────────────────────────────

function TitleBar({ onClose }: { onClose?: () => void }) {
    const [dotsHovered, setDotsHovered] = useState(false);

    return (
        <div
            className="
            window-handle cursor-grab active:cursor-grabbing
            h-10
            flex
            items-center
            px-4
            relative
            border-b
            border-white/[0.07]
            bg-[#2a2a2c]
            "
            onMouseEnter={() => setDotsHovered(true)}
            onMouseLeave={() => setDotsHovered(false)}
        >
            <div className="flex gap-[7px]">
                <button
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-[#FF5F57] flex items-center justify-center transition-all hover:brightness-110 active:brightness-75"
                    title="Close"
                >
                    {dotsHovered && (
                        <svg viewBox="0 0 6 6" fill="none" className="w-[7px] h-[7px]">
                            <path d="M1 1l4 4M5 1L1 5" stroke="#7a1f1f" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
                <button className="w-3 h-3 rounded-full bg-[#FEBC2E]" title="Minimize" />
                <button className="w-3 h-3 rounded-full bg-[#28C840]" title="Maximize" />
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 text-[12px] font-medium text-white/50 pointer-events-none tracking-wide flex items-center gap-1.5">
                <span className="text-[10px]">📁</span> satvik.dev
            </span>
        </div>
    );
}

function SectionHead({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-[12px] text-white/50 mb-2.5 ml-1" style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>
            {children}
        </h2>
    );
}

// ─── Project List (Stacked Vertically) ───────────────────────────────────────

function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <div className="flex flex-col gap-3 mb-6">
            {projects.map((project) => {
                const projectUrl = project.live || project.github;
                return (
                    <div
                        key={project.id}
                        className="relative group bg-white/[0.03] border border-white/[0.05] rounded-[12px] p-4 overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.12] transition-all cursor-pointer"
                        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.18), 0 8px 30px rgba(0,0,0,.2)" }}
                    >
                        {/* Stretched clickable link covering the whole project card */}
                        {projectUrl && (
                            <a
                                href={projectUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-[12px]"
                                aria-label={`Open ${project.name}`}
                            />
                        )}

                        {/* Top row */}
                        <div className="flex items-start justify-between mb-3">
                            {/* App icon style */}
                            <div className="w-[42px] h-[42px] rounded-[10px] bg-white/[0.08] border border-white/10 group-hover:border-white/20 flex items-center justify-center text-xl shrink-0 shadow-sm overflow-hidden transition-colors">
                                {project.icon.startsWith('/') ? (
                                    <img src={project.icon} alt={project.name} className="w-full h-full object-cover" />
                                ) : (
                                    project.icon
                                )}
                            </div>
                            <div className="flex gap-1.5 relative z-20">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="relative z-20 text-[11px] font-medium flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#28C840]/10 border border-[#28C840]/20 text-[#28C840] group-hover:bg-[#28C840]/20 group-hover:border-[#28C840]/40 group-hover:shadow-[0_0_12px_rgba(40,200,64,0.4)] transition-all"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] shadow-[0_0_6px_#28C840] animate-pulse"></span>
                                        Live
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-[11px] font-medium flex items-center gap-1 px-2.5 py-1 rounded-[6px] bg-white/[0.08] border border-white/[0.05] text-white/70 hover:bg-white/[0.15] hover:text-white transition-all shadow-sm"
                                    >
                                        <span className="text-[10px] opacity-70">⌘</span> GitHub
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Name & desc */}
                        <div className="flex items-center gap-1.5 mb-1">
                            <h3 className="text-[14px] text-white/90 group-hover:text-white transition-colors" style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>
                                {project.name}
                            </h3>
                            <svg
                                className="w-3.5 h-3.5 text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                        <p className="text-[13px] text-white/50 leading-relaxed mb-3.5 group-hover:text-white/60 transition-colors" style={{ fontWeight: 450 }}>
                            {project.description}
                        </p>

                        {/* Tech pills - macOS subtle style */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.techs.map((t) => (
                                <span
                                    key={t}
                                    className="text-[10px] font-medium px-2 py-0.5 rounded-[5px] bg-white/[0.05] border border-white/[0.03] text-white/50 group-hover:border-white/[0.08] transition-colors"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExpCard({ exp }: { exp: Experience }) {
    return (
        <div className="bg-white/[0.03] border border-white/[0.05] rounded-[12px] px-4 py-3.5 mb-2.5 hover:bg-white/[0.06] transition-colors flex items-center gap-4" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.18), 0 8px 30px rgba(0,0,0,.2)" }}>
            <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center shrink-0">
                💼
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-0.5">
                    <span className="text-[14px] text-white/90 truncate" style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>{exp.company}</span>
                    <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10 ml-2 shrink-0">
                        Internship
                    </span>
                </div>
                <p className="text-[13px] text-white/60" style={{ fontWeight: 450 }}>{exp.role}</p>
                <div className="flex gap-3 mt-1 text-[11px] text-white/40">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                </div>
            </div>
        </div>
    );
}

// ─── Root component ───────────────────────────────────────────────────────────

export default function Portfolio({ onClose, onOpenChat }: { onClose?: () => void, onOpenChat?: () => void }) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            let h = now.getHours();
            const m = now.getMinutes();
            const ampm = h >= 12 ? "PM" : "AM";
            h = h % 12 || 12;
            setTime(`${h}:${m.toString().padStart(2, "0")} ${ampm}`);
        };
        tick();
        const id = setInterval(tick, 5000);
        return () => clearInterval(id);
    }, []);


    return (
        <div
            className="
                relative
                flex flex-col
                w-full md:w-[800px]
                h-[calc(100dvh-140px)] md:h-[83vh]
                md:my-6
                overflow-hidden
                md:rounded-xl
                text-white
                antialiased
                shadow-2xl
                md:border md:border-white/10
                bg-[#1c1c1e]
            "
            style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
            }}
        >
            <div className="hidden md:block">
                <TitleBar onClose={onClose} />
            </div>

            {/* Scrollable content */}
            <div
                className="flex-1 min-h-0 bg-[#1a1a1c] px-4 sm:px-6 md:px-8 py-5 sm:py-7 overflow-y-auto overscroll-y-contain touch-pan-y pb-28 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30"
            >
                {/* ── Hero (macOS Profile Style) ── */}
                <section id="hero" className="flex items-center gap-5 mb-6">
                    <div
                        className="
                            w-16
                            h-16
                            rounded-full
                            border
                            border-white/10
                            backdrop-blur-xl
                            bg-white/[0.07]
                            "
                        style={{
                            boxShadow:
                                "inset 0 1px 0 rgba(255,255,255,.18), 0 8px 30px rgba(0,0,0,.2)"
                        }}
                    >
                        <img src="/images/dp.jpeg" alt="Avatar" className="w-full h-full rounded-full object-cover shrink-0" />
                    </div>
                    <div>
                        <h1 className="text-[22px] text-white/90 leading-tight" style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>
                            Satvik Srivastava
                        </h1>
                        <p className="text-[13px] text-white/50 mt-1" style={{ fontWeight: 450 }}>
                            Software Engineer · Full Stack Developer
                        </p>
                    </div>
                </section>

                {/* Tags (macOS rounded pills) */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {["Software Engineer", "C++", "React.js", "Node.js", "Express.js", "MongoDB"].map(
                        (tag, i) => (
                            <span
                                key={tag}
                                className={`text-[11px] font-medium flex items-center gap-1.5 px-3 py-1 rounded-full border ${i === 0
                                    ? "bg-[#0A84FF]/15 text-[#0A84FF] border-[#0A84FF]/30 shadow-[0_0_10px_rgba(10,132,255,0.25)]"
                                    : "bg-white/[0.05] text-white/70 border-white/[0.05] shadow-sm"
                                    }`}
                            >
                                {tag}
                            </span>
                        )
                    )}
                </div>

                {/* Bio */}
                <p className="text-[13px] text-white/60 leading-relaxed mb-5" style={{ fontWeight: 450 }}>
                    Software Engineer with a B.Tech in Electronics and Communication Engineering from IIIT Kota. Experienced in building full-stack applications and AI-powered solutions using React, Node.js, Python, FastAPI, and MongoDB. Worked on LLM-based applications, RAG pipelines, and backend systems. Strong problem-solving skills with 1600+ DSA problems solved across competitive programming platforms.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                    <a
                        href="https://github.com/SATVIK-VISHU"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[12px] font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.05] text-white/80 hover:bg-white/[0.1] hover:text-white transition-all shadow-sm"
                    >
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/satvik-srivastava-719a49312"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[12px] font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.05] text-white/80 hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/30 hover:text-[#0A84FF] transition-all shadow-sm"
                    >
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        LinkedIn
                    </a>
                </div>

                {/* ── Experience ── */}
                <section id="experience" className="mb-8">
                    <SectionHead>Experience</SectionHead>
                    {EXPERIENCE.map((exp) => (
                        <ExpCard key={exp.company} exp={exp} />
                    ))}
                </section>

                {/* ── Projects ── */}
                <section id="projects" className="mb-2">
                    <SectionHead>Projects</SectionHead>
                    <ProjectList projects={PROJECTS} />
                </section>
            </div>

            {/* Ask Me Floating Button */}
            <div className="absolute bottom-4 right-4 left-auto z-50 flex flex-col items-center md:bottom-8 md:left-1/2 md:right-auto md:-translate-x-1/2">
                <button
                    onClick={onOpenChat}
                    className="
                        flex items-center gap-2 
                        px-6 py-3
                        rounded-full 
                        bg-white/[0.1] hover:bg-white/[0.15] 
                        border border-white/10 
                        backdrop-blur-md 
                        transition-all 
                        active:scale-95
                    "
                    style={{
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,.15), 0 8px 24px rgba(0,0,0,.4)"
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FEBC2E" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.7034 6.73972C10.5945 6.4454 10.3138 6.25 10 6.25C9.68617 6.25 9.40552 6.4454 9.29661 6.73972L8.78076 8.13378C8.08054 10.0261 7.79598 10.7489 7.27245 11.2725C6.74893 11.796 6.02612 12.0805 4.13378 12.7808L2.73972 13.2966C2.4454 13.4055 2.25 13.6862 2.25 14C2.25 14.3138 2.4454 14.5945 2.73972 14.7034L4.13378 15.2192C6.02612 15.9195 6.74893 16.204 7.27245 16.7275C7.79598 17.2511 8.08054 17.9739 8.78077 19.8662L9.29661 21.2603C9.40552 21.5546 9.68617 21.75 10 21.75C10.3138 21.75 10.5945 21.5546 10.7034 21.2603L11.2192 19.8662C11.9195 17.9739 12.204 17.2511 12.7275 16.7275C13.2511 16.204 13.9739 15.9195 15.8662 15.2192L17.2603 14.7034C17.5546 14.5945 17.75 14.3138 17.75 14C17.75 13.6862 17.5546 13.4055 17.2603 13.2966L15.8662 12.7808C13.9739 12.0805 13.2511 11.796 12.7275 11.2725C12.204 10.7489 11.9195 10.0261 11.2192 8.13378L10.7034 6.73972ZM18.7034 2.73972C18.5945 2.4454 18.3138 2.25 18 2.25C17.6862 2.25 17.4055 2.4454 17.2966 2.73972L17.0755 3.33717C16.7618 4.18495 16.6705 4.38548 16.528 4.528C16.3855 4.67053 16.1849 4.76183 15.3372 5.07553L14.7397 5.29661C14.4454 5.40552 14.25 5.68617 14.25 6C14.25 6.31383 14.4454 6.59448 14.7397 6.70339L15.3372 6.92447C16.185 7.23817 16.3855 7.32947 16.528 7.472C16.6705 7.61452 16.7618 7.81505 17.0755 8.66282L17.2966 9.26028C17.4055 9.5546 17.6862 9.75 18 9.75C18.3138 9.75 18.5945 9.5546 18.7034 9.26028L18.9245 8.66283C19.2382 7.81505 19.3295 7.61452 19.472 7.47199C19.6145 7.32947 19.8151 7.23817 20.6628 6.92447L21.2603 6.70339C21.5546 6.59448 21.75 6.31383 21.75 6C21.75 5.68617 21.5546 5.40552 21.2603 5.29661L20.6628 5.07553C19.8151 4.76183 19.6145 4.67053 19.472 4.528C19.3295 4.38548 19.2382 4.18495 18.9245 3.33717L18.7034 2.73972Z"></path>
                    </svg>
                    <span className="text-[13px] font-medium text-white/90 tracking-wide" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                        Ask Me
                    </span>
                </button>
            </div>
        </div>
    );
}