import React from "react";
import { X, Download, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export default function ImageModal({ image, isOpen, onClose }) {
  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <div className="relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          />
          
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                <p className="text-white/90 mb-2">{image.description}</p>
                <Badge className="bg-white/20 text-white border-white/30">
                  {image.category}
                </Badge>
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}