import React, { useState } from "react";
import { ExternalLink, Github, Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";

const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App Redesign",
    description: "Complete UX/UI redesign of mobile shopping app resulting in 40% increase in conversion rate",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    category: "Product Management",
    technologies: ["Figma", "User Research", "A/B Testing", "Prototyping"],
    date: "Dec 2023",
    status: "Completed",
    details: {
      overview: "Led the complete redesign of a mobile e-commerce application to improve user experience and increase conversion rates. Conducted extensive user research and implemented data-driven design decisions.",
      challenges: "Low conversion rates, complex checkout process, and poor mobile navigation were the main pain points identified through user feedback and analytics.",
      solution: "Implemented a streamlined checkout process, redesigned product discovery flow, and created an intuitive navigation system based on user behavior data.",
      results: "40% increase in conversion rate, 25% reduction in cart abandonment, and 60% improvement in user satisfaction scores.",
      duration: "3 months",
      team: "4 people (1 PM, 2 Designers, 1 Developer)"
    }
  },
  {
    id: 2,
    title: "SaaS Dashboard Analytics",
    description: "Built comprehensive analytics dashboard for SaaS platform with real-time data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Development",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    date: "Oct 2023",
    status: "Completed",
    details: {
      overview: "Developed a comprehensive analytics dashboard for a SaaS platform to help users track key performance metrics and make data-driven decisions.",
      challenges: "Complex data visualization requirements, real-time updates, and performance optimization for large datasets.",
      solution: "Built a scalable React application with optimized data fetching, implemented real-time updates using WebSockets, and created interactive charts using D3.js.",
      results: "Improved user engagement by 50%, reduced time to insights by 35%, and increased customer retention by 20%.",
      duration: "4 months",
      team: "3 people (1 PM, 1 Full-stack Developer, 1 Designer)"
    }
  },
  {
    id: 3,
    title: "FinTech User Onboarding",
    description: "Designed and optimized user onboarding flow for financial services mobile app",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    category: "Product Management",
    technologies: ["Figma", "User Testing", "Analytics", "Prototyping"],
    date: "Aug 2023",
    status: "Completed",
    details: {
      overview: "Redesigned the user onboarding experience for a FinTech mobile application to reduce drop-off rates and improve user activation.",
      challenges: "High drop-off rates during onboarding (65%), complex KYC requirements, and regulatory compliance constraints.",
      solution: "Created a progressive onboarding flow with clear progress indicators, simplified form design, and implemented smart defaults to reduce friction.",
      results: "Reduced onboarding drop-off by 45%, increased user activation by 30%, and maintained 100% compliance with regulatory requirements.",
      duration: "2 months",
      team: "5 people (1 PM, 2 Designers, 1 Developer, 1 Compliance Officer)"
    }
  },
  {
    id: 4,
    title: "Healthcare Data Platform",
    description: "Product strategy and development for healthcare data management platform",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    category: "Product Strategy",
    technologies: ["Market Research", "Strategic Planning", "Roadmapping", "Stakeholder Management"],
    date: "Jun 2023",
    status: "Completed",
    details: {
      overview: "Developed comprehensive product strategy for a healthcare data management platform targeting small to medium healthcare providers.",
      challenges: "Fragmented market, complex regulatory requirements (HIPAA compliance), and diverse user needs across different healthcare specialties.",
      solution: "Conducted extensive market research, created detailed user personas, and developed a phased product roadmap with clear value propositions for each user segment.",
      results: "Secured $2M in seed funding, established partnerships with 5 healthcare providers, and successfully launched MVP with 80% user satisfaction.",
      duration: "6 months",
      team: "Cross-functional team of 12 people"
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Product Management", "Development", "Product Strategy"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="py-12 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A collection of product management, development, and strategy projects that showcase my ability to drive results through user-centered design and data-driven decisions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                filter === category
                  ? "bg-slate-900 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}