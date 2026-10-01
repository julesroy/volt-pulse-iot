"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/data/about";
import { Department } from "@/types/about";
import Badge from "@/components/ui/Badge";
import { ExternalLink, Globe } from "lucide-react";

export default function TeamSection() {
  const [selectedDept, setSelectedDept] = useState<"All" | Department>("All");

  const filteredMembers =
    selectedDept === "All"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <section className="flex flex-col gap-8">
      {/* row 1: section header and subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col items-start max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
            Leadership & Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Built by Power Systems Specialists
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A cross-disciplinary team of high-voltage electrical engineers, distributed systems
            architects, and industrial telemetry researchers.
          </p>
        </div>

        {/* row 1 column 2: department filter buttons */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {(["All", "Leadership", "Engineering", "Research"] as const).map((dept) => {
            const isActive = selectedDept === dept;
            return (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-zinc-950 shadow-[0_0_16px_rgba(0,207,111,0.2)]"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>
      </div>

      {/* row 2: team members responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          /* column item: team member card */
          <motion.div
            key={member.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between backdrop-blur-sm hover:border-zinc-700 transition-colors"
          >
            <div>
              {/* top avatar and social links */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-primary font-mono font-bold text-base shadow-inner">
                  {member.initials}
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md hover:bg-zinc-800 hover:text-white transition-colors"
                      aria-label={`${member.name} Profile`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {member.githubUrl && (
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md hover:bg-zinc-800 hover:text-white transition-colors"
                      aria-label={`${member.name} Research`}
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* member names and role */}
              <div className="mb-3">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-emerald-400 mt-0.5">
                  {member.role}
                </p>
              </div>

              {/* bio */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {member.bio}
              </p>
            </div>

            {/* expertise tags */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
              {member.expertise.map((tag) => (
                <Badge
                  key={tag}
                  variant="zinc"
                  className="text-[11px] font-mono"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
