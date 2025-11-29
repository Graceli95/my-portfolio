"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQAccordion({ question, answer, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between gap-4 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="text-left text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
            {answer.split('\n\n').map((paragraph, index) => {
              // Check if this is a bullet point item (starts with •)
              if (paragraph.startsWith('•')) {
                const lines = paragraph.split('\n');
                return (
                  <ul key={index} className="space-y-2.5 ml-4">
                    {lines.map((line, lineIndex) => {
                      if (line.startsWith('•')) {
                        const content = line.substring(1).trim();
                        return <li key={lineIndex} className="list-disc ml-4 mb-1">{content}</li>;
                      } else if (line.startsWith('~')) {
                        const content = line.substring(1).trim();
                        return <li key={lineIndex} className="italic ml-8 text-sm list-none mb-2">{content}</li>;
                      }
                      return null;
                    })}
                  </ul>
                );
              }
              // Regular paragraph
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

