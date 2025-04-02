import { TextInput, View, TouchableOpacity, Alert, Text } from "react-native";
import React, { useState } from "react";
import { s } from "./style";
import Plus from "@/assets/images/plus.svg";
import { Categories } from "../categories";
import { Category } from "../category";

interface Props {
  placeholder: string;
  handleTask: (text: string,) => void;
}

export function Form({ placeholder, handleTask }: Props) {
  const [borderBoxColor, setBorderBoxColor] = useState("#0D0D0D");
  const [textTask, setTextTask] = useState("");

  function handleOnFocus() {
    setBorderBoxColor("#5E60CE");
  }

  function handleOnBlur() {
    setBorderBoxColor("#0D0D0D");
  }

  function handleInsertTextAndCleanInput() {
    if (textTask.trim() === "") {
      Alert.alert("Digite uma tarefa");
      return;
    }
    handleTask(textTask);
    setTextTask("");
  }

  return (
    <View style={s.container}>
      <TextInput
        style={[s.input, { borderColor: borderBoxColor, borderWidth: 1 }]}
        placeholder={placeholder}
        placeholderTextColor="#808080"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onChangeText={setTextTask}
        value={textTask}
      />
      
      <TouchableOpacity style={s.button} onPress={handleInsertTextAndCleanInput}>
        <Plus />
      </TouchableOpacity>

    </View>
  );
}
