---
title: "Revision Support"
image: "https://edwardnew.netlify.app/revision-support.png"
technologies:
    - React
    - Tailwind
    - Next.js
    - MongoDB
    - GPT-4
description: "Revision Support is a system developed to help researchers study the
effects of different AI-powered scaffolding techniques applied in an academic peer review context."
seeMoreLink: "/projects/revision-support"
viewSiteLink: "https://revision-support.vercel.app/"
order: 1
organization: "ProtoLab @ UCSD Design Lab"
keyResults: [
  "Developed a full-stack AI-powered peer review tool using GPT-4 for dynamic feedback, with custom annotation, highlighting, and a Tiptap-based editor for to-do lists linked to feedback.",
  "Built secure, self-authentication using Lucia and Oslo, and designed custom MongoDB schemas to handle research-specific data requirements.",
  "Optimized app performance with Next.js server components, integrated OpenReview's API, and collaborated with HCI researchers on system design and user studies."
]


# keyResults:
#     [
#         "Developed a Full-Stack AI-Powered Peer Review Analysis Tool: Designed and built a web application that enables researchers to study AI-assisted scaffolding techniques in peer review contexts, leveraging GPT-4 for dynamic feedback generation and scaffolding aids.",
#         "Innovative Annotation and Note Taking Features: Built custom highlighting and commenting capabilities from scratch. Built a rich-text editor using TipTap to generate filtered to-do lists linked to annotated feedback.",
#         "Custom Authentication and Scalable Data Infrastructure: Designed and implemented a secure, self-built authentication system using lucia-auth and oslo and engineered custom MongoDB schemas tailored to the project's research-specific data requirements.",
#         "Advanced API and Performance Optimization: Developed robust TypeScript CRUD APIs to handle data interactions, utilized OpenReview’s API for programmatic peer review integration, and optimized app performance using Next.js server components and React contexts.",
#         "Collaborative Research Support and Study Execution: Played an integral role in system design and feature prioritization, working closely with HCI researchers and advisors to align the platform with study objectives. Contributed to designing and executing user studies to evaluate system effectiveness."
#     ]

role: "Full Stack Developer & Research Intern"
timeline: "June 2024 - Ongoing"

skills: ["React", "Typescript", "Next.js", "Tailwind","Authentication","TipTap","Rich Text Editors","MongoDB","GPT-4"]
---

## The Challenge (Research)

Academic peer review is a cornerstone of scholarly work, yet researchers often struggle to manage, analyze, and respond to feedback efficiently. With the increasing use of AI in academic contexts, there was an opportunity to explore how AI-powered tools could assist in the peer review process. Specifically, the challenge lay in designing a system that could help users extract actionable insights from reviews, draft rebuttals, and organize feedback into structured to-do lists—all while maintaining trust and usability.

## The Solution

Revision Support was designed to meet these needs by integrating cutting-edge AI features with user-friendly tools. By leveraging GPT-4 for dynamic scaffolding, the platform provided researchers with context-aware suggestions for interpreting reviews and drafting responses. Custom-built rich text editing tools allowed for seamless note-taking and to-do list creation, while advanced annotation features enabled users to highlight and connect feedback directly to their source in peer reviews. The system also incorporated user research and iterative development to align with the needs of academic researchers.

## The Challenge (Technical)

Building the system required overcoming several technical hurdles:

-   **Scalability and Performance**: Designing a full-stack application capable of handling large datasets from academic reviews.
-   **AI Integration**: Incorporating GPT-4 effectively for scaffolding feedback and drafting responses.
-   **Rich Text Editing**: Developing a robust editor to create to-do lists and link annotations to their sources.
-   **Custom Authentication**: Ensuring secure and seamless user authentication.
-   **Database Design**: Crafting flexible MongoDB schemas to handle user-generated data and annotations.
-   **Interoperability**: Using APIs like OpenReview to fetch peer reviews programmatically.

## The Solution

-   Built a full-stack web application using **React**, **Next.js**, and **TypeScript**, optimizing for performance with server-side rendering and React contexts.
-   Integrated **GPT-4** for dynamic scaffolding features, enabling smart prompts and suggestions.
-   Developed a custom **Tiptap-based rich text editor** to manage notes, draft rebuttals, and filter annotations.
-   Created secure, **custom-built authentication** to manage user sessions.
-   Designed efficient **MongoDB schemas** for storing user data, annotations, and to-do lists.
-   Leveraged the **OpenReview API** for seamless programmatic loading of peer reviews and **PDF.js** for annotation capabilities.

## Impact

Revision Support provided a novel way for academic researchers to streamline the peer review process. By combining dynamic AI features with an intuitive interface, the tool enhanced researchers’ ability to analyze feedback, draft responses, and manage tasks. User studies revealed a significant improvement in users’ ability to extract actionable insights from peer reviews, fostering better engagement with the feedback process.

## Reflection

This project was a tremendous learning experience, balancing technical innovation with research-driven design. Collaborating closely with HCI researchers taught me the importance of user feedback in iterative development. On the technical side, the challenges of building a performant, full-stack application with advanced AI features all on my own pushed my skills in frontend development, backend architecture, and overall system design way beyond my imagination. Seeing the tool used in real-world scenarios, aiding researchers in managing complex feedback, was deeply rewarding.
