import axios from "axios";
const API_URL = 'http://localhost:3000';

export default {
    async getTasks() {
        let url = `${API_URL}/tasks/`;
        let res = await axios.get(url);
        return res.data;
    },

    async deleteTask(task){
        let url = `${API_URL}/api/tasks/${task.id}`;
        let res = await axios.delete(url);
        return res;
    },

    async addTask(task) {
        let url = `${API_URL}/api/tasks/`;
        let res = await axios.post(url, {
            completed_at: task.completed_at,
            id: task.id,
            title: task.title
        });
        console.log(res);
        return res;
    }
}
