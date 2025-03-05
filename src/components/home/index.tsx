import { View, Image, Alert } from "react-native";
import { s } from './styles'
import { Form } from "@/components/input";
import Logo from '@/assets/images/Logo.svg'
import { List } from '@/components/Task'
import { useStorage } from '@/utils/useStorage';

export function Home(){
  const { tasks, addTask, removeTask, toggleTaskCompleted } = useStorage();

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Logo style={s.logo} width={100} height={100}/>
      </View>
      <Form placeholder="Adicione uma nova tarefa" handleTask={addTask} />
      <List itens={tasks} handleTrash={removeTask} handleCompleted={toggleTaskCompleted} />
    </View>
  );
}
