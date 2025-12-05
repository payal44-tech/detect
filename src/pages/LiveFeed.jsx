import React from 'react';

export default function LiveFeed() {
    return (
        <div className="flex flex-col h-full bg-black">
            <div className="flex-1 relative">
                {/* Main Video View */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Simulated Feed */}
                    <div className="text-center">
                        <div className="w-20 h-20 border-4 border-slate-700 border-t-primary rounded-full animate-spin mb-4 mx-auto"></div>
                        <p className="text-slate-500 font-mono tracking-widest">ESTABLISHING SECURE CONNECTION...</p>
                    </div>
                </div>

                {/* Overlays */}
                <div className="absolute top-6 left-6 flex items-center space-x-4">
                    <div className="bg-red-600/90 text-white px-3 py-1 rounded text-xs font-bold animate-pulse">LIVE</div>
                    <div className="text-white/80 font-mono text-sm">CAM-01 • MAIN ENTRY</div>
                </div>
                <div className="absolute top-6 right-6 text-white/80 font-mono text-sm">
                    {new Date().toLocaleTimeString()}
                </div>
            </div>

            {/* Camera Controls Footer */}
            <div className="h-24 bg-surface border-t border-slate-700 flex items-center justify-center space-x-8">
                <button className="flex flex-col items-center space-y-1 text-slate-400 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span className="text-xs">Snapshot</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-slate-400 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center transform hover:scale-105 transition-transform">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    </div>
                    <span className="text-xs">Talk</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-slate-400 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-xs">Playback</span>
                </button>
            </div>
        </div>
    );
}
