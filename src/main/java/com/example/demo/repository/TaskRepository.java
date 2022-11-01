package com.example.demo.repository;

import com.example.demo.model.Task;

import java.util.List;
import java.util.UUID;

public interface TaskRepository {

    void saveTask(Task task);
    List<Task> getTasks();
    Task getTaskById(UUID taskId);
    void removeTaskById(UUID taskId);
}
