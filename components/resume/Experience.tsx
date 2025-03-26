"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

export default function Experience({ config }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Experiencias</h2>
      {config.experience && config.experience.length > 0 ? (
        config.experience.map((exp, index) => (
          <Card
            key={index}
            className="mb-4 hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{exp.role}</CardTitle>
                  <CardDescription>
                    {exp.company} · {exp.location} · {exp.type}
                  </CardDescription>
                </div>
                <Badge variant="outline">
                  {exp.startDate} - {exp.endDate}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{exp.description}</p>
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <>
                  <ResponsibilitiesCollapsible
                    responsibilities={exp.responsibilities}
                  />

                  <h4 className="font-semibold text-sm mt-5 mb-1">Stacks:</h4>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No experience listed</p>
      )}
    </section>
  );
}

function ResponsibilitiesCollapsible({ responsibilities }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center">
        <h4 className="font-semibold text-sm mb-1">Responsabilidades:</h4>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-xs text-muted-foreground ml-2 hover:text-primary"
        >
          <span>Clique para mais informações</span>
          <ChevronDown
            className={`h-4 w-4 ml-1 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <ul className="list-disc list-inside text-sm mb-2 mt-2 animate-in fade-in-50 duration-300">
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
