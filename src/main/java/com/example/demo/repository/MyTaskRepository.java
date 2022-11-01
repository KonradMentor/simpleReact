package com.example.demo.repository;

import com.example.demo.model.Task;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class MyTaskRepository implements TaskRepository {
    private final Map<UUID, Task> inMemoryTasks = new HashMap<>();

    @Override
    public void saveTask(Task task) {
        task.setTaskId(UUID.randomUUID());
        inMemoryTasks.put(task.getTaskId(), task);
    }

    @Override
    public List<Task> getTasks() {
        return new ArrayList<>(inMemoryTasks.values());
    }

    @Override
    public Task getTaskById(UUID taskId) {
        return inMemoryTasks.get(taskId);
    }

    @Override
    public void removeTaskById(UUID taskId) {
        inMemoryTasks.remove(taskId);
    }
}
