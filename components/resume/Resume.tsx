// Resume.tsx\
"use client";
import React, { useState, useEffect, useRef } from "react";
import { config } from "@/app/config/resume";
import Header from "./Header";
import About from "./About";
import Competencies from "./Competencies";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Languages from "./Languages";
import Projects from "./Projects";
import Certificates from "./Certificates";
import CertificatesManual from "./CertificatesManual";
import SettingsDialog from "./SettingsDialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || null;

export default function EnhancedTraditionalCV() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [printSections, setPrintSections] = useState({
    // contact: true,
    about: true,
    competencies: true,
    // stacks: true,
    experience: true,
    education: true,
    skills: true,
    languages: true,
    projects: true,
    certificates: true,
  });
  const [certificates, setCertificates] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const resumeRef = useRef(null);

  useEffect(() => {
    const fetchAllCertificates = async () => {
      try {
        const categories = await fetchGitHubCertificates();
        const certByYear = {};

        for (const category of categories) {
          if (category.type === "dir") {
            const categoryContent = await fetchCertificatesForCategory(
              category.name
            );

            for (const item of categoryContent) {
              if (item.type === "dir") {
                const year = item.name;
                if (!certByYear[year]) {
                  certByYear[year] = {};
                }

                const yearContent = await fetch(item.url, {
                  headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                  },
                }).then((res) => res.json());

                for (const folder of yearContent) {
                  if (folder.type === "dir") {
                    const folderContent = await fetch(folder.url, {
                      headers: {
                        Authorization: `token ${GITHUB_TOKEN}`,
                      },
                    }).then((res) => res.json());

                    if (!certByYear[year][category.name]) {
                      certByYear[year][category.name] = {};
                    }

                    certByYear[year][category.name][folder.name] = folderContent
                      .filter((file) => file.type === "file")
                      .map((file) => ({
                        name: file.name.replace(/\.[^/.]+$/, ""),
                        url: file.html_url,
                      }));
                  }
                }
              }
            }
          }
        }

        setCertificates(certByYear);
      } catch (error) {
        setAlertMessage(
          "Failed to fetch certificates. Please try again later."
        );
        setShowAlert(true);
      }
    };

    fetchAllCertificates();
  }, []);

  const togglePrintSection = (section) => {
    setPrintSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={`p-4  ${isDarkMode ? "dark" : ""}`}>
      <div className="relative w-full  max-w-[260mm] mx-auto flex">
        <div
          id="resume"
          className={`min-h-[297mm] p-6 bg-card shadow-lg text-black dark:text-white flex-1 rounded-xl`}
          ref={resumeRef}
        >
          <Header config={config} />
          {printSections.about && <About config={config} />}
          {printSections.competencies && <Competencies config={config} />}
          {printSections.skills && <Skills config={config} />}
          {/* {config.certificatesManual && <CertificatesManual config={config} />} */}
          {/* {printSections.stacks && <Stacks config={config} />} */}
          {printSections.experience && <Experience config={config} />}
          {printSections.education && <Education config={config} />}
          {printSections.languages && <Languages config={config} />}
          {printSections.projects && <Projects config={config} />}
          {printSections.certificates && (
            <Certificates certificates={certificates} />
          )}
        </div>

        <div className="sticky top-4 ml-2 ">
          <SettingsDialog
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            printSections={printSections}
            togglePrintSection={togglePrintSection}
            setAlertMessage={setAlertMessage}
            setShowAlert={setShowAlert}
            class="top-4"
          />
        </div>
      </div>

      {showAlert && (
        <Alert className="fixed bottom-4 right-4 w-auto">
          <AlertTitle>Alerta</AlertTitle>
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}

const fetchGitHubCertificates = async () => {
  const response = await fetch(
    "https://api.github.com/repos/codejota/Certificates/contents",
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch GitHub certificates: ${response.statusText}`
    );
  }
  return await response.json();
};

const fetchCertificatesForCategory = async (category) => {
  const response = await fetch(
    `https://api.github.com/repos/codejota/Certificates/contents/${category}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch certificates for ${category}: ${response.statusText}`
    );
  }
  return await response.json();
};
