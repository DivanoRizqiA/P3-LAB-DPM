import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function AddTaskInput({ onAddTask, editing, currentText }) {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editing) {
      setTask(currentText); 
    }
  }, [editing, currentText]);

  const handleSubmit = () => {
    onAddTask(task);
    setTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{editing ? 'Mengedit tugas...' : 'Tambahkan tugas baru'}</Text>
      <Animatable.View animation="fadeInUp" duration={1000}>
        <TextInput
          style={styles.input}
          placeholder={editing ? 'Edit tugas...' : 'Tambahkan tugas...'}
          value={task}
          onChangeText={setTask}
        />
      </Animatable.View>

      <Animatable.View animation="zoomIn" duration={500}>
        <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
          <Text style={styles.buttonText}>{editing ? 'Update' : 'Tambah'}</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
