"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Settings, Printer, Download } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { config } from "@/app/config/resume";
import ThemeToggle from "@/components/layout/theme-toggle";

export default function SettingsDialog({
  isDarkMode,
  printSections,
  togglePrintSection,
  setAlertMessage,
  setShowAlert,
}) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handlePrint = () => {
    const printContent = document.getElementById("resume");
    if (printContent) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        const styles = Array.from(document.styleSheets)
          .map((styleSheet) => {
            try {
              return Array.from(styleSheet.cssRules)
                .map((rule) => rule.cssText)
                .join("");
            } catch (e) {
              console.log("Erro ao acessar styleSheet", e);
              return "";
            }
          })
          .join("\n");

        printWindow.document.write(`
          <html>
            <head>
              <title> Junior Ribeiro | Desenvolvedor - Currículo</title>
              <style>${styles}</style>
            </head>
            <body>
              ${printContent.outerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    setAlertMessage("Iniciando geração do PDF...");
    setShowAlert(true);

    try {
      const element = document.getElementById("resume");
      if (!element) {
        throw new Error("Elemento do currículo não encontrado");
      }

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: true,
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
        onclone: (clonedDoc) => {
          const style = clonedDoc.createElement("style");
          style.textContent = `
            .hide-for-print-pdf {
              display: none !important;
            }
            #resume {
              height: auto !important;
              overflow: visible !important;
            }
          `;
          clonedDoc.head.appendChild(style);
        },
      });

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`${config.personal.name}-resume.pdf`);

      setAlertMessage("PDF baixado com sucesso!");
      setShowAlert(true);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      setAlertMessage(`Erro ao gerar PDF: ${error.message}`);
      setShowAlert(true);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleDownloadPNG = async () => {
    const element = document.getElementById("resume");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      onclone: (clonedDoc) => {
        const style = clonedDoc.createElement("style");
        style.textContent = `
          .hide-for-print-pdf {
            display: none !important;
          }
        `;
        clonedDoc.head.appendChild(style);
        clonedDoc.body.classList.add("print");
      },
    });
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `${config.personal.name}-resume.png`;
    link.href = dataURL;
    link.click();
    setAlertMessage("Currículo baixado como PNG");
    setShowAlert(true);
  };

  return (
    <div>
      <div className="">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-10 h-10 rounded-full mb-2 ">
              <Settings className="h-8 w-8" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Opções de impressão</DialogTitle>
              <DialogDescription>
                Aqui você pode baixar o meu currículo em PDF ou PNG e escolher
                quais seções mostrar.
              </DialogDescription>
            </DialogHeader>
            <Command>
              <CommandList>
                <CommandGroup heading="Download">
                  <CommandItem
                    onSelect={handleDownloadPDF}
                    disabled={isGeneratingPDF}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    <span>
                      {isGeneratingPDF ? "Gerando PDF..." : "Download PDF"}
                    </span>
                  </CommandItem>
                  <CommandItem onSelect={handleDownloadPNG}>
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download PNG</span>
                  </CommandItem>
                  <CommandItem onSelect={handlePrint}>
                    <Printer className="mr-2 h-4 w-4" />
                    <span>Imprimir</span>
                  </CommandItem>
                </CommandGroup>
                <Separator />
                <CommandGroup heading="Seções para mostrar">
                  {Object.entries(printSections).map(([key, value]) => (
                    <CommandItem
                      key={key}
                      onSelect={() => togglePrintSection(key)}
                    >
                      <Checkbox
                        checked={value}
                        onCheckedChange={() => togglePrintSection(key)}
                        className="mr-2"
                      />
                      <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
      </div>
      <div className="">
        <ThemeToggle />
      </div>
    </div>
  );
}
