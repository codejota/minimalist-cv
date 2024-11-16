import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FileDown, ExternalLink } from "lucide-react";

export default function CertificatesManual({ config }) {
  return (
    <TooltipProvider>
      <section className="mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold mt-6 mb-4 inline-block relative group cursor-help">
            Certificados e Cursos
            <span className="border-t border-dashed border-border absolute left-0 bottom-0 w-full h-0.5 bg-red-600 dark:bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
          </h2>
        </div>

        {config.certificatesManual && config.certificatesManual.length > 0 ? (
          config.certificatesManual.map((certificate, index) => (
            <Card
              key={index}
              className="mb-4 hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{certificate.title.join(", ")}</CardTitle>
                    <CardDescription>
                      {certificate.institution} · {certificate.location}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">
                    {certificate.startDate} - {certificate.endDate}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-1">{certificate.description}</p>
                <div className="flex flex-col mt-2">
                  <h4 className="font-semibold text-sm mb-1">Duração:</h4>
                  <p className="text-sm mb-2">{certificate.duration}</p>
                </div>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 dark:text-red-400 hover:underline flex items-center"
                >
                  <FileDown className="mr-1 h-3 w-3" />
                  <CardDescription
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    Ver Certificado
                    <ExternalLink className="ml-1 h-3 w-3 text-red-600 dark:text-red-400" />
                  </CardDescription>
                </a>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>Sem certificados no momento :(</p>
        )}
      </section>
    </TooltipProvider>
  );
}
