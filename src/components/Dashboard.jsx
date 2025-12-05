import React, { useState } from 'react';
import { IconBell } from './Icons';

const StatCard = ({ title, value, status, color }) => (
    <div className="bg-surface p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all">
        <p className="text-slate-400 text-sm">{title}</p>
        <div className="flex items-end justify-between mt-2">
            <h3 className="text-2xl font-bold text-white">{value}</h3>
            <span className={`text-xs px-2 py-1 rounded-full bg-${color}/10 text-${color} border border-${color}/20`}>
                {status}
            </span>
        </div>
    </div>
);

export default function Dashboard() {
    const [sensitivity, setSensitivity] = useState(75);
    const [isArmed, setIsArmed] = useState(true);

    return (
        <div className="p-8 h-full overflow-y-auto">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white">Console Overview</h2>
                    <p className="text-slate-400">Welcome back, system is operating normally.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 text-slate-400 hover:text-white bg-surface rounded-lg border border-slate-700/50 relative">
                        <IconBell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full animate-pulse"></span>
                    </button>
                    <button
                        onClick={() => setIsArmed(!isArmed)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${isArmed ? 'bg-danger text-white hover:bg-red-600' : 'bg-success text-white hover:bg-green-600'}`}
                    >
                        {isArmed ? 'DISARM SYSTEM' : 'ARM SYSTEM'}
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="System Status" value="Monitoring" status="Active" color="success" />
                <StatCard title="Motion Events (24h)" value="12" status="+2 new" color="primary" />
                <StatCard title="Camera Uptime" value="99.8%" status="stable" color="accent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Feed Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-surface rounded-xl border border-slate-700/50 overflow-hidden">
                        <div className="p-4 border-b border-slate-700/50 flex justify-between items-center">
                            <h3 className="font-medium text-white">Live Feed - Cam 01</h3>
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                <span className="text-xs text-red-500 font-medium">LIVE</span>
                            </div>
                        </div>
                        <div className="aspect-video bg-black relative group cursor-pointer">
                            {/* Fallback pattern for video feed */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-black flex items-center justify-center">
                                <div className="text-center group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-16 h-16 border-2 border-slate-600 rounded-full flex items-center justify-center mx-auto mb-4 border-dashed animate-spin-slow">
                                        <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                                    </div>
                                    <p className="text-slate-500 font-mono text-sm">CONNECTING TO VIDEO SOURCE...</p>
                                </div>
                            </div>

                            {/* Overlay UI */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex justify-between text-xs text-white/80 font-mono">
                                    <span>1080p HEVC</span>
                                    <span>30 FPS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Control Panel */}
                <div className="space-y-6">
                    {/* Controls */}
                    <div className="bg-surface p-6 rounded-xl border border-slate-700/50">
                        <h3 className="font-medium text-white mb-4">Sensitivity Control</h3>
                        <div className="mb-6">
                            <div className="flex justify-between text-sm text-slate-400 mb-2">
                                <span>Threshold</span>
                                <span>{sensitivity}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sensitivity}
                                onChange={(e) => setSensitivity(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                        </div>

                        <h3 className="font-medium text-white mb-4 mt-6">Recent Alerts</h3>
                        <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start space-x-3 p-3 rounded-lg bg-background/50 border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white">Motion Detected</h4>
                                        <p className="text-xs text-slate-400">Backyard Cam • {i * 12} mins ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
