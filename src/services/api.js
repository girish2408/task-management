const API_URL = "https://bookish-guide-69446r7qq6w2jv9-8080.app.github.dev";

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const completeTask = async (id) => {
  await fetch(`${API_URL}/tasks/${id}`, { method: "PUT" });
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
};
