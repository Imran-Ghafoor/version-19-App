const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  try {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return []; // Return an empty array if no data exists
    return JSON.parse(rawTodos); // Safely parse the JSON string
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    return []; // Return an empty array if parsing fails
  }
};
export const setLocalStorageTodoData = (task) => {
  try {
    localStorage.setItem(todoKey, JSON.stringify(task));
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};
