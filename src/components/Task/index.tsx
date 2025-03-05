import { FlatList, View, Text } from "react-native";
import { styles } from "./styles";
import { Task } from '@/interfaces';

import Empty from '@/assets/images/Clipboard.svg';
import Card from "../card";

interface Props {
  itens: Task[];
  handleTrash: (task: Task) => void;
  handleCompleted: (task: Task) => void;
}
  
export function List({itens, handleTrash, handleCompleted}:Props) {
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Criadas</Text>
            <View style={styles.countBox}>
              <Text style={styles.count}>{itens?.length ? itens.length : 0}</Text>
            </View>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Concluídas</Text>
            <View style={styles.countBox}>
              <Text style={styles.count}>
                {itens.filter((item)=>item.taskCheck!=false).length}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <FlatList
            data={itens}
            renderItem={({ item }) => (
              <Card
                check={item.taskCheck}
                task={item}
                handleTrash={handleTrash}
                handleCompleted={handleCompleted}
              />
            )}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={
              () => (
                <View style={styles.objetEmpty}>
                  <Empty style={styles.logoEmpty}/>
                  <Text style={styles.textListEmpty}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.subtextListEmpty}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              )
            }
          />
        </View>
      </View>
    );
  }