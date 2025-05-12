'use client';

import { useState } from "react";
import Link from "next/link";
import UFCChampionData from "../../components/UFCChampionData";
import UFCHeatmap from "../../components/UFCHeatmap";
import UFCPerformanceGraph from "../../components/UFCPerformanceGraph";
import WeatherApp from "../../../weatherapp/weatherapp";

type ChartType = "champion" | "heatmap" | "performance";

export default function Projects() {
  const csvFile = "/UFC_champions.csv";
  const [selectedChart, setSelectedChart] = useState<ChartType>("champion");
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { user: "You", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage = { user: "AI", text: data.reply || "No response from AI." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { user: "AI", text: "Sorry, something went wrong. Please try again later." };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-brand text-center">My Work</h1>
        <p className="text-lg text-medium-contrast text-center">
          Explore some of the projects I've worked on.
        </p>

        {/* UFC Visualizations Card */}
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

        {/* Assignment 3 Streaming Chat Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">Streaming Chat</h2>
          <div className="w-full border border-gray-200 rounded p-4">
            <div className="flex flex-col space-y-4">
              <div className="overflow-y-auto h-64 border rounded p-4 bg-gray-50">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.user === "You" ? "text-right" : "text-left"}`}>
                    <span className="font-bold">{message.user}:</span> {message.text}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-3 py-2 border rounded"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Weather App Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">Weather App</h2>
          <div className="w-full border border-gray-200 rounded p-4">
            <WeatherApp />
          </div>
        </div>

      </main>
    </div>
  );
}
