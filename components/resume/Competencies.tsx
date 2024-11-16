import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Competencies({ config }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Competências</h2>
      <Card>
        <CardContent className="pt-6">
          {config.competencies && config.competencies.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {config.competencies.map((competency, index) => (
                <div key={index} className="w-full mb-4">
                  <h3 className="font-semibold mb-2">{competency.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {competency.items.map((item, itemIndex) => (
                      <Badge
                        key={itemIndex}
                        variant="outline"
                        className="text-sm"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No competencies listed</p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
