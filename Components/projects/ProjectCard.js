import React from "react";
import { ExternalLink, Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-slate-700 border-0">
            {project.category}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
            {project.status}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <Button
          onClick={onViewDetails}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white group"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}