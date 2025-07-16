import React from "react";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

export default function ResumeHeader() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Aatman Shah</h1>
        <p className="text-xl text-slate-300 mb-6">Aspiring Product Manager</p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>aatman.shah@email.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/aatmanshah</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>github.com/aatmanshah</span>
          </div>
        </div>
      </div>
    </div>
  );
}