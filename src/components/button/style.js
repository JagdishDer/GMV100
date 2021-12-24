import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        backgroundColor: Colors.ui_black,
        borderRadius: 0,
        elevation: 8
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.ui_white
    }
})