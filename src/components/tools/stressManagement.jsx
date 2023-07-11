import React, { useState } from "react";
import Draginfo from "./Draginfo";

const StressManagementTools = () => {
  const [stressLevel, setStressLevel] = useState("");
  const [selectedTool, setSelectedTool] = useState(null);
  const [tools] = useState([
    {
      id: 1,
      name: "Deep Breathing",
      description: "Take deep breaths to relax and calm your mind.",
    },
    {
      id: 2,
      name: "Meditation",
      description:
        "Practice meditation to reduce stress and promote mindfulness.",
    },
    {
      id: 3,
      name: "Exercise",
      description:
        "Engage in physical activities to release tension and boost mood.",
    },
    {
      id: 4,
      name: "Journaling",
      description:
        "Write down your thoughts and feelings to gain clarity and reduce stress.",
    },
  ]);

  const handleStressLevelChange = (e) => {
    setStressLevel(e.target.value);
  };

  const handleToolSelection = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="container mx-auto p-4">
      <Draginfo />
      <h1 className="text-2xl font-bold mb-4">Stress Management Tools</h1>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="stressLevel">
          Current Stress Level:
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          id="stressLevel"
          value={stressLevel}
          onChange={handleStressLevelChange}
        >
          <option value="">Select stress level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        {stressLevel && (
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Recommended Tools:</h2>
            <ul>
              {tools.map((tool) => (
                <li
                  key={tool.id}
                  className={`cursor-pointer py-2 ${
                    selectedTool && selectedTool.id === tool.id
                      ? "bg-blue-200"
                      : ""
                  }`}
                  onClick={() => handleToolSelection(tool)}
                >
                  <span className="font-bold">{tool.name}: </span>
                  {tool.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedTool && (
          <div>
            <h2 className="text-lg font-bold mb-2">Selected Tool:</h2>
            <p>{selectedTool.name}</p>
            <p>{selectedTool.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StressManagementTools;
