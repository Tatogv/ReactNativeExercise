import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Item = ({item}) => {
  return <Text style={styles.item}>{item}</Text>;
};

export default Item;
