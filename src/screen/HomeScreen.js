import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import AddTaskInput from '../components/AddTaskInput';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    setTasks([{ id: 1, text: 'Belajar React Native' }]);
  }, []);

  // Fungsi untuk menambah tugas
  const addTask = (task) => {
    if (!task.trim()) {
      Alert.alert('Error', 'Task tidak boleh kosong!');
      return;
    }
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: task }]);
    Alert.alert('Berhasil', 'Tugas berhasil ditambahkan!');
  };

  // Fungsi untuk memperbarui tugas
  const updateTask = (taskId, updatedText) => {
    if (!updatedText.trim()) {
      Alert.alert('Error', 'Task tidak boleh kosong!');
      return;
    }
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: updatedText } : task
      )
    );
    setEditingTask(null);
    Alert.alert('Berhasil', 'Tugas berhasil diperbarui!');
  };

  // Fungsi untuk menghapus tugas dengan konfirmasi
  const removeTask = (id) => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin menghapus tugas ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => {
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
            Alert.alert('Berhasil', 'Tugas telah dihapus!');
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Header title="To-Do List" />
      <AddTaskInput
        onAddTask={editingTask ? (text) => updateTask(editingTask.id, text) : addTask}
        editing={!!editingTask}
        currentText={editingTask ? editingTask.text : ''}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={removeTask}
            onEdit={() => setEditingTask(item)}
            isEditing={editingTask && editingTask.id === item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f7',
    paddingTop: 50,
  },
});
