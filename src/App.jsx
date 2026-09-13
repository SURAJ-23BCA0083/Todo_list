import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Header */}
            <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold">✓</span>
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            TaskFlow
                        </h1>
                    </div>
                    <p className="text-slate-400 text-sm">Organize your tasks efficiently</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <Create />
                    </div>
                    <div className="lg:col-span-2">
                        <Read />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
