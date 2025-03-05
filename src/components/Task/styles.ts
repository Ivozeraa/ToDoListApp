import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        paddingHorizontal: 36,
        maxWidth: '100%',
      },
      header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 30
      },
      headerContent:{
        flexDirection: "row",
        alignItems: "center",
      },
      title:{
        color: '#4EA8DE',
        fontWeight: "bold",
        marginRight: 10,
      },
      countBox:{
        backgroundColor: '#333333',
        width: 40,
        height: 25,
        alignContent:"center",
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 30,
        paddingHorizontal: 10,
      },
      count:{
        color: '#D9D9D9',
        fontWeight: 'bold'
      },
      content:{
      },
      objetEmpty:{
        borderTopWidth: 1,
        borderTopColor: '#333333',
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        paddingTop: 30
      },
      logoEmpty:{
        marginVertical: 20,
      },
      textListEmpty:{
        color: '#808080',
        fontWeight:"bold",
      },
      subtextListEmpty:{
        color: '#808080',
      }

})