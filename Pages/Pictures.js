import React, { useState } from "react";
import { Search, Filter, Grid, List, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import ImageGrid from "../components/pictures/ImageGrid";
import ImageModal from "../components/pictures/ImageModal";

const pictures = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    alt: "Professional headshot",
    category: "Professional",
    title: "Professional Headshot",
    description: "Corporate headshot for LinkedIn and professional materials"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    alt: "Team meeting",
    category: "Professional",
    title: "Team Collaboration",
    description: "Working with cross-functional teams on product strategy"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    alt: "Conference presentation",
    category: "Professional",
    title: "Conference Presentation",
    description: "Presenting product insights at tech conference"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
    alt: "Coding session",
    category: "Professional",
    title: "Development Work",
    description: "Working on full-stack development projects"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    alt: "Mountain hiking",
    category: "Personal",
    title: "Mountain Adventure",
    description: "Hiking in the Sierra Nevada mountains"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop",
    alt: "Travel photography",
    category: "Personal",
    title: "Travel Experience",
    description: "Exploring new cultures and places"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
    alt: "Graduation ceremony",
    category: "Personal",
    title: "Graduation Day",
    description: "Celebrating academic achievements"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    alt: "Volunteer work",
    category: "Personal",
    title: "Community Service",
    description: "Volunteering with local tech education programs"
  }
];

export default function Pictures() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Professional", "Personal"];
  
  const filteredPictures = pictures.filter(picture => {
    const matchesCategory = filter === "All" || picture.category === filter;
    const matchesSearch = searchTerm === "" || 
      picture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      picture.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Pictures
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A visual journey through my professional experiences and personal adventures
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search pictures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === category
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* View Mode */}
          <div className="flex bg-slate-100 rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="px-3"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="px-3"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Image Grid */}
        <ImageGrid
          pictures={filteredPictures}
          viewMode={viewMode}
          onImageClick={setSelectedImage}
        />

        {/* Image Modal */}
        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </div>
  );
}