import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, MapPin, Calendar, Building2, Award, Code, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import HeroSection from "../components/landing/HeroSection";
import WorkExperience from "../components/landing/WorkExperience";
import SkillsSection from "../components/landing/SkillsSection";
import CallToAction from "../components/landing/CallToAction";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkExperience />
      <SkillsSection />
      <CallToAction />
    </div>
  );
}