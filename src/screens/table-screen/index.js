import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Table} from '../../components';

const TableScreen = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <View style={styles.container}>
      <Table selectedRows={selectedRows} onSelectRow={setSelectedRows} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TableScreen;
