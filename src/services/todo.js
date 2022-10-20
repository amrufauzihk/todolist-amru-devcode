import axios from "./apiService";

export async function getActivityList() {
  const res = await axios.get("/activity-groups?email=amrufauzihk@gmail.com");
  return res;
}

export async function getActivityDetail(data) {
  const res = await axios.get(`/activity-groups/${data}`);
  return res;
}

export async function addActivity(data) {
  const res = await axios.post("/activity-groups/", data);
  return res;
}

export async function updateActivity(value) {
  const { id, data } = value;
  const res = await axios.patch(`/activity-groups/${id}`, data);
  return res;
}

export async function deleteActivity(data) {
  const res = await axios.delete(`/activity-groups/${data}`, {});
  return res;
}

export async function addItem(data) {
  const res = await axios.post(`/todo-items`, data);
  return res;
}

export async function updateItem(value) {
  const { id, data } = value;
  const res = await axios.patch(`/todo-items/${id}`, data);
  return res;
}

export async function deleteItem(data) {
  const res = await axios.delete(`/todo-items/${data}`, {});
  return res;
}
