import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function About({ config }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Sobre</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm">{config.personal.about}</p>
        </CardContent>
      </Card>
    </section>
  );
}
