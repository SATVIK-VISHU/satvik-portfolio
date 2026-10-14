# Satvik Srivastava — Personal Portfolio

A macOS-inspired interactive portfolio built with Next.js, React, and Tailwind CSS. It showcases my projects, technical skills, professional experience, and achievements through a desktop-style interface.

## Live Portfolio

Coming soon — deployment on Vercel.

## Features

- **Interactive Desktop UI:** macOS-inspired desktop with draggable icons and windows.
- **Portfolio:** Overview of my education, experience, skills, and projects.
- **AI Portfolio Assistant:** Chat with an AI assistant powered by the Groq API to learn about my background and work.
- **Terminal:** Explore my technical skills through a terminal-style interface.
- **Resume:** View and access my resume.
- **Contact:** Find my GitHub, LinkedIn, and LeetCode profiles.
- **Responsive Design:** Dedicated mobile portfolio view.

## Projects

### 1. Ytscraper
Semantic search across DSA lecture videos with timestamp-level retrieval.

- Technologies: Python, FastAPI, Qdrant, Faster-Whisper, Groq API.
- [GitHub Repository](https://github.com/SATVIK-VISHU/ytscraper)

### 2. Resume Analyzer
An AI-powered resume analysis application that evaluates a resume against a job description.

- Technologies: React, Tailwind CSS, Python, FastAPI, Groq, Pydantic.
- [GitHub Repository](https://github.com/SATVIK-VISHU/Resume_Analyser)
- [Live Demo](https://resume-analyser-1-axrf.onrender.com/)

### 3. WanderLust
A full-stack property rental platform with listings, reviews, authentication, and location-based features.

- Technologies: JavaScript, Node.js, Express.js, MongoDB, Passport.js.
- [GitHub Repository](https://github.com/SATVIK-VISHU/WanderLust)
- [Live Demo](https://wanderlust-6892.onrender.com/)

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js, FastAPI
- **Database:** MongoDB, MySQL, Qdrant
- **AI Integration:** Groq API, RAG, Whisper
- **Tools:** Git, GitHub, Render, Vercel

## Getting Started

### Prerequisites

- Node.js
- npm
- A Groq API key for the AI chatbot

### Installation

Clone the repository:

```bash
git clone https://github.com/SATVIK-VISHU/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key
```

Replace `your_groq_api_key` with your own Groq API key.

**Important:** Never commit `.env.local` or expose your API key publicly.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Deployment

This portfolio can be deployed using [Vercel](https://vercel.com/).

1. Import the GitHub repository into Vercel.
2. Add `GROQ_API_KEY` under Project Settings → Environment Variables.
3. Deploy the project.
4. Open the deployed URL to view the portfolio.

## Contact

- **Email:** satvikvishu1903@gmail.com
- **GitHub:** [SATVIK-VISHU](https://github.com/SATVIK-VISHU)
- **LinkedIn:** [Satvik Srivastava](https://www.linkedin.com/in/satvik-srivastava-719a49312/)
- **LeetCode:** [Pikachu_040903](https://leetcode.com/u/Pikachu_040903/)

## Credits

The original portfolio template and macOS-inspired interface were created by [Saurabh Kushwaha](https://github.com/saurabhkushwaha438).

This repository is a fork of the original project, customized and extended for my personal portfolio. Credit for the original template and design belongs to its creator.