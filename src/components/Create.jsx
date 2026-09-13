import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Create = () => {
    const [todos, settodos] = useContext(todocontext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const SubmitHandler = (data) => {
        data.isCompleted = false;
        data.id = nanoid();

        const copytodos = [...todos];
        copytodos.push(data);
        settodos(copytodos);
        
        toast.success("✓ Task added successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        reset();
    };

    return (
        <div className="sticky top-24">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl hover:border-slate-600 transition-colors">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Create New Task</h2>
                    <p className="text-slate-400 text-sm">Add a task to your list</p>
                </div>

                <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Task Title</label>
                        <input
                            {...register("title", {
                                required: "Task title is required",
                                minLength: { value: 3, message: "Title must be at least 3 characters" },
                                maxLength: { value: 100, message: "Title must not exceed 100 characters" }
                            })}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                            type="text"
                            placeholder="e.g., Complete project proposal"
                        />
                        {errors.title && (
                            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                                <span>⚠</span> {errors.title.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                    >
                        <span>+</span> Add Task
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-slate-700">
                    <p className="text-xs text-slate-500 text-center">💡 Pro tip: Keep tasks focused and actionable</p>
                </div>
            </div>
        </div>
    );
};

export default Create;
