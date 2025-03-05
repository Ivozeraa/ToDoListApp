import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '100%',
        paddingHorizontal: 36,
        paddingTop: 145,
        position: 'absolute',
        zIndex: 2,
      },
      input:{
        backgroundColor: '#262626',
        height: 54,
        flex: 1,
        marginRight: 10,
        borderRadius: 6,
        padding: 16,
        fontSize: 16,
        color: '#F2F2F2',
      },
      button:{
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius:6,
        justifyContent: 'center',
        alignItems: 'center'
      }
});
