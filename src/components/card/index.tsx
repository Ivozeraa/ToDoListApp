import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Trash from "@/assets/images/trash.svg";

import styles from "./style";
import { Task } from "../../interfaces";

interface Props {
  check: boolean;
  task: Task;
  handleTrash: (e: Task) => void;
  handleCompleted: (e: Task) => void;
}

export default function Card({
  check,
  task,
  handleTrash,
  handleCompleted,
}: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="#5E60CE"
        iconStyle={{ borderColor: "#4EA8DE" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {
          handleCompleted({ ...task, taskCheck: isChecked });
        }}
        isChecked={check}
        text={task.taskName}
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      />
      <TouchableOpacity onPress={() => handleTrash(task)}>
        <Trash style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
