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

export default function Projects({ config }) {
  return (
    <section className="mb-1 w-full">
      <h2 className="text-2xl font-semibold mb-2">Projetos</h2>
      <style jsx global>{`
        @media print {
          .hide-for-print-pdf {
            display: none !important;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }
      `}</style>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {config.projects && config.projects.length > 0 ? (
          config.projects.map((project, index) => (
            <div className="project-card" key={index}>
              <Card className="hover:shadow-md transition-transform duration-300 transform hover:scale-105 bg-card h-full flex flex-col justify-between">
                <CardHeader className="space-y-2 flex flex-col">
                  <CardTitle className="text-lg font-semibold text-center flex items-center dark:text-gray-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                    <span className="ml-2 relative flex h-3 w-3">
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
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          project.image
                        )}
                      </div>
                    )}
                  </CardContent>
                  <CardDescription className="text-sm text-muted-foreground min-h-[3rem] text-center">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 mt-auto">
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="grid grid-cols-4 gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {project.url && (
                    <div className="flex justify-end">
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
              config.social.map((link, index) =>
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
    </section>
  );
}
