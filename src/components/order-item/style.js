import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export default StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: Colors.ui_white,
        shadowColor: Colors.ui_black,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mobileText: {
        fontSize: 16,
        fontWeight: '600'
    },
    amountContainer: {
        alignSelf: 'flex-end',
        padding: 10,
        borderRadius: 8,
        backgroundColor: Colors.ui_green_20
    },
    smallTitle: {
        fontSize: 10,
        textTransform: 'uppercase'
    },
    smallValue: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    devider: {
        marginHorizontal: 10,
        width: 1,
        height: 10,
        alignSelf: 'center',
        backgroundColor: Colors.ui_grey
    }
})