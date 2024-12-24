---
title: "Stride 2024"
image: "https://stride24.ucsddesign.co/og-image.jpg"
technologies:
    - React
    - TypeScript
    - GSAP
    - Next.js
description: "Stride is Design Co's annual design-focused career fair creating a space for meaningful connections between aspiring designers and industry professionals."
seeMoreLink: "/projects/stride-24"
viewSiteLink: "https://stride24.ucsddesign.co/"
order: 2
organization: "Design Co"
keyResults:
    [
        "Developed a unique digital marketing experience for one of UCSD's largest student-run design career fairs, emphasizing mobile-first UI elements and interactions.",
        "Collaborated with designers to refine the visual identity of the website, pivoting from hyperrealistic assets to bold, outlined visuals, ensuring alignment with Design Co's overall brand identity.",
        "Engineered a complex landing page animation using GSAP, overcoming constraints posed by stacking contexts, to achieve a smooth, engaging, and responsive user experience.",
    ]

role: "Frontend Developer"
timeline: "September 2024 - November 2024"

skills: ["React", "Typescript", "SCSS", "GSAP", "NextJS"]
---

## Design Challenges

The most significant challenge our team faced actually wasn’t technical but rather related to the visual and brand identity of the website. Design Co is known for its clean, sophisticated, and playful brand identity, consistently reflected in its branding guidelines, design systems, graphics, and past websites. However, each new project challenges us to explore fresh visual directions to keep our audience engaged.

For Stride 2024, we embraced the concept of “uncovering the mystery of the job hunt,” drawing inspiration from themes like murder mysteries, detectives, and noir aesthetics. However, our initial mood boards and mockups leaned too far into hyperrealism, evoking a creepy, unsettling vibe—completely at odds with Design Co’s approachable and fun brand identity.

Furthermore, we also wanted to push the boundaries of what a DCo event site meant. We wanted to make this site more interactive and immersive while also taking the user experience into account. More of a personalized experience rather than just an information and registration portal. So we aimed to incorporate several unique interactive elements such as:

-   An engaging landing page animation
-   A flashlight effect using mask animation
-   A playful mascot
-   Customizable attendee passports/badges, inspired by the Next.js Conf 2023 event

## Solutions

After extensive discussion, we pivoted away from hyperrealism, which evoked unintended feelings of danger and creepiness. Shadows and lifelike details were stripped back, replaced by flat illustrations with bold, thick outlines inspired by the pseudo-3d aesthetic of games like Duck Detective. This shift, paired with the introduction of a cute mascot, completed the transformation, bringing back the fun, lighthearted feel that aligns with Design Co’s Design Co’s playful and quirky branding.

Once we established the visual direction, we shifted our focus to features and interactions. Recognizing that most of our users access the site via mobile devices—often through in-app web browsers like Instagram or Discord—we prioritized a mobile-first design. This included replacing the traditional hamburger menu with bottom-screen navigation buttons for mobile screens, ensuring usability and comfort by placing navigation within thumb’s reach (I’m a big proponent of navigation at the bottom of the page for mobile screens - it just makes sense 😌).

## Implementation Challenges

I worked mainly on the homepage and its dynamic landing animation. My familiarity with GSAP made me optimistic about the turnaround but as always, there’s always something to learn on every project.

### Folder Animation

The animation concept involved a folder "flap" opening to reveal hidden elements, which would “fall out” and transition smoothly to their final positions on the screen. Achieving the folder flap’s hover animation was straightforward enough using the perspective property and some simple rotation transforms. The real challenge lay in animating the folder elements’ positions from their initial positions (relative to the folder) to their final positions (relative to the user’s screen) once revealed.

### Iterative Solutions

1. **Positioning Elements Relative to the Folder:** Initially, I positioned the elements relative to the folder’s edges to maintain alignment and avoid bleeding out. However, this made calculating the offsets for their final positions nearly impossible during the folder's movement.
2. **Screen-Centered Approach:** To address this, I repositioned the elements relative to the screen instead. Each element's initial positions were first transformed to the center of the screen and then adjusted relative to it, knowing the folder would always be screen-centered as well. This solution worked seamlessly on desktop layouts, where the design naturally fit a static screen height without scroll, however issues arise when considering mobile layouts with dynamic content heights.
3. **Mobile-Specific Adjustments:** The vertical layout of mobile screens introduced a new issue: the animation had to start with a page height of 100vh and expand to its dynamic final height during the opening animation. Because the elements were positioned absolutely relative to the screen, they didn’t occupy any space on the page. To solve this, I introduced statically positioned "ghost" placeholder elements at their final positions. These placeholders ensured the elements occupied the necessary space on the page, allowing the browser to handle responsiveness across screen sizes. The animation then moved the elements hidden inside the folder to match the positions of their respective placeholders.
4. **Perspectives and Stacking Contexts:** One final hurdle involved the folder's perspective property, which was needed to create the effect of the folder flap opening outwards towards the user. Adding the perspective property to any element creates a new stacking context, making it impossible to position elements between the folder’s front and back layers to achieve the desired sliding-out effect since to position the elements in between the layers of the folder,the elements would have to be in the folder’s stacking context, relative to the folder, taking us back to our very first issue. To overcome this, I created additional placeholder elements with references. Once the elements slid out, they were replaced with exact replicas positioned relative to the page, breaking free from the folder’s stacking context, then animated to their final positions as before.

While this approach felt somewhat brute-force, and quite inelegant, the time constraints and extensive research into stacking contexts confirmed that it was indeed the best option given the inflexibilities of stacking contexts.

## Reflection

Stride 2024 was one of the most creatively challenging projects I’ve worked on, balancing creative ambition with brand identity constraints. Navigating the tension between an ambitious design direction and Design Co’s established aesthetic taught me the importance of adaptability and collaboration in creative problem-solving. On the technical side, implementing the landing page animation pushed my understanding of CSS properties like perspective and stacking contexts, as well as GSAP’s animation capabilities. Resolving issues such as responsive positioning, transitioning elements between stacking contexts, and ensuring a seamless mobile experience required innovative solutions and meticulous attention to detail. It was incredibly rewarding to see our efforts culminate in a product that delighted both the team and our users. It was incredibly rewarding to see our efforts culminate in a product that delighted both the team and our users.
