import { MetadataRoute } from 'next';
import projects from './data/projects';
import { siteUrl } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;

  // Use the newest project date so static pages only change when the portfolio does
  const latestUpdate = new Date(
    projects.reduce((latest, project) => (project.date > latest ? project.date : latest), projects[0].date)
  );

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: latestUpdate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: latestUpdate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
