import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Colors } from '../../constants';
import styles from './style';

export default function OrderItem({ item }) {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.headerContainer}>
                <Text numberOfLines={1} style={{ flex: 1, marginEnd: 20, fontSize: 18, fontWeight: '700', textTransform: 'uppercase' }}>{item.name}</Text>
                <Text style={{ fontSize: 14 }}>{`# ${item.increment_id}`}</Text>
            </View>
            <Text style={styles.mobileText}>{item.mobile_number}</Text>
            <View style={styles.amountContainer}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.ui_green }}>{'₹' + (item.grand_total * 1).toFixed(2)}</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'flex-end' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.smallValue}>{item.pickup_date}</Text>
                        <Text style={styles.smallTitle}>{"Pick Up Date"}</Text>
                    </View>
                    <View style={styles.devider} />
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.smallValue}>{item.pickup_time}</Text>
                        <Text style={styles.smallTitle}>{"Pick Up Time"}</Text>
                    </View>
                    <View style={styles.devider} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.smallValue}>{item.items}</Text>
                        <Text style={styles.smallTitle}>{"Items"}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', color: Colors.ui_green }}>{item.payment_status}</Text>
                    <Text style={styles.smallTitle}>{"Payment Status"}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
