"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Minus, 
  Navigation, 
  Layers, 
  Globe as GlobeIcon, 
  Heart,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Interface for Hikes / Trails
interface Trail {
  id: string;
  name: string;
  park: string;
  rating: number;
  difficulty: "Easy" | "Moderate" | "Hard";
  distance: string; // e.g. "4.8 km"
  duration: string; // e.g. "1.5 - 2 hr"
  lat: number;
  lng: number;
  images: string[];
}

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    distance: "All",
    activity: "All",
    difficulty: "All",
    length: "All",
  });

  // Map settings
  const [globeRadius, setGlobeRadius] = useState(240);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeMapMode, setActiveMapMode] = useState<"3d" | "2d">("3d");

  // Rotation angles (yaw and pitch)
  const [yaw, setYaw] = useState(0); // Longitude rotation
  const [pitch, setPitch] = useState(0.2); // Latitude rotation

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  // Trails data matching the system details
  const trails: Trail[] = useMemo(() => [
    {
      id: "trl-1",
      name: "Navajo Loop and Queens Garden Trail",
      park: "Bryce Canyon National Park",
      rating: 4.9,
      difficulty: "Moderate",
      distance: "4.8 km",
      duration: "Est. 1.5 - 2 hr",
      lat: 37.6,
      lng: -112.1,
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: "trl-2",
      name: "Angels Landing Trail",
      park: "Zion National Park",
      rating: 4.8,
      difficulty: "Hard",
      distance: "8.0 km",
      duration: "Est. 3 - 4 hr",
      lat: 37.2,
      lng: -112.9,
      images: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: "trl-3",
      name: "Yosemite Falls Trail",
      park: "Yosemite National Park",
      rating: 4.9,
      difficulty: "Hard",
      distance: "11.6 km",
      duration: "Est. 6 - 8 hr",
      lat: 37.8,
      lng: -119.5,
      images: [
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: "trl-4",
      name: "Swiss Alps Scenic Panorama",
      park: "Jungfrau Region",
      rating: 4.9,
      difficulty: "Moderate",
      distance: "12.4 km",
      duration: "Est. 4 - 5 hr",
      lat: 46.5,
      lng: 8.5,
      images: [
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: "trl-5",
      name: "Mt. Everest Base Camp Hike",
      park: "Sagarmatha National Park",
      rating: 4.9,
      difficulty: "Hard",
      distance: "130 km",
      duration: "Est. 12 days",
      lat: 27.9,
      lng: 86.9,
      images: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: "trl-6",
      name: "Milford Track",
      park: "Fiordland National Park",
      rating: 4.9,
      difficulty: "Moderate",
      distance: "53.5 km",
      duration: "Est. 4 days",
      lat: -44.8,
      lng: 167.8,
      images: [
        "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=300&q=80"
      ]
    }
  ], []);

  // Simplified continent lat/lng coordinates for high-tech vector rendering
  const continents = useMemo(() => [
    // North America
    [[-168, 65], [-120, 70], [-80, 75], [-60, 75], [-50, 60], [-60, 50], [-80, 40], [-80, 25], [-99, 15], [-110, 30], [-125, 48], [-168, 65]],
    // South America
    [[-80, 12], [-70, 10], [-40, -5], [-35, -5], [-40, -20], [-60, -45], [-70, -53], [-80, -5], [-81, 5], [-80, 12]],
    // Eurasia (Europe & Asia)
    [[-10, 36], [0, 44], [10, 58], [25, 70], [40, 75], [60, 70], [80, 75], [120, 75], [160, 70], [170, 60], [140, 50], [100, 35], [100, 20], [70, 10], [60, 25], [35, 30], [20, 40], [-10, 36]],
    // Africa
    [[-17, 32], [-5, 36], [10, 30], [30, 30], [50, 11], [40, -15], [20, -34], [10, -10], [-10, 5], [-17, 32]],
    // Australia
    [[113, -26], [115, -35], [138, -35], [153, -28], [143, -10], [130, -10], [113, -26]],
    // Greenland
    [[-70, 76], [-60, 83], [-10, 81], [-40, 60], [-70, 76]]
  ], []);

  // Map Labels representing countries, oceans and cities as shown in the screenshot
  const mapLabels = useMemo(() => [
    // Oceans (italic, blue-grey styling)
    { text: "North Pacific Ocean", lat: 35, lng: -155, type: "ocean" },
    { text: "North Atlantic Ocean", lat: 32, lng: -40, type: "ocean" },
    { text: "South Atlantic Ocean", lat: -20, lng: -15, type: "ocean" },
    { text: "South Pacific Ocean", lat: -25, lng: -120, type: "ocean" },
    { text: "Indian Ocean", lat: -15, lng: 75, type: "ocean" },
    { text: "Bering Sea", lat: 58, lng: -175, type: "ocean" },
    
    // Countries / Large regions
    { text: "Canada", lat: 58, lng: -101, type: "country" },
    { text: "United States", lat: 38, lng: -97, type: "country" },
    { text: "Mexico", lat: 23, lng: -102, type: "country" },
    { text: "Greenland", lat: 72, lng: -40, type: "country" },
    { text: "Iceland", lat: 64, lng: -18, type: "country" },
    { text: "Sweden", lat: 62, lng: 18, type: "country" },
    { text: "Lithuania", lat: 55, lng: 24, type: "country" },
    { text: "Spain", lat: 40, lng: -3.7, type: "country" },
    { text: "Portugal", lat: 39, lng: -8, type: "country" },
    { text: "Morocco", lat: 31, lng: -7, type: "country" },
    { text: "Mauritania", lat: 21, lng: -10, type: "country" },
    { text: "Svalbard", lat: 78, lng: 16, type: "country" },
    { text: "Cuba", lat: 21.5, lng: -77.7, type: "country" },
    { text: "Bahamas", lat: 24, lng: -76, type: "country" },
    
    // Cities / Key Locations (with small dots)
    { text: "Chicago", lat: 41.8, lng: -87.6, type: "city" },
    { text: "Houston", lat: 29.7, lng: -95.3, type: "city" },
    { text: "New York", lat: 40.7, lng: -74.0, type: "city" },
    { text: "Boston", lat: 42.3, lng: -71.0, type: "city" },
    { text: "Toronto", lat: 43.6, lng: -79.3, type: "city" },
    { text: "Guatemala", lat: 14.6, lng: -90.5, type: "city" },
    { text: "Bogota", lat: 4.7, lng: -74.0, type: "city" },
    { text: "Caracas", lat: 10.5, lng: -66.9, type: "city" },
    { text: "Medellin", lat: 6.2, lng: -75.6, type: "city" },
    { text: "Cali", lat: 3.4, lng: -76.5, type: "city" },
    { text: "Quito", lat: -0.2, lng: -78.5, type: "city" },
    { text: "Lima", lat: -12.0, lng: -77.0, type: "city" },
    { text: "Venezuela", lat: 6.4, lng: -66.5, type: "country" },
    { text: "Guyana", lat: 4.8, lng: -58.9, type: "country" },
    { text: "Colombia", lat: 4.5, lng: -72.9, type: "country" },
    { text: "Ecuador", lat: -1.8, lng: -78.1, type: "country" },
    { text: "Peru", lat: -9.1, lng: -75.0, type: "country" },
    { text: "Brazil", lat: -14.2, lng: -51.9, type: "country" },
    { text: "Bolivia", lat: -16.2, lng: -63.5, type: "country" },
    { text: "Uruguay", lat: -32.5, lng: -55.7, type: "country" },
    { text: "Chile", lat: -35.6, lng: -71.5, type: "country" },
    { text: "Argentina", lat: -38.4, lng: -63.6, type: "country" },
    { text: "South America", lat: -21.0, lng: -59.0, type: "continent_label" },
  ], []);

  // Filtered Trails based on search
  const filteredTrails = useMemo(() => {
    return trails.filter(trail => 
      trail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trail.park.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [trails, searchTerm]);

  // Image slider states for the card carousel
  const [activeImgIndexes, setActiveImgIndexes] = useState<Record<string, number>>({});

  const nextImage = (trailId: string, maxIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndexes(prev => ({
      ...prev,
      [trailId]: ((prev[trailId] || 0) + 1) % maxIdx
    }));
  };

  const prevImage = (trailId: string, maxIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndexes(prev => ({
      ...prev,
      [trailId]: ((prev[trailId] || 0) - 1 + maxIdx) % maxIdx
    }));
  };

  // 3D Canvas Globe Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let localYaw = yaw;

    // Handle Resize
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const R = globeRadius;

      // Auto-rotation
      if (autoRotate && !isDraggingRef.current) {
        localYaw += 0.002;
      }

      // 1. Draw Starry/Space Background
      ctx.fillStyle = "#0c0d12";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Star particles
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      for (let i = 0; i < 60; i++) {
        const x = (Math.sin(i * 999) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(i * 555) * 0.5 + 0.5) * canvas.height;
        const size = (Math.sin(i * 123 + localYaw * 2) * 0.5 + 0.5) * 1.5 + 0.5;
        ctx.fillRect(x, y, size, size);
      }

      // Convert lat/lng to 3D Cartesian coordinates, apply rotation matrix, and project
      const projectPoint = (lat: number, lng: number) => {
        // Convert to radians
        const radLat = (lat * Math.PI) / 180;
        // Adjust longitude with the yaw offset
        const radLng = ((lng * Math.PI) / 180) + localYaw;

        // Base 3D Coordinates
        const x1 = R * Math.cos(radLat) * Math.sin(radLng);
        const y1 = -R * Math.sin(radLat);
        const z1 = R * Math.cos(radLat) * Math.cos(radLng);

        // Apply pitch (latitude rotation)
        const xRot = x1;
        const yRot = y1 * Math.cos(pitch) - z1 * Math.sin(pitch);
        const zRot = y1 * Math.sin(pitch) + z1 * Math.cos(pitch);

        return { x: xRot, y: yRot, z: zRot };
      };

      // 2. Draw Sphere Outline and Glowing Atmosphere
      const atmosphereGlow = ctx.createRadialGradient(cx, cy, R - 15, cx, cy, R + 45);
      atmosphereGlow.addColorStop(0, "rgba(59, 130, 246, 0.15)");
      atmosphereGlow.addColorStop(0.5, "rgba(56, 215, 146, 0.08)");
      atmosphereGlow.addColorStop(0.8, "rgba(59, 130, 246, 0.03)");
      atmosphereGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = atmosphereGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, R + 45, 0, 2 * Math.PI);
      ctx.fill();

      // Earth Body Shadow/Glow
      const oceanGradient = ctx.createRadialGradient(
        cx - R / 3,
        cy - R / 3,
        10,
        cx,
        cy,
        R
      );
      oceanGradient.addColorStop(0, "#1a2c42");
      oceanGradient.addColorStop(0.5, "#0b1523");
      oceanGradient.addColorStop(1, "#070c12");

      ctx.fillStyle = oceanGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 2 * Math.PI);
      ctx.fill();

      // Outer Ring Border
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 2 * Math.PI);
      ctx.stroke();

      // 3. Draw Grid/Graticule Lines (Latitude and Longitude grid)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;

      // Draw Longitude lines
      for (let l = 0; l < 360; l += 30) {
        ctx.beginPath();
        let first = true;
        for (let lt = -90; lt <= 90; lt += 5) {
          const pt = projectPoint(lt, l);
          if (pt.z > -10) { // Only draw front side lines
            if (first) {
              ctx.moveTo(cx + pt.x, cy + pt.y);
              first = false;
            } else {
              ctx.lineTo(cx + pt.x, cy + pt.y);
            }
          }
        }
        ctx.stroke();
      }

      // Draw Latitude lines
      for (let lt = -75; lt <= 75; lt += 15) {
        ctx.beginPath();
        let first = true;
        for (let l = 0; l <= 360; l += 10) {
          const pt = projectPoint(lt, l);
          if (pt.z > -10) {
            if (first) {
              ctx.moveTo(cx + pt.x, cy + pt.y);
              first = false;
            } else {
              ctx.lineTo(cx + pt.x, cy + pt.y);
            }
          }
        }
        ctx.stroke();
      }

      // 4. Draw Continent Outlines
      ctx.strokeStyle = "rgba(56, 215, 146, 0.4)";
      ctx.lineWidth = 1.5;
      continents.forEach((polygon) => {
        ctx.beginPath();
        let first = true;
        polygon.forEach(([lng, lat]) => {
          const pt = projectPoint(lat, lng);
          if (pt.z > 0) { // On the front hemisphere
            if (first) {
              ctx.moveTo(cx + pt.x, cy + pt.y);
              first = false;
            } else {
              ctx.lineTo(cx + pt.x, cy + pt.y);
            }
          } else {
            first = true; // Break line path if it goes to back side
          }
        });
        ctx.stroke();
      });

      // 4.5 Draw Map Labels (Countries, Oceans, Cities)
      mapLabels.forEach((label) => {
        const pt = projectPoint(label.lat, label.lng);
        if (pt.z > 0) { // Front side of the globe
          const x = cx + pt.x;
          const y = cy + pt.y;

          if (label.type === "ocean") {
            ctx.font = "italic 9px sans-serif";
            ctx.fillStyle = "rgba(100, 150, 200, 0.4)";
            ctx.textAlign = "center";
            ctx.fillText(label.text, x, y);
          } else if (label.type === "country" || label.type === "continent" || label.type === "continent_label") {
            ctx.font = "bold 9.5px sans-serif";
            ctx.fillStyle = label.type === "continent_label" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.55)";
            ctx.textAlign = "center";
            ctx.fillText(label.text, x, y);
          } else if (label.type === "city") {
            // Draw a tiny dot for city position
            ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
            ctx.fill();

            // Draw city text offset slightly
            ctx.font = "400 8.5px sans-serif";
            ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
            ctx.textAlign = "left";
            ctx.fillText(label.text, x + 4, y + 2.5);
          }
        }
      });

      // 5. Draw Trail Pins/Markers
      filteredTrails.forEach((trail, idx) => {
        const pt = projectPoint(trail.lat, trail.lng);
        if (pt.z > 0) { // Front side of the globe
          const x = cx + pt.x;
          const y = cy + pt.y;

          // Glowing pulse ring
          const pulseRadius = 12 + Math.sin(localYaw * 10 + idx) * 4;
          ctx.strokeStyle = "rgba(255, 210, 63, 0.25)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, pulseRadius, 0, 2 * Math.PI);
          ctx.stroke();

          // Outer yellow outline
          ctx.strokeStyle = "#FFD23F";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, 2 * Math.PI);
          ctx.stroke();

          // Inner yellow solid center
          ctx.fillStyle = "#FFD23F";
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 2 * Math.PI);
          ctx.fill();

          // Label Box
          ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
          ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
          ctx.lineWidth = 1;

          const labelText = idx % 2 === 0 ? `${idx + 3} trails` : `${(idx + 1.2).toFixed(1)}km`;
          ctx.font = "bold 9px sans-serif";
          const textWidth = ctx.measureText(labelText).width;
          const boxW = textWidth + 12;
          const boxH = 16;
          const boxX = x - boxW / 2;
          const boxY = y - 24;

          // Rounded box container
          ctx.beginPath();
          ctx.roundRect(boxX, boxY, boxW, boxH, 4);
          ctx.fill();
          ctx.stroke();

          // Tiny pointer triangle
          ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
          ctx.beginPath();
          ctx.moveTo(x - 3, boxY + boxH);
          ctx.lineTo(x + 3, boxY + boxH);
          ctx.lineTo(x, boxY + boxH + 3);
          ctx.closePath();
          ctx.fill();

          // Label text
          ctx.fillStyle = "#000000";
          ctx.fillText(labelText, boxX + 6, boxY + 11);
        }
      });

      // Keep yaw updated in reference for mouse rotation tracking
      setYaw(localYaw);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [globeRadius, autoRotate, pitch, filteredTrails, continents, mapLabels]);

  // Drag and Rotate Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    previousMousePosition.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;

    setYaw(prev => prev + deltaX * 0.005);
    setPitch(prev => Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, prev - deltaY * 0.005)));

    previousMousePosition.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const zoomIn = () => setGlobeRadius(prev => Math.min(400, prev + 25));
  const zoomOut = () => setGlobeRadius(prev => Math.max(120, prev - 25));

  return (
    <div className="w-full min-h-[calc(100vh-96px)] md:h-[calc(100vh-96px)] flex flex-col md:flex-row relative bg-[#0c0d12] overflow-hidden">
      
      {/* 3D Globe Canvas Map */}
      <div className="relative md:absolute md:inset-0 w-full h-[400px] md:h-full z-0 shrink-0">
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full h-full cursor-grab active:cursor-grabbing animate-fade-in"
        />
      </div>

      {/* Top Floating Filter Bar */}
      <div className="absolute top-4 left-[360px] right-[100px] z-20 pointer-events-none hidden md:flex items-center gap-3">
        <div className="flex items-center gap-2.5 pointer-events-auto bg-[#181818]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#262626] shadow-lg">
          <button className="text-zinc-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all">
            Distance away <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center gap-2.5 pointer-events-auto bg-[#181818]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#262626] shadow-lg">
          <button className="text-zinc-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all">
            Activity <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center gap-2.5 pointer-events-auto bg-[#181818]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#262626] shadow-lg">
          <button className="text-zinc-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all">
            Difficulty <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center gap-2.5 pointer-events-auto bg-[#181818]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#262626] shadow-lg">
          <button className="text-zinc-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all">
            Length <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center gap-2.5 pointer-events-auto bg-[#181818]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#262626] shadow-lg">
          <button className="text-[#FFD23F] hover:text-[#ffe066] text-xs font-bold flex items-center gap-2 transition-all">
            <SlidersHorizontal className="w-3.5 h-3.5" /> All filters
          </button>
        </div>
      </div>

      {/* Left Explore Trails Sidebar Panel */}
      <div 
        className={`relative md:absolute z-10 w-full md:w-[340px] flex flex-col p-4 md:p-0 md:top-4 md:bottom-4 md:left-4 transition-all duration-300 shrink-0 ${
          isSidebarCollapsed ? "h-auto overflow-hidden" : "h-[450px] md:h-[calc(100%-32px)]"
        }`}
      >
        <Card className="bg-[#111111]/95 backdrop-blur-md border border-[#262626] rounded-2xl flex flex-col h-full overflow-hidden shadow-2xl">
          
          {/* Card Header */}
          <div className="p-4 flex items-center justify-between border-b border-[#262626] shrink-0">
            <span className="text-sm font-semibold text-zinc-100 uppercase tracking-wide">
              Explore trails
            </span>
            <button 
              onClick={() => setIsSidebarCollapsed(prev => !prev)}
              className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition cursor-pointer"
            >
              {isSidebarCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>

          {!isSidebarCollapsed && (
            <>
              {/* Search & Statistics */}
              <div className="p-4 space-y-4 border-b border-[#262626] shrink-0">
                <div className="relative w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search trails..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-[#181818] border border-[#262626] rounded-xl text-zinc-200 text-xs placeholder-zinc-500 focus:outline-none focus:border-[#FFD23F] focus:ring-1 focus:ring-[#FFD23F] transition-all"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
                  <span>{filteredTrails.length}+ trails</span>
                  <button className="flex items-center gap-1 hover:text-white transition">
                    AllTrails sort <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Trails List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {filteredTrails.map((trail) => {
                  const imgIdx = activeImgIndexes[trail.id] || 0;
                  const currentImg = trail.images[imgIdx];
                  const hasMultipleImgs = trail.images.length > 1;

                  return (
                    <div key={trail.id} className="group relative bg-[#181818] border border-[#262626] rounded-xl overflow-hidden shadow-md flex flex-col hover:border-zinc-700 transition-all duration-300">
                      
                      {/* Trail Image Slider */}
                      <div className="relative h-40 w-full overflow-hidden bg-zinc-900 shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={currentImg} 
                          alt={trail.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Favorite Heart Button */}
                        <button className="absolute top-2.5 right-2.5 p-1.5 bg-black/40 backdrop-blur-md hover:bg-black/60 rounded-full text-white transition cursor-pointer">
                          <Heart className="w-4 h-4 hover:fill-red-500 hover:text-red-500 transition-colors" />
                        </button>

                        {/* Arrow Carousel Controls */}
                        {hasMultipleImgs && (
                          <>
                            <button 
                              onClick={(e) => prevImage(trail.id, trail.images.length, e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/40 hover:bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition cursor-pointer"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              onClick={(e) => nextImage(trail.id, trail.images.length, e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/40 hover:bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition cursor-pointer"
                            >
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </>
                        )}

                        {/* Dot Indicators */}
                        {hasMultipleImgs && (
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                            {trail.images.map((_, idx) => (
                              <span 
                                key={idx} 
                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                  idx === imgIdx ? "bg-white scale-125" : "bg-white/40"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Trail Details */}
                      <div className="p-3.5 space-y-2">
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-semibold text-zinc-100 line-clamp-1 group-hover:text-[#FFD23F] transition-colors">
                            {trail.name}
                          </h4>
                          <p className="text-zinc-500 text-[11px] font-medium">{trail.park}</p>
                        </div>
                        
                        <div className="flex items-center flex-wrap gap-2 text-[11px] text-zinc-400 font-light pt-0.5">
                          <span className="flex items-center gap-1 font-semibold text-zinc-200">
                            ★ {trail.rating}
                          </span>
                          <span>•</span>
                          <span className={`${
                            trail.difficulty === "Easy" ? "text-green-400" :
                            trail.difficulty === "Moderate" ? "text-[#FFD23F]" : "text-red-400"
                          } font-semibold`}>
                            {trail.difficulty}
                          </span>
                          <span>•</span>
                          <span>{trail.distance}</span>
                          <span>•</span>
                          <span>{trail.duration}</span>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </>
          )}

        </Card>
      </div>

      {/* Right Floating Map Toolbar Controls */}
      <div className="absolute right-4 top-[200px] md:top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
        
        {/* Layer Toggle */}
        <button className="w-10 h-10 bg-[#181818]/95 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-[#262626] rounded-full shadow-lg flex items-center justify-center transition cursor-pointer">
          <Layers className="w-4.5 h-4.5" />
        </button>

        {/* 3D View Toggle / Rotation Toggle */}
        <button 
          onClick={() => setAutoRotate(prev => !prev)}
          className={`w-10 h-10 border rounded-full shadow-lg flex items-center justify-center transition cursor-pointer text-xs font-bold ${
            autoRotate 
              ? "bg-[#FFD23F] text-black border-[#FFD23F] hover:bg-[#ffe066]" 
              : "bg-[#181818]/95 hover:bg-zinc-800 text-zinc-300 hover:text-white border-[#262626]"
          }`}
          title={autoRotate ? "Pause Auto Rotation" : "Auto Rotate Globe"}
        >
          3D
        </button>

        {/* Zoom In */}
        <button 
          onClick={zoomIn}
          className="w-10 h-10 bg-[#181818]/95 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-[#262626] rounded-full shadow-lg flex items-center justify-center transition cursor-pointer"
        >
          <Plus className="w-4.5 h-4.5" />
        </button>

        {/* Zoom Out */}
        <button 
          onClick={zoomOut}
          className="w-10 h-10 bg-[#181818]/95 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-[#262626] rounded-full shadow-lg flex items-center justify-center transition cursor-pointer"
        >
          <Minus className="w-4.5 h-4.5" />
        </button>

        {/* Locate me */}
        <button 
          onClick={() => {
            setYaw(0);
            setPitch(0.2);
          }}
          className="w-10 h-10 bg-[#181818]/95 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-[#262626] rounded-full shadow-lg flex items-center justify-center transition cursor-pointer"
          title="Recenter Map View"
        >
          <Navigation className="w-4.5 h-4.5 transform rotate-45" />
        </button>

      </div>

    </div>
  );
}