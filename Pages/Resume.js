import React from "react";
import { Download, Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSection from "../components/resume/ResumeSection";

export default function Resume() {
  const handleDownload = () => {
    // In a real app, this would trigger a PDF download
    alert("Resume download would start here");
  };

  return (
    <div className="py-12 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Resume
          </h1>
          <Button
            onClick={handleDownload}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Download PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden">
          <ResumeHeader />
          
          <div className="p-8 space-y-8">
            <ResumeSection
              title="Professional Summary"
              content={
                <p className="text-slate-700 leading-relaxed">
                  Recent graduate with 3+ years of experience in product management, business analysis, and software development. 
                  Passionate about creating user-centered products that drive business growth. Proven track record of leading 
                  cross-functional teams, conducting user research, and delivering data-driven solutions. Seeking a Product Manager 
                  role to leverage my technical background and analytical skills in building innovative products.
                </p>
              }
            />

            <ResumeSection
              title="Work Experience"
              content={
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">Product Management Intern</h3>
                      <span className="text-slate-600">Jun 2023 - Aug 2023</span>
                    </div>
                    <p className="text-slate-700 font-medium mb-2">TechCorp Inc. • San Francisco, CA</p>
                    <ul className="text-slate-600 space-y-1 ml-4">
                      <li>• Led cross-functional team to launch new user onboarding flow, resulting in 25% increase in user activation</li>
                      <li>• Conducted user research and competitive analysis for mobile app features</li>
                      <li>• Collaborated with engineering and design teams to deliver 3 major product releases</li>
                      <li>• Analyzed user behavior data using SQL and created actionable insights for product improvements</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">Business Analyst Intern</h3>
                      <span className="text-slate-600">Jan 2023 - May 2023</span>
                    </div>
                    <p className="text-slate-700 font-medium mb-2">StartupXYZ • Remote</p>
                    <ul className="text-slate-600 space-y-1 ml-4">
                      <li>• Analyzed customer behavior data to identify growth opportunities</li>
                      <li>• Created comprehensive market analysis reports that informed product strategy decisions</li>
                      <li>• Developed automated reporting dashboards using Tableau and Python</li>
                      <li>• Presented findings to senior leadership and contributed to strategic planning sessions</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">Software Developer Intern</h3>
                      <span className="text-slate-600">Jun 2022 - Aug 2022</span>
                    </div>
                    <p className="text-slate-700 font-medium mb-2">DevSolutions • Austin, TX</p>
                    <ul className="text-slate-600 space-y-1 ml-4">
                      <li>• Developed full-stack web applications using React and Node.js</li>
                      <li>• Collaborated with design team to implement responsive UI components</li>
                      <li>• Participated in agile development processes and code reviews</li>
                      <li>• Improved application performance by 30% through code optimization</li>
                    </ul>
                  </div>
                </div>
              }
            />

            <ResumeSection
              title="Education"
              content={
                <div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Bachelor of Science in Computer Science</h3>
                    <span className="text-slate-600">2020 - 2024</span>
                  </div>
                  <p className="text-slate-700 font-medium mb-2">University of California, Berkeley • Berkeley, CA</p>
                  <ul className="text-slate-600 space-y-1 ml-4">
                    <li>• GPA: 3.8/4.0</li>
                    <li>• Relevant Coursework: Data Structures, Database Systems, Human-Computer Interaction, Software Engineering</li>
                    <li>• Activities: Product Management Club President, Hackathon Winner (2023)</li>
                  </ul>
                </div>
              }
            />

            <ResumeSection
              title="Skills"
              content={
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Product Management</h4>
                    <ul className="text-slate-600 space-y-1">
                      <li>• User Research & Testing</li>
                      <li>• Product Strategy & Roadmapping</li>
                      <li>• A/B Testing & Analytics</li>
                      <li>• Stakeholder Management</li>
                      <li>• Agile/Scrum Methodologies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Technical Skills</h4>
                    <ul className="text-slate-600 space-y-1">
                      <li>• SQL, Python, JavaScript</li>
                      <li>• React, Node.js, MongoDB</li>
                      <li>• Figma, Sketch, Adobe Creative Suite</li>
                      <li>• Tableau, Google Analytics</li>
                      <li>• Git, Jira, Confluence</li>
                    </ul>
                  </div>
                </div>
              }
            />

            <ResumeSection
              title="Projects"
              content={
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">E-Commerce Mobile App Redesign</h4>
                    <p className="text-slate-600">
                      Led UX/UI redesign resulting in 40% increase in conversion rate. Conducted user research, 
                      created prototypes, and implemented A/B testing framework.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">SaaS Dashboard Analytics</h4>
                    <p className="text-slate-600">
                      Built comprehensive analytics dashboard using React and D3.js. Improved user engagement 
                      by 50% and reduced time to insights by 35%.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">FinTech User Onboarding</h4>
                    <p className="text-slate-600">
                      Designed and optimized user onboarding flow for financial services app. Reduced drop-off 
                      rates by 45% while maintaining regulatory compliance.
                    </p>
                  </div>
                </div>
              }
            />

            <ResumeSection
              title="Achievements"
              content={
                <ul className="text-slate-600 space-y-2">
                  <li>• Winner, UC Berkeley Product Management Case Competition (2023)</li>
                  <li>• Dean's List, Fall 2022 and Spring 2023</li>
                  <li>• Certified Product Manager (CPM) - Product School</li>
                  <li>• Google Analytics Individual Qualification (IQ)</li>
                  <li>• Volunteer, Code for America - Teaching coding to underserved communities</li>
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}