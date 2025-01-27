
import { MetadataRoute } from "next";
   
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages = [
        {
            url: "https://www.axiomtestprep.com",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1
        },
        {
            url: "https://www.axiomtestprep.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://www.axiomtestprep.com/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://www.axiomtestprep.com/tutoring",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        },
        {
            url: "https://www.axiomtestprep.com/exams",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9
        }
        // other pages
    ];

    return defaultPages;
};