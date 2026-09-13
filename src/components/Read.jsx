import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
    const [todos, settodos] = useContext(todocontext);

    const DeleteHandler = (id) => {
        const filteredTodo = todos.filter((todo) => todo.id !== id);
        settodos(filteredTodo);
        toast.error("✗ Task removed", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const ToggleCompleteHandler = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        settodos(updatedTodos);
        toast.info("✓ Task updated", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    };

    // Filter out empty initial todo
    const activeTodos = todos.filter((todo) => todo.title && todo.title.trim() !== "");
    const pendingCount = activeTodos.filter((todo) => !todo.isCompleted).length;
    const completedCount = activeTodos.filter((todo) => todo.isCompleted).length;

    const EmptyState = () => (
        <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No tasks yet</h3>
            <p className="text-slate-400">Create your first task to get started!</p>
        </div>
    );

    return (
        <div>
            {/* Stats Header */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/50 rounded-xl p-4">
                    <p className="text-blue-400 text-sm font-medium">Pending Tasks</p>
                    <p className="text-3xl font-bold text-white mt-1">{pendingCount}</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/50 rounded-xl p-4">
                    <p className="text-green-400 text-sm font-medium">Completed</p>
                    <p className="text-3xl font-bold text-white mt-1">{completedCount}</p>
                </div>
            </div>

            {/* Tasks Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Your Tasks</h2>
                    <p className="text-slate-400 text-sm mt-1">{activeTodos.length} total tasks</p>
                </div>

                {activeTodos.length === 0 ? (
                    <EmptyState />
                ) : (
                    <ul className="space-y-3">
                        {activeTodos.map((todo) => (
                            <li
                                key={todo.id}
                                className={`group flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 ${
                                    todo.isCompleted
                                        ? "bg-slate-700/30 border-slate-600/50"
                                        : "bg-slate-700/50 border-slate-600 hover:border-cyan-500/50 hover:bg-slate-700/70"
                                }`}
                            >
                                {/* Checkbox */}
                                <button
                                    onClick={() => ToggleCompleteHandler(todo.id)}
                                    className="flex-shrink-0 w-6 h-6 rounded-md border-2 border-slate-500 flex items-center justify-center hover:border-cyan-500 transition-colors group-hover:scale-110 transition-transform"
                                >
                                    {todo.isCompleted && (
                                        <span className="text-cyan-400 text-sm font-bold">✓</span>
                                    )}
                                </button>

                                {/* Task Text */}
                                <span
                                    className={`flex-1 text-base transition-all ${
                                        todo.isCompleted
                                            ? "text-slate-400 line-through"
                                            : "text-slate-100"
                                    }`}
                                >
                                    {todo.title}
                                </span>

                                {/* Delete Button */}
                                <button
                                    onClick={() => DeleteHandler(todo.id)}
                                    className="flex-shrink-0 px-3 py-1.5 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-md transition-colors opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Footer Info */}
            {activeTodos.length > 0 && (
                <div className="mt-6 text-center text-xs text-slate-500">
                    <p>💡 Click the checkbox to mark tasks complete</p>
                </div>
            )}
        </div>
    );
};

export default Read;
