"use client";

import React, { useState, useEffect } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { FileDown, ExternalLink, Github, HelpCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TooltipProvider } from "@/components/ui/tooltip";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || null;

const fetchGitHubCertificates = async () => {
  const response = await fetch(
    "https://api.github.com/repos/codejota/Certificates/contents",
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch GitHub certificates: ${response.statusText}`
    );
  }
  return await response.json();
};

const fetchCertificatesForCategory = async (category) => {
  const response = await fetch(
    `https://api.github.com/repos/codejota/Certificates/contents/${category}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch certificates for ${category}: ${response.statusText}`
    );
  }
  return await response.json();
};

export default function Certificates() {
  const [certificates, setCertificates] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const fetchAllCertificates = async () => {
      try {
        const categories = await fetchGitHubCertificates();
        const certByYear = {};

        for (const category of categories) {
          if (category.type === "dir") {
            const categoryContent = await fetchCertificatesForCategory(
              category.name
            );

            for (const item of categoryContent) {
              if (item.type === "dir") {
                const year = item.name;
                if (!certByYear[year]) {
                  certByYear[year] = {};
                }

                const yearContent = await fetch(item.url, {
                  headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                  },
                }).then((res) => res.json());

                for (const folder of yearContent) {
                  if (folder.type === "dir") {
                    const folderContent = await fetch(folder.url, {
                      headers: {
                        Authorization: `token ${GITHUB_TOKEN}`,
                      },
                    }).then((res) => res.json());

                    if (!certByYear[year][category.name]) {
                      certByYear[year][category.name] = {};
                    }

                    certByYear[year][category.name][folder.name] = folderContent
                      .filter((file) => file.type === "file")
                      .map((file) => ({
                        name: file.name.replace(/\.[^/.]+$/, ""),
                        url: file.html_url,
                      }));
                  }
                }
              }
            }
          }
        }

        setCertificates(certByYear);
      } catch (error) {
        setAlertMessage(
          "Failed to fetch certificates. Please try again later."
        );
        setShowAlert(true);
      }
    };

    fetchAllCertificates();
  }, []);

  return (
    <TooltipProvider>
      <>
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className="flex items-center">
              <h2
                className="text-2xl font-semibold mt-6 mb-4 inline-block relative group cursor-help"
                variant="link"
              >
                Certificados
                <span className="border-t border-dashed border-border absolute left-0 bottom-0 w-full h-0.5 bg-red-600 dark:bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
              </h2>
              <HelpCircle className="ml-2 h-5 w-5 text-muted-foreground" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-80 bg-card shadow-lg rounded-md border border-border"
            align="start"
            sideOffset={5}
          >
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/github.png" />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@codejota</h4>
                <p className="text-sm">
                  Atualizado em tempo real com os certificados do repositório do
                  GitHub.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        {Object.entries(certificates)
          .sort(([a], [b]) => b.localeCompare(a))
          .map(([year, categories]) => (
            <Card key={year} className="mb-4">
              <CardHeader>
                <CardTitle>{year}</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.entries(categories).map(([category, folders]) => (
                  <div key={category} className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">{category}</h3>
                    {Object.entries(folders).map(([folder, certs]) => (
                      <div key={folder} className="mb-2">
                        <h4 className="font-medium text-sm mb-1">{folder}</h4>
                        <ul className="list-none pl-4">
                          {certs.map((cert, index) => (
                            <li key={index} className="mb-1">
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-red-600 dark:text-red-400 hover:underline flex items-center"
                              >
                                <FileDown className="mr-1 h-3 w-3" />
                                <CardDescription
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {cert.name}
                                  <ExternalLink className="ml-1 h-3 w-3 text-red-600 dark:text-red-400" />
                                </CardDescription>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

        {showAlert && (
          <Alert className="fixed bottom-4 right-4 w-auto">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        )}
      </>
    </TooltipProvider>
  );
}
