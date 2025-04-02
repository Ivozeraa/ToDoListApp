import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
  
    alignItems:"center",
  
    flex: 1,
    padding:10,
    height: 80,
    backgroundColor: '#262626',
    borderRadius: 8,
    marginBottom:10,
  },
  content:{
  },
  text:{
    flexWrap:"wrap",
    flex: 1,
    color: '#F2F2F2',
  },
  icon:{
    marginLeft:15
  }
})

export default styles;