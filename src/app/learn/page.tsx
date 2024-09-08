"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const topics = [
  {
    title: "Introduction",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subTopics: [],
  },
  {
    title: "Getting Started",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subTopics: [
      {
        title: "Installation",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "First Steps",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    title: "Advanced Topics",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subTopics: [],
  },
  {
    title: "API Reference",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subTopics: [
      {
        title: "Endpoints",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Authentication",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
];

export default function Learn() {
  const [selectedTopic, setSelectedTopic] = useState<
    | {
        title: string;
        content: string;
        subTopics: { title: string; content: string }[];
      }
    | { title: string; content: string }
  >(topics[0]);

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar for desktop */}
        <aside className="hidden md:block md:w-1/4 bg-gray-100 p-4 border-r">
          <h2 className="text-xl font-semibold mb-4">Documentation Topics</h2>
          <ul>
            {topics.map((topic, index) => (
              <li key={index} className="mb-2">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic.title}
                </button>
                {topic.subTopics.length > 0 && (
                  <ul className="ml-4 mt-2">
                    {topic.subTopics.map((subTopic, subIndex) => (
                      <li key={subIndex}>
                        <button
                          className="text-blue-400 hover:underline"
                          onClick={() => setSelectedTopic(subTopic)}
                        >
                          {subTopic.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">{selectedTopic.title}</h1>
          <p className="text-gray-700">{selectedTopic.content}</p>
        </main>

        {/* Mobile sidebar */}
        <aside className="md:hidden bg-gray-100 p-4 border-b">
          <details>
            <summary className="text-lg font-semibold">
              Documentation Topics
            </summary>
            <ul className="mt-4">
              {topics.map((topic, index) => (
                <li key={index} className="mb-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {topic.title}
                  </button>
                  {topic.subTopics.length > 0 && (
                    <ul className="ml-4 mt-2">
                      {topic.subTopics.map((subTopic, subIndex) => (
                        <li key={subIndex}>
                          <button
                            className="text-blue-400 hover:underline"
                            onClick={() => setSelectedTopic(subTopic)}
                          >
                            {subTopic.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </details>
        </aside>
      </div>
      <Footer />
    </>
  );
}
