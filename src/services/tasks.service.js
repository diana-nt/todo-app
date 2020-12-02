import axios from "axios"

export default {
    async getTasks() {
        let res = await axios.get("http://localhost:8000/tasks");
        return res.data;
    },
    async addTask(task) {
        let res = await axios.post("http://localhost:8000/tasks", {
            completed: task.completed,
            created_on: task.created,
            id: task.id,
            title: task.title
        });
        console.log(res);
    }
}
