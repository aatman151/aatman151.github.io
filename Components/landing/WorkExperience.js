import React from "react";
import { Building2, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Product Management Intern",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    duration: "Jun 2023 - Aug 2023",
    description: "Led cross-functional team to launch new user onboarding flow, resulting in 25% increase in user activation. Conducted user research and competitive analysis for mobile app features.",
    skills: ["User Research", "A/B Testing", "Figma", "SQL", "Jira"]
  },
  {
    title: "Business Analyst Intern",
    company: "StartupXYZ",
    location: "Remote",
    duration: "Jan 2023 - May 2023",
    description: "Analyzed customer behavior data to identify growth opportunities. Created comprehensive market analysis reports that informed product strategy decisions.",
    skills: ["Data Analysis", "Market Research", "Excel", "Tableau", "Python"]
  },
  {
    title: "Software Developer Intern",
    company: "DevSolutions",
    location: "Austin, TX",
    duration: "Jun 2022 - Aug 2022",
    description: "Developed full-stack web applications using React and Node.js. Collaborated with design team to implement responsive UI components.",
    skills: ["React", "Node.js", "MongoDB", "Git", "Agile"]
  }
];

export default function WorkExperience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building experience across product management, business analysis, and software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-orange-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-20">
                {/* Timeline Dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-4 border-white shadow-lg hidden md:block" />

                <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-8 shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-slate-600">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-white border-slate-200 text-slate-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}