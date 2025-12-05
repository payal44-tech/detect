import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconHome, IconVideo, IconHistory, IconChart, IconSettings, IconLogOut } from './Icons';

const NavItem = ({ icon: Icon, label, to, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'text-slate-400 hover:bg-surface hover:text-white'}`}
    >
        <Icon className="w-5 h-5" />
        <span className="font-medium">{label}</span>
    </NavLink>
);

export default function Sidebar({ isOpen, onClose }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    // Classes for mobile (fixed, full screen) vs desktop (static)
    // We use `md:static` and `md:translate-x-0` to reset on desktop
    const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-64 bg-surface border-r border-slate-700/50 flex flex-col h-full transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0 md:static md:inset-auto
  `;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            <aside className={sidebarClasses}>
                <div className="p-6 flex justify-between items-center">
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Sentinel<span className="text-white">AI</span>
                    </h1>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                    <NavItem icon={IconHome} label="Dashboard" to="/dashboard" onClick={onClose} />
                    <NavItem icon={IconVideo} label="Live Camera" to="/live" onClick={onClose} />
                    <NavItem icon={IconHistory} label="History" to="/history" onClick={onClose} />
                    <NavItem icon={IconChart} label="Analytics" to="/analytics" onClick={onClose} />
                    <NavItem icon={IconSettings} label="Settings" to="/settings" onClick={onClose} />
                </nav>

                <div className="p-4 border-t border-slate-700/50 mt-auto">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors mb-4"
                    >
                        <IconLogOut className="w-5 h-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                    <div className="flex items-center space-x-3 px-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                        <div>
                            <p className="text-sm font-medium text-white">Admin User</p>
                            <p className="text-xs text-slate-400">System Online</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
