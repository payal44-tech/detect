import React from 'react';

const events = [
    { id: 1, camera: 'Front Door', time: '10:42 AM', date: 'Today', type: 'Person Detected', thumbnail: 'bg-slate-700' },
    { id: 2, camera: 'Backyard', time: '09:15 AM', date: 'Today', type: 'Motion Detected', thumbnail: 'bg-slate-800' },
    { id: 3, camera: 'Garage', time: '02:30 AM', date: 'Today', type: 'Vehicle Detected', thumbnail: 'bg-slate-700' },
    { id: 4, camera: 'Front Door', time: '11:20 PM', date: 'Yesterday', type: 'Person Detected', thumbnail: 'bg-slate-800' },
    { id: 5, camera: 'Living Room', time: '06:45 PM', date: 'Yesterday', type: 'Pet Detected', thumbnail: 'bg-slate-700' },
];

export default function History() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-white mb-6">Event History</h1>

            <div className="bg-surface rounded-xl border border-slate-700/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="bg-background/50 text-xs uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">Event Details</th>
                                <th className="px-6 py-4">Camera</th>
                                <th className="px-6 py-4">Date & Time</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/50">
                            {events.map((event) => (
                                <tr key={event.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-16 h-10 rounded ${event.thumbnail}`}></div>
                                            <span className="font-medium text-white">{event.type}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{event.camera}</td>
                                    <td className="px-6 py-4">
                                        <div>{event.time}</div>
                                        <div className="text-xs">{event.date}</div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-blue-400 font-medium text-xs">View Clip</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
