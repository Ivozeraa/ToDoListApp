import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Task } from '@/interfaces';

const STORAGE_KEY = '@tasks';

export function useStorage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function loadTasks() {
      try {
        const savedTasks = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    }
    loadTasks();
  }, []);

  async function saveTasks(updatedTasks: Task[]) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
      setTasks(updatedTasks); 
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  }

  function addTask(text: string) {
    if (!text.trim()) {
      alert('O nome da tarefa não pode estar vazio.');
      return;
    }

    const exists = tasks.some(task => task.taskName === text);
    if (exists) {
      alert('Tarefa já inserida');
      return;
    }

    const newTask: Task = {
      id: Date.now(), // Gera um ID único
      taskName: text,
      taskCheck: false,
    };

    saveTasks([...tasks, newTask]);
  }

  function removeTask(task: Task) {
  const filteredTasks = tasks.filter(t => t.id !== task.id);
  saveTasks(filteredTasks);
}

function toggleTaskCompleted(task: Task) {
  const updatedTasks = tasks.map(t =>
    t.id === task.id ? { ...t, taskCheck: !t.taskCheck } : t
  );
  saveTasks(updatedTasks);
}


  return { tasks, addTask, removeTask, toggleTaskCompleted };
}
