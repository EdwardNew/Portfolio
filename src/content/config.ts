// 1. Import utilities and types
import { defineCollection, z } from "astro:content";

// 2. Define the schema for the collection
const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(), // The title of the project
        image: z.string(), // The URL for the image
        technologies: z.array(z.string()), // A list of technologies used
        description: z.string(), // A short description of the project
        seeMoreLink: z.string().optional(), // Link to see more about the project
        viewSiteLink: z.string().url().optional(), // Link to view the live site
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    projects: projectCollection,
};
