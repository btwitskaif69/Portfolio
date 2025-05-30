// components/Experience.jsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Experience</h2>
      
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Briefcase className="text-primary" />
              <h3 className="text-xl font-semibold text-gray-900">
                Full Stack Developer
              </h3>
            </div>
            <Badge variant="default">Internship</Badge>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              <span>Jan 2025 - Feb 2025</span>
            </div>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <MapPin className="w-4 h-4" />
              <span>Nagpur, Maharashtra, India</span>
            </div>
          </div>

          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Created responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.</li>
            <li>Developed and connected REST APIs for smooth data flow between frontend and backend.</li>
            <li>Built backend features using Node.js, Express.js, and MongoDB.</li>
            <li>Implemented user authentication, form validations, and CRUD operations.</li>
            <li>Gained practical experience working across the full stack on real-world projects.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
