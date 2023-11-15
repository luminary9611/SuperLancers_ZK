// projects.tsx
import React, { useState } from "react";
import Image from "next/legacy/image";
import Header from "../components/Header";
import BlackBox from "../components/BlackBox";
import PurpleButton from "../components/PurpleButton";
import ProjectDetailModal from "./ProjectDetailModal";

interface Project {
  name: string;
  description: string;
  status: string;
  reward: string;
  image: string;
  buttonType: string;
  organization: string;
  title: string;
  timeline: string;
  budget: string;
}

const ProjectBoard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      name: "Developer DAO",
      description: "Develop LLM Model for DAO",
      status: "Open",
      reward: "2 ETH",
      image: "/org1.png",
      buttonType: "PurpleButton",
      organization: "Developer DAO",
      title: "Write Our Documentation",
      timeline: "Due Nov 27-30",
      budget: "5 ETH",
    },
    {
      name: "Starknet",
      description: "Write Developer Documents",
      status: "Open",
      reward: "3 ETH",
      image: "/starknet.png",
      buttonType: "PurpleButton",
      organization: "Starknet",
      title: "Document Our APIs",
      timeline: "Due Dec 1-15",
      budget: "3 ETH",
    },
    {
      name: "ACTxDesign",
      description: "Create Design Prototypes",
      status: "Open",
      reward: "4 ETH",
      image: "/act.png",
      buttonType: "PurpleButton",
      organization: "ACTxDesign",
      title: "Design Revolutionary UI",
      timeline: "Due Jan 10-24",
      budget: "8 ETH",
    },
    // Add other projects vv
  ];

  const handlePurpleButtonClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto p-4">
        <header className="text-center my-10">
          <h1 className="text-5xl font-bold mb-6">The Project Board</h1>
          <p className="mb-6">
            A place for the crypto community to engage with projects.
            Opportunities are listed with details like organization, timeline,
            and budget—streamlined for developers to find and contribute to
            projects, earning rewards.
          </p>
        </header>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <BlackBox
                key={index}
                className="flex flex-col items-center p-6 rounded-lg space-y-4"
                label={""}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} Logo`}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="self-stretch bg-gray-700 p-2 rounded-lg flex justify-between items-center">
                  <span className="font-bold text-lg">{project.reward}</span>
                  <PurpleButton
                    onClick={() => handlePurpleButtonClick(project)}
                  >
                    {project.status}
                  </PurpleButton>
                </div>
              </BlackBox>
            ))}
          </div>
        </main>
      </div>
      {selectedProject && (
        <ProjectDetailModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default ProjectBoard;
