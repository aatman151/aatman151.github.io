import React from "react";
import { ZoomIn, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ImageGrid({ pictures, viewMode, onImageClick }) {
  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {pictures.map((picture) => (
          <div
            key={picture.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200/50 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onImageClick(picture)}
          >
            <div className="flex">
              <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden">
                <img
                  src={picture.src}
                  alt={picture.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">{picture.title}</h3>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                    {picture.category}
                  </Badge>
                </div>
                <p className="text-slate-600">{picture.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pictures.map((picture) => (
        <div
          key={picture.id}
          className="group relative bg-white rounded-xl shadow-sm border border-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          onClick={() => onImageClick(picture)}
        >
          <div className="relative overflow-hidden">
            <img
              src={picture.src}
              alt={picture.alt}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-white/90 text-slate-700 border-0">
                {picture.category}
              </Badge>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-slate-900 mb-2">{picture.title}</h3>
            <p className="text-sm text-slate-600 line-clamp-2">{picture.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}