import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskItem({ task, onDelete, onEdit, isEditing }) {
  return (
    <View style={[styles.taskContainer, isEditing && styles.editingTaskContainer]}>
      <Text style={styles.taskText}>{task.text}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onEdit} style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} style={[styles.button, styles.deleteButton]}>
          <Text style={[styles.buttonText, styles.deleteText]}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  editingTaskContainer: {
    backgroundColor: '#e3f2fd',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  deleteText: {
    color: '#fff',
  },
});
