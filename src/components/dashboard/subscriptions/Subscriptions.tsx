"use client";

import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureListProps {
  features: string[];
}

const CircleCheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-4.5 h-4.5 text-zinc-400 shrink-0 mt-0.5 opacity-80"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <div className="bg-[#141313]/50 border border-[#262626] rounded-xl p-5 space-y-4">
    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
      Included features
    </span>
    <ul className="space-y-3.5 text-xs text-zinc-300 font-light">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CircleCheckIcon />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Subscriptions() {
  const plans = [
    {
      title: "Prime",
      price: "$29.99",
      badge: "Level Up",
      description: "Prime is our Swiss Army Knife tier. It's powerful, versatile, and built for the savvy adventurer who wants more depth, deeper intelligence, and additional capability embodied in every package.",
      features: [
        "Access to Scout AI.",
        "Generate 6 trip packages per month",
        "Additional packages - $5.00/ea",
        "Includes all premium modules",
        "Package generation available within 120 days of departure",
        "In-depth analysis of each trip with personalized adjustments.",
        "10-question post-delivery Trip Q&A session with Scout",
        "Yearly subscriptions receive 2 handcrafted, maximum Analyst oversight trips per year",
        "Tier II priority in queue.",
        "Access to members-only content.",
        "10% off all merchandise."
      ],
      isHighlighted: true,
    },
    {
      title: "Elite",
      price: "$49.99",
      badge: "All Access",
      description: "You've reached the top. Rare air. Whether that feeling is mild hypoxia or pure excitement, we'll let you decide. Elite is purpose-built for expedition leaders, dedicated overlanders, content creators, and explorers who demand the absolute best. If Prime is the Swiss Army Knife, Elite is the fully stocked toolbox—with power tools.",
      features: [
        "Access to Scout AI.",
        "Generate 10 trip packages per month",
        "Additional packages - $5.00/ea",
        "Includes all premium modules",
        "Package generation available within 180 days of departure.",
        "In-depth analysis of each trip with personalized adjustments.",
        "20-question post-delivery Trip Q&A session with Scout.",
        "Yearly subscriptions receive 5 handcrafted, maximum Analyst oversight trips per year",
        "Tier I priority in queue",
        "Access to members-only content.",
        "20% off all merchandise."
      ],
      isHighlighted: false,
    },
    {
      title: "Core",
      price: "$9.99",
      badge: "It Starts Here",
      description: "Welcome to TripTrax. We believe in uncompromising quality regardless of membership tier, so we start you off with access to Scout—our AI adventure engine—plus all the essential tools you need to get out and go. Core keeps it light and fast so you can go further.",
      features: [
        "Access to Scout AI.",
        "Generate 2 trip packages per month",
        "Additional packages - $5.00/ea",
        "Includes all basic modules.",
        "Package generation available within 30 days of departure.",
        "Basic Analyst oversight and quality control included.",
        "Tier IV priority in queue",
        "Access to members-only content."
      ],
      isHighlighted: false,
    },
    {
      title: "Plus",
      price: "$19.99",
      badge: "Go Further",
      description: "Plus is your launchpad to bigger and better things. You get more packages, more flexibility, and more guidance. If you're satisfied with what our basic modules provide, Plus is where you'll want to set up camp.",
      features: [
        "Access to Scout AI.",
        "Generate 4 trip packages per month",
        "Additional packages - $5.00/ea",
        "Includes all basic modules.",
        "Package generation available within 60 days of departure.",
        "Enhanced Analyst oversight, quality control, and guidance included.",
        "Tier III priority in queue",
        "Access to members-only content",
        "5% off all merchandise."
      ],
      isHighlighted: false,
    },
  ];

  return (
    <div className="w-full bg-[#111111] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Subscriptions Management
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-light">
          View and manage all subscription plans.
        </p>
      </div>

      {/* Subscription Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {plans.map((plan, idx) => (
          <Card 
            key={idx} 
            className={`border rounded-2xl overflow-hidden shadow-lg transition-all relative ${
              plan.isHighlighted 
                ? "border-[#FFD23F]/40" 
                : "border-[#262626]"
            }`}
            style={{
              background: plan.isHighlighted 
                ? "radial-gradient(circle at top right, rgba(255, 210, 63, 0.18) 0%, rgba(255, 210, 63, 0.02) 60%, transparent 100%), #181818" 
                : "#181818"
            }}
          >
            <CardContent className="p-6 md:p-8 space-y-6 flex flex-col justify-between h-full">
              
              {/* Card Top section */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline gap-1.5 text-white">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className="text-zinc-500 text-sm font-medium">/mo</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium pt-1">
                    {plan.badge}
                  </div>
                </div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed min-h-[72px]">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <FeatureList features={plan.features} />

              {/* Edit Plan Button */}
              <button 
                className="w-full py-2.5 rounded-xl text-sm font-semibold border border-[#FFD23F] text-[#FFD23F] bg-transparent hover:bg-[#FFD23F] hover:text-black transition-all cursor-pointer"
              >
                Edit
              </button>

            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}
