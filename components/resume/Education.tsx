import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education({ config }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Formação</h2>
      {config.education && config.education.length > 0 ? (
        config.education.map((edu, index) => (
          <Card
            key={index}
            className="mb-4 hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{edu.institution}</CardTitle>
                  <CardDescription>
                    {edu.degree}, {edu.location}
                  </CardDescription>
                </div>
                <Badge variant="outline">
                  {edu.startDate} - {edu.endDate}
                </Badge>
              </div>
            </CardHeader>
            {edu.description && (
              <CardContent>
                <p className="text-sm">{edu.description}</p>
              </CardContent>
            )}
          </Card>
        ))
      ) : (
        <p>No education listed</p>
      )}
    </section>
  );
}
