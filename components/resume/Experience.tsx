import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
                  <h4 className="font-semibold text-sm mb-1">
                    Responsabilidades:
                  </h4>
                  <ul className="list-disc list-inside text-sm mb-2 ">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                    <h4 className="font-semibold text-sm  mt-5 mb-1 ">
                      Stacks:
                    </h4>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <>
                        <div className="flex flex-wrap gap-1 pt-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </>
                    )}
                  </ul>
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
