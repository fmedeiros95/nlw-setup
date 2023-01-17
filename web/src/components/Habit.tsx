interface IHabitProps {
    completed?: number;
    total?: number;
}

export default function Habit(props: IHabitProps) {
    const completed = props.completed || 0;
    const total = props.total || 0;

    const progress = (completed / total) * 100;
    const progressStyle = (progress: number) => {
        if (progress <= 0) return 'bg-zinc-900 border-zinc-800';
        else if (progress > 0 && progress <= 33) return 'bg-violet-600 border-violet-500';
        else if (progress > 33 && progress <= 66) return 'bg-violet-700 border-violet-500';
        else if (progress > 66) return 'bg-violet-900 border-violet-700';
    }

    return (
        <div className={`w-10 h-10 m-2 text-white rounded-lg flex items-center justify-center border-2 ${progressStyle(progress)}`}>
            {props.completed}
        </div>
    );
}