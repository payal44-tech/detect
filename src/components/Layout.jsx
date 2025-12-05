import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-background overflow-hidden relative">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="flex-1 min-w-0 flex flex-col relative w-full">
                {/* Mobile Header */}
                <header className="md:hidden bg-surface border-b border-slate-700/50 p-4 flex items-center justify-between z-30">
                    <div className="flex items-center space-x-3">
                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="text-slate-300 hover:text-white"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <span className="font-bold text-white">SentinelAI</span>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
