import React from "react";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
    //     const [tasks, setTasks] = useState([]);


    //     useEffect(() => {
    //         getTasks();
    //     }, [])

    return (
        <>
            <section className="task">
                <div className="task__header">Tasks</div>
                <div className="task__card">
                    {<TaskCard />}
                </div>
            </section>
        </>
    );
}