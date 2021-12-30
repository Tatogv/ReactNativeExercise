import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Item from '../Item';
import styles from './styles';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    callData();
  }, [data.length]);

  const callData = async () => {
    try {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const dataHandler = await result.json();
      const names = dataHandler.results.map(el => el.name);
      console.log(names);
      setData([...names]);
    } catch (error) {}
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.list}
      data={data}
      renderItem={Item}
      ItemSeparatorComponent={() => (
        <View style={{flex: 1, height: 1, width: 1, color: 'green'}} />
      )}
    />
  );
};

export default List;
