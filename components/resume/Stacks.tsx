import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Stacks({ config }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Stacks</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {config.stacks && config.stacks.length > 0 ? (
              config.stacks.map((stack, index) => (
                <Badge key={index} variant="secondary">
                  {stack}
                </Badge>
              ))
            ) : (
              <p>No stacks listed</p>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
