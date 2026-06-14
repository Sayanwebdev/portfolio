"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Shield, Play, RotateCcw, AlertTriangle } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

interface LogLine {
  text: string;
  type: "input" | "output" | "error" | "success" | "system";
}

const INITIAL_HISTORY: LogLine[] = [
  { text: "Welcome to Sayan's DevOps Command Center v1.0.0", type: "system" },
  { text: "Type 'help' to see the list of available commands.", type: "output" },
  { text: "", type: "output" },
];

export function DevopsTerminalSection() {
  const [history, setHistory] = useState<LogLine[]>(INITIAL_HISTORY);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isPipelineRunning, setIsPipelineRunning] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom of terminal container only (preventing main screen jump)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // Focus terminal input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    // Add command to log
    const newHistory = [...history, { text: `sayan@portfolio:~$ ${cmd}`, type: "input" as const }];
    
    // Add command to arrow history
    const updatedCmdHistory = [cmd, ...commandHistory];
    setCommandHistory(updatedCmdHistory);
    setHistoryIndex(-1);

    // Command parser
    const cmdLower = cmd.toLowerCase();
    const parts = cmdLower.split(" ");
    const primaryCmd = parts[0];

    let responseLines: LogLine[] = [];

    switch (primaryCmd) {
      case "help":
        responseLines = [
          { text: "Available commands in this shell:", type: "system" },
          { text: "  help        - Displays this instructions menu.", type: "output" },
          { text: "  clear       - Clears the terminal screen.", type: "output" },
          { text: "  about       - Displays biography and educational credentials.", type: "output" },
          { text: "  skills      - Outputs Sayan's core skill matrix.", type: "output" },
          { text: "  projects    - Lists featured applications.", type: "output" },
          { text: "  sysinfo     - Queries host node kernel and system stats.", type: "output" },
          { text: "  docker ps   - Inspects status of running Docker containers.", type: "output" },
          { text: "  pipeline    - Triggers the automated CI/CD deployment pipeline.", type: "output" },
        ];
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "about":
        responseLines = [
          { text: "🧬 BIOGRAPHY & BACKGROUND", type: "system" },
          { text: "========================================", type: "output" },
          { text: "Name:        Sayan Mondal", type: "output" },
          { text: "Degree:      B.Tech in ECE (4th Year)", type: "output" },
          { text: "College:     Dr. B. C. Roy Engineering College, Durgapur", type: "output" },
          { text: "Focus:       Full Stack Web Development, Python, and DevOps engineering.", type: "output" },
          { text: "Project:     Predictive Energy Management System (PEMS) utilizing ESP32 & LSTM.", type: "output" },
        ];
        break;

      case "skills":
        responseLines = [
          { text: "📊 TECHNICAL SKILLS MATRIX", type: "system" },
          { text: "========================================", type: "output" },
          { text: "LANGUAGES:   JavaScript (ES6), TypeScript, Python, Java, SQL", type: "output" },
          { text: "FRAMEWORKS:  React, Next.js, Node.js, Tailwind CSS", type: "output" },
          { text: "DEVOPS:      Git/GitHub Actions, CI/CD pipelines, Linux Shell", type: "output" },
          { text: "HARDWARE/ML: ESP32 IoT, TensorFlow Lite, LSTM models, MATLAB", type: "output" },
        ];
        break;

      case "projects":
        responseLines = [
          { text: "🚀 FEATURED PROJECTS", type: "system" },
          { text: "========================================", type: "output" },
          { text: "1. Predictive Energy Management System (PEMS)", type: "output" },
          { text: "   * Smart metering, energy forecasts, solar/battery auto-routing.", type: "output" },
          { text: "   * Stack: ESP32, Python, LSTM, TensorFlow Lite", type: "output" },
          { text: "2. Personal Portfolio Website", type: "output" },
          { text: "   * High-performance static web app with custom DevOps controls.", type: "output" },
          { text: "   * Stack: Next.js, Tailwind v4, Framer Motion, Resend", type: "output" },
          { text: "3. Habit Tracker Pro", type: "output" },
          { text: "   * Task automation and trend visualizations with persistence.", type: "output" },
          { text: "   * Stack: JS, HTML5 Canvas, LocalStorage", type: "output" },
        ];
        break;

      case "sysinfo":
        responseLines = [
          { text: "🖥️ SYSTEM ENVIRONMENT REPORT", type: "system" },
          { text: "========================================", type: "output" },
          { text: "OS Host:      Alpine Linux v3.19.1", type: "output" },
          { text: "Kernel:       Linux 6.1.0-21-amd64 #1 SMP PREEMPT_DYNAMIC", type: "output" },
          { text: "CPU Arch:     x86_64 (Intel Core i7 12th Gen)", type: "output" },
          { text: "Node Ver:     v20.11.0", type: "output" },
          { text: "Memory:       Usage 5.12 GB / 16.00 GB (32%)", type: "output" },
          { text: "Uptime:       18 days, 4 hours, 12 minutes", type: "output" },
          { text: "SSL Cert:     Valid (Issuer: Let's Encrypt, Expires in 72 days)", type: "output" },
        ];
        break;

      case "docker":
        if (parts[1] === "ps") {
          responseLines = [
            { text: "CONTAINER ID   IMAGE                 COMMAND                  CREATED         STATUS         PORTS                    NAMES", type: "system" },
            { text: "e7d23a49f8b1   sayan-portfolio:web   \"bun run start\"          3 days ago      Up 4 hours     0.0.0.0:3000->3000/tcp   portfolio-web", type: "output" },
            { text: "9e1c2e48fa20   postgres:16-alpine    \"docker-entrypoint.s…\"   2 weeks ago     Up 2 days      0.0.0.0:5432->5432/tcp   postgres-db", type: "output" },
            { text: "d3b4e5f6a7b8   redis:7-alpine        \"docker-entrypoint.s…\"   2 weeks ago     Up 2 days      6379/tcp                 redis-cache", type: "output" },
          ];
        } else {
          responseLines = [
            { text: "Usage: docker ps (to view active Docker containers)", type: "error" },
          ];
        }
        break;

      case "pipeline":
        triggerPipeline();
        setInputVal("");
        return;

      default:
        responseLines = [
          { text: `sh: command not found: ${primaryCmd}. Type 'help' for support.`, type: "error" },
        ];
        break;
    }

    setHistory([...newHistory, ...responseLines]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < commandHistory.length) {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const prevIndex = historyIndex - 1;
      if (prevIndex >= 0) {
        setHistoryIndex(prevIndex);
        setInputVal(commandHistory[prevIndex]);
      } else {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  // Automated pipeline simulation logic
  const triggerPipeline = async () => {
    if (isPipelineRunning) return;
    setIsPipelineRunning(true);

    const steps: LogLine[] = [
      { text: "sayan@portfolio:~$ pipeline", type: "input" },
      { text: "🚀 Trigerring CI/CD Deployment Pipeline...", type: "system" },
      { text: "🔄 [1/5] Fetching repository references (main branch)...", type: "output" },
      { text: "   👉 Fetch success: commit 'feat: optimize layout & devops UI (e2a48b1)'", type: "success" },
      { text: "📦 [2/5] Initializing containerized builder workspace...", type: "output" },
      { text: "   👉 Image pulled: oven/bun:latest (alpine-based node environment)", type: "success" },
      { text: "🧹 [3/5] Installing dependencies & executing static lints...", type: "output" },
      { text: "   👉 bun install --frozen-lockfile completed (114 packages resolved)", type: "success" },
      { text: "   👉 bun run lint: 0 errors, 0 warnings (ESLint check passed)", type: "success" },
      { text: "🛠️ [4/5] Executing production Next.js compiler target...", type: "output" },
      { text: "   👉 compiled static bundles successfully in 4.8s", type: "success" },
      { text: "   👉 route checks: '/' (Static), '/api/contact' (Serverless)", type: "success" },
      { text: "☁️ [5/5] Launching zero-downtime blue-green container deploy...", type: "output" },
      { text: "   👉 Health check status: 200 OK (verification success)", type: "success" },
      { text: "🎉 Pipeline completed! Portfolio is live at: https://portfolio.sayan.qzz.io", type: "success" },
    ];

    setHistory((prev) => [...prev, { text: "sayan@portfolio:~$ pipeline", type: "input" }]);
    
    // Output steps step-by-step
    let currentHistory: LogLine[] = [...history, { text: "sayan@portfolio:~$ pipeline", type: "input" }];
    for (let i = 1; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      currentHistory = [...currentHistory, steps[i]];
      setHistory(currentHistory);
    }
    
    setIsPipelineRunning(false);
  };

  return (
    <section id="devops" className="py-20 sm:py-24 bg-card/10 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-3">
          <BlurFade delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Terminal className="h-4 w-4" /> DevOps Playground
            </span>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Interactive DevOps{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Terminal
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Interact directly with a simulated Alpine Linux shell. Run diagnostics, check running containers, or execute a mock CI/CD pipeline check.
            </p>
          </BlurFade>
        </div>

        {/* Terminal Window */}
        <BlurFade delay={0.4}>
          <div 
            onClick={focusInput}
            className="w-full bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed relative flex flex-col h-[450px] cursor-text"
          >
            {/* Window Topbar */}
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between select-none">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors" />
              </div>
              <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-emerald-500" />
                sayan@portfolio:~ (alpine-sh)
              </span>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-slate-900/40 border-b border-slate-800/80 px-4 py-2 flex flex-wrap items-center gap-2 select-none">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Quick Commands:</span>
              <button 
                onClick={(e) => { e.stopPropagation(); setInputVal("sysinfo"); }}
                className="text-xs px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              >
                sysinfo
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setInputVal("docker ps"); }}
                className="text-xs px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              >
                docker ps
              </button>
              <button 
                disabled={isPipelineRunning}
                onClick={(e) => { e.stopPropagation(); triggerPipeline(); }}
                className="text-xs px-2.5 py-0.5 rounded bg-primary/25 border border-primary/40 text-primary-foreground hover:bg-primary/40 transition-colors disabled:opacity-50 flex items-center gap-1 cursor-pointer"
              >
                <Play className="h-3 w-3 text-pink-400 fill-pink-400" /> Run Pipeline
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setHistory(INITIAL_HISTORY); }}
                className="text-xs px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors ml-auto flex items-center gap-1 cursor-pointer"
                title="Reset console"
              >
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            </div>

            {/* Console Output Logs Area */}
            <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-2.5 scrollbar-thin">
              {history.map((line, index) => {
                if (line.type === "input") {
                  return (
                    <div key={index} className="text-slate-200 font-semibold">
                      {line.text}
                    </div>
                  );
                } else if (line.type === "error") {
                  return (
                    <div key={index} className="text-rose-400 flex items-start gap-1">
                      <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{line.text}</span>
                    </div>
                  );
                } else if (line.type === "success") {
                  return (
                    <div key={index} className="text-emerald-400">
                      {line.text}
                    </div>
                  );
                } else if (line.type === "system") {
                  return (
                    <div key={index} className="text-purple-400 font-semibold">
                      {line.text}
                    </div>
                  );
                }
                return (
                  <div key={index} className="text-slate-300 whitespace-pre-wrap">
                    {line.text}
                  </div>
                );
              })}
            </div>

            {/* Prompt Form */}
            <form 
              onSubmit={handleCommandSubmit}
              className="bg-slate-900 border-t border-slate-800 px-4 py-3 flex items-center gap-1.5"
            >
              <span className="text-purple-400 font-bold select-none">sayan@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-0 outline-none p-0 text-slate-100 font-mono text-sm focus:ring-0 placeholder:text-slate-600 focus:outline-none"
                placeholder="Type 'help' and press Enter..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                disabled={isPipelineRunning}
              />
              <span className="text-xs text-slate-500 hidden sm:inline select-none">Enter ↵</span>
            </form>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
