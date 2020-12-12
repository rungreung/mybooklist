import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import uuid from 'uuid-random';
import Header from './component/Header';
import ListItem from './component/ListItem';
import AddItem from './component/AddItem';

const App = () => {
  const [items, setItems] = useState([
    // keep data
    {id: uuid(), text: 'To Do List'},
  ]);
  const deleteItem = (id) => {
    setItems((pervItem) => {
      return pervItem.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    setItems((pervItem) => {
      return [{id: uuid(), text}, ...pervItem];
    });
  };
  return (
    <View style={style.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
