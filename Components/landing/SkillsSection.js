import React from "react";
import { Code, Users, TrendingUp, Award, Lightbulb, Target } from "lucide-react";

const skillCategories = [
  {
    title: "Product Management",
    icon: Target,
    skills: ["User Research", "Product Strategy", "A/B Testing", "Roadmap Planning", "Stakeholder Management"]
  },
  {
    title: "Technical Skills",
    icon: Code,
    skills: ["SQL", "Python", "React", "Figma", "Tableau", "Git"]
  },
  {
    title: "Business Analysis",
    icon: TrendingUp,
    skills: ["Market Research", "Data Analysis", "Financial Modeling", "Competitive Analysis", "KPI Tracking"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Communication", "Problem Solving", "Project Management", "Cross-functional Collaboration"]
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A diverse skillset spanning product management, technical development, and business strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-lg font-bold text-slate-900">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-3" />
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}