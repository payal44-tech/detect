import React, { useState } from 'react';

export default function Settings() {
    const [notifications, setNotifications] = useState(true);
    const [recording, setRecording] = useState(true);
    const [sensitivity, setSensitivity] = useState(70);

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-8">System Settings</h1>

            <div className="space-y-6">
                {/* Sensor Config */}
                <section className="bg-surface p-6 rounded-xl border border-slate-700/50">
                    <h2 className="text-lg font-medium text-white mb-4">Sensor Configuration</h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-slate-300">Motion Sensitivity</label>
                                <span className="text-primary font-medium">{sensitivity}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sensitivity}
                                onChange={(e) => setSensitivity(e.target.value)}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <p className="text-xs text-slate-500 mt-2">Higher sensitivity may cause false alarms from pets or wind.</p>
                        </div>
                    </div>
                </section>

                {/* Alarm Settings */}
                <section className="bg-surface p-6 rounded-xl border border-slate-700/50">
                    <h2 className="text-lg font-medium text-white mb-4">Alarm & Notifications</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white font-medium">Push Notifications</p>
                                <p className="text-sm text-slate-400">Receive alerts on your mobile device</p>
                            </div>
                            <button
                                onClick={() => setNotifications(!notifications)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-primary' : 'bg-slate-700'}`}
                            >
                                <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${notifications ? 'translate-x-6' : 'translate-x-0'}`}></span>
                            </button>
                        </div>
                        <div className="border-t border-slate-700/50 pt-4 flex items-center justify-between">
                            <div>
                                <p className="text-white font-medium">Auto-Recording</p>
                                <p className="text-sm text-slate-400">Save video clips when motion is detected</p>
                            </div>
                            <button
                                onClick={() => setRecording(!recording)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${recording ? 'bg-success' : 'bg-slate-700'}`}
                            >
                                <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${recording ? 'translate-x-6' : 'translate-x-0'}`}></span>
                            </button>
                        </div>
                    </div>
                </section>

                <div className="flex justify-end space-x-4">
                    <button className="px-6 py-2 text-slate-300 hover:text-white transition-colors">Reset Defaults</button>
                    <button className="px-6 py-2 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">Save Changes</button>
                </div>
            </div>
        </div>
    );
}
