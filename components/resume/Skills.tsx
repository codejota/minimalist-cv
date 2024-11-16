import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";

export default function Skills({ config }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Stacks</h2>
      <Card>
        <CardContent className="pt-6">
          {config.skills && config.skills.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {config.skills.map((skills, index) => (
                <div key={index} className="w-full mb-4">
                  <h3 className="font-semibold mb-2">
                    {skills.category}
                    <Separator className="mb-4" />
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skills.items.map((item, itemIndex) => (
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
