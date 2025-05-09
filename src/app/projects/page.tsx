'use client';

import { useState } from "react";
import Link from "next/link";
import UFCChampionData from "../../components/UFCChampionData";
import UFCHeatmap from "../../components/UFCHeatmap";
import UFCPerformanceGraph from "../../components/UFCPerformanceGraph";

type ChartType = "champion" | "heatmap" | "performance";

export default function Projects() {
  const csvFile = "/UFC_champions.csv";
  const [selectedChart, setSelectedChart] = useState<ChartType>("champion");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-brand text-center">Our Work</h1>
        <p className="text-lg text-medium-contrast text-center">
          Explore some of the projects we’ve worked on, each focused on delivering practical, effective solutions for real people and organizations.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">UFC Visualizations</h2>
          <select
            value={selectedChart}
            onChange={(e) => setSelectedChart(e.target.value as ChartType)}
            className="px-3 py-2 border rounded-md w-full max-w-xs"
          >
            <option value="champion">UFC Champion Data</option>
            <option value="heatmap">UFC Heatmap</option>
            <option value="performance">UFC Performance Graph</option>
          </select>

          <div className="w-full max-h-[600px] overflow-auto border border-gray-200 rounded p-4">
            {selectedChart === "champion" && (
              <div className="w-full">
                <UFCChampionData csvFile={csvFile} />
              </div>
            )}
            {selectedChart === "heatmap" && (
              <div className="w-full">
                <UFCHeatmap csvFile={csvFile} />
              </div>
            )}
            {selectedChart === "performance" && (
              <div className="w-full">
                <UFCPerformanceGraph csvFile={csvFile} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
