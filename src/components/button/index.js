import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants';
import styles from './style';

const Button = ({ title, onPress, loading }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            {loading ? (
                <ActivityIndicator size={'small'} color={Colors.ui_white} />
            ) : (
                <Text style={styles.buttonTitle}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
