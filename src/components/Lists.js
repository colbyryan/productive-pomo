import { NoteList } from "./notes/NoteList";
import { TaskList } from "./tasks/TaskList";

const Lists = () => {
    return (
        <div className="wrapper__lists">
            <NoteList />
            <TaskList />
        </div>
    );
}

export default Lists;
