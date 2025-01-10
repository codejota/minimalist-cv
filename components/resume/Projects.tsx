import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  url?: string;
  image?: string | React.ReactNode;
  technologies?: string[];
}

interface SocialLink {
  platform: string;
  url: string;
}

interface ProjectsConfig {
  projects?: Project[];
  social?: SocialLink[];
}

interface ProjectsProps {
  config: ProjectsConfig;
}

export default function Projects({ config }: ProjectsProps) {
  return (
    <section className="mb-1 w-full">
      <h2 className="text-2xl font-semibold mb-2">Projetos</h2>
      <style jsx global>{`
        @media print {
          .hide-for-print-pdf {
            display: none !important;
          }

          section {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .project-card {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 1rem;
          }

          .grid {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 1rem !important;
            width: 100% !important;
            padding: 0 !important;
          }

          .card-wrapper {
            break-inside: avoid;
            page-break-inside: avoid;
            height: fit-content;
          }
        }
      `}</style>
      <div className="px-4 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.projects && config.projects.length > 0 ? (
            config.projects.map((project: Project, index: number) => (
              <div className="project-card card-wrapper" key={index}>
                <Card className="hover:shadow-md transition-transform duration-300 transform hover:scale-105 bg-card h-full flex flex-col justify-between max-w-sm mx-auto w-full print:transform-none print:shadow-none">
                  <CardHeader className="space-y-2 flex flex-col">
                    <CardTitle className="text-lg font-semibold text-center flex items-center justify-center dark:text-gray-300 print:text-black">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline print:text-black"
                      >
                        {project.title}
                      </a>
                      <span className="ml-2 relative flex h-3 w-3 print:hidden">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 dark:bg-red-500"></span>
                      </span>
                    </CardTitle>
                    <CardContent className="w-full hide-for-print-pdf">
                      {project.image && (
                        <div className="w-full h-40 overflow-hidden rounded-md">
                          {typeof project.image === "string" ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            project.image
                          )}
                        </div>
                      )}
                    </CardContent>
                    <CardDescription className="text-sm text-muted-foreground min-h-[3rem] text-center print:text-black">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 mt-auto">
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="grid grid-cols-4 gap-2">
                          {project.technologies.map(
                            (tech: string, i: number) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary/50 print:bg-gray-200 print:text-black"
                              >
                                {tech}
                              </Badge>
                            )
                          )}
                        </div>
                      )}
                    {project.url && (
                      <div className="flex justify-end print:hidden">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-red-600 dark:text-red-400 hover:underline flex items-center"
                        >
                          Ver projeto
                          <ExternalLink className="ml-1 h-3 w-3 text-red-600 dark:text-red-400" />
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <p className="flex items-center whitespace-nowrap">
              Sem projetos no momento, mas fique atento no meu
              {config.social &&
                config.social.length > 0 &&
                config.social.map((link: SocialLink, index: number) =>
                  link.platform === "GitHub" ? (
                    <span key={index} className="flex items-center ml-1">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline whitespace-nowrap"
                      >
                        {link.platform}
                      </a>
                      <ExternalLink className="ml-1 h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </span>
                  ) : null
                )}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
