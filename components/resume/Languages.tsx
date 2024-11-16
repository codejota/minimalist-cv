import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Languages({ config }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Línguas</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {config.languages && config.languages.length > 0 ? (
              config.languages.map((language, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary/80"
                >
                  {language.name} · {language.proficiency}
                </Badge>
              ))
            ) : (
              <p>No languages listed</p>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
