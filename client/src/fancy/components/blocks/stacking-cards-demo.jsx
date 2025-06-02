"use client"

import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

import { cn } from "@/lib/utils"
import { projects } from "@/components/ProjectData";
import StackingCards, { StackingCardItem } from "@/fancy/components/blocks/stacking-cards"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function StackingCardsDemo() {
  const containerRef = useRef(null);

  return (
    <div className="bg-white text-white" ref={containerRef}>
      <StackingCards totalCards={projects.length} scrollOptons={{ container: containerRef }}>
        <div className="relative font-bold h-[620px] w-full z-10 text-2xl md:text-7xl flex justify-center items-center text-[#ff5941] whitespace-pre">
          My Projects ↓
        </div>

        {projects.map(({ title, catagory, description, src, techStack, link, source }, index) => (
          <StackingCardItem key={index} index={index} className="h-[720px]">
            <div
              className={cn(
                getBgColor(index),
                "h-[100%] sm:h-[80%] flex-col sm:flex-row aspect-video px-7 py-7 flex w-11/12 rounded-3xl mx-auto relative outline-1 outline-white/50",
              )}
            >
              <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden mb-6 sm:mb-0 flex items-center justify-center bg-black/30">
                <img
                  src={src || "/placeholder.svg"}
                  alt={title}
                  className="object-cover w-full h-full rounded-xl"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="flex-1 flex flex-col justify-center sm:pl-8">
                <Badge variant="outline" className="w-fit mb-2 text-white border-white">
                  {catagory}
                </Badge>
                <h3 className="font-bold text-2xl mb-3">{title}</h3>
                <p className="mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-white/20 hover:bg-white/30">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20" onClick={() => window.open(link, "_blank")}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20" onClick={() => window.open(source, "_blank")}>
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </div>
  )
}

// Function to get background color based on index
function getBgColor(index) {
  const colors = [ "bg-[#000000]"]
  return colors[index % colors.length]
}
