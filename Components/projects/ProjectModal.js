import React from "react";
import { X, Calendar, Users, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-600">{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-600">{project.details.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-600">{project.details.team}</span>
            </div>
            <div>
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-0">
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Overview</h4>
              <p className="text-slate-600 leading-relaxed">{project.details.overview}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Challenges</h4>
              <p className="text-slate-600 leading-relaxed">{project.details.challenges}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Solution</h4>
              <p className="text-slate-600 leading-relaxed">{project.details.solution}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Results</h4>
              <p className="text-slate-600 leading-relaxed">{project.details.results}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t">
            <Button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Project
            </Button>
            <Button variant="outline" className="flex-1">
              View Case Study
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}