import React from "react";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Zap } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* row 1: sla and status card */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md p-6 sm:p-7 shadow-xl">
        <h3 className="text-xl font-bold text-white tracking-tight mb-2">
          Enterprise Response SLA
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
          Our field systems engineers prioritize commercial inquiries, providing
          initial load-profile telemetry models and feasibility estimates
          within one business day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* column 1: response time sla */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">
                &lt; 24h Response Time
              </span>
              <span className="text-[11px] text-zinc-500">
                Direct engineer assignment
              </span>
            </div>
          </div>

          {/* column 2: security & nda */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">
                NDA & Security First
              </span>
              <span className="text-[11px] text-zinc-500">
                Encrypted audit logs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* row 2: direct contact channels */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md p-6 sm:p-7 shadow-xl flex flex-col gap-5">
        <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-primary">
          Direct Channels
        </h4>

        <div className="space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-medium text-zinc-400 block">
                Engineering Desk
              </span>
              <a
                href="mailto:engineering@voltpulse.io"
                className="text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                engineering@voltpulse.io
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-medium text-zinc-400 block">
                Telemetry Support Hotline
              </span>
              <a
                href="tel:+18005558658"
                className="text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                +1 (800) 555-VOLT
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-medium text-zinc-400 block">
                Global Operations
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                450 Energy Way, Suite 800, Silicon Grid Hub, CA 94107
              </p>
            </div>
          </div>
        </div>

        {/* technical audit badge */}
        <div className="mt-2 p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 flex items-center gap-3 text-xs text-zinc-400">
          <Zap className="w-4 h-4 text-primary shrink-0" />
          <span>
            Need on-site hardware installation? Inquire about certified DIN-rail
            contractor deployment.
          </span>
        </div>
      </div>
    </div>
  );
}
