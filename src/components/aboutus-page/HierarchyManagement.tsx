"use client";

import { hierarchyManagement } from "@/constants/data";
import dynamic from "next/dynamic";
import { useState } from "react";

const Tree = dynamic(
  () => import("react-organizational-chart").then((mod) => mod.Tree),
  { ssr: false }
);
const TreeNode = dynamic(
  () => import("react-organizational-chart").then((mod) => mod.TreeNode),
  { ssr: false }
);

const HierarchyComponent = () => {
  const [openNodes, setOpenNodes] = useState<{ [key: string]: boolean }>({});

  // Toggle individual menu by ID
  const toggleMenu = (id: string) => {
    setOpenNodes((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Render tree nodes recursively
  const renderTreeNodes = (data: any, level: number) => {
    const nodeStyle =
      level === 1
        ? "bg-teal-500 text-white"
        : level === 2
        ? "bg-yellow-500 text-white"
        : "bg-blue-500 text-white";

    return data.map((item: any) => (
      <>
        <TreeNode
          key={item.id}
          label={
            <div
              className="flex items-center cursor-pointer justify-center max-w-[320px] w-full"
              onClick={() => toggleMenu(item.id)} // Toggle individual menu
            >
              <span
                className={`mr-2 text-lg transform transition-transform duration-300 ${
                  openNodes[item.id] ? "rotate-90" : "rotate-0"
                }`}
              >
                {openNodes[item.id] ? "▼" : "▶"}
              </span>
              <div
                className={`px-4 py-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-1 ${nodeStyle}`}
              >
                {item.title}
              </div>
            </div>
          }
        >
          {item.departments && openNodes[item.id] ? (
            <div className="grid grid-cols-1 gap-4 mt-4 justify-items-center">
              {item.departments.map((department: any) => (
                <div
                  className="mx-auto bg-gray-200 text-gray-800 px-4 py-6 rounded-md shadow-sm min-w-[150px]"
                  key={department.id}
                >
                  {department.name}
                </div>
              ))}
            </div>
          ) : null}
        </TreeNode>
      </>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 mx-auto">
      <h1 className="text-2xl font-medium py-8">HIERARCHY MANAGEMENT</h1>
      <Tree
        lineWidth="2px"
        lineColor="#3498db"
        lineBorderRadius="10px"
        lineHeight="40px"
        label={
          <div className="flex justify-center items-center mx-auto bg-teal-500 text-white px-5 py-6 rounded-lg shadow-md max-w-[200px] w-full text-wrap">
            {hierarchyManagement.level1.title}
          </div>
        }
      >
        <TreeNode
          label={
            <div className="flex flex-col justify-center items-center mx-auto bg-yellow-500 text-white px-5 py-6 rounded-lg shadow-md max-w-[200px] w-full">
              {hierarchyManagement.level2.title}
            </div>
          }
        >
          {renderTreeNodes(hierarchyManagement.level3, 3)}
        </TreeNode>
      </Tree>
    </div>
  );
};

export default HierarchyComponent;
