package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task addTask(String taskName, LocalDateTime deadline) {
        Task task = new Task();
        task.setTaskName(taskName);
        task.setTaskDeadline(deadline);
        taskRepository.saveTask(task);
        return task;
    }

    public List<Task> getTasks() {
        return taskRepository.getTasks().stream().sorted(Comparator.comparing(Task::getTaskDeadline)).collect(Collectors.toList());
    }

    private Optional<Task> getTaskById(UUID taskId) {
        return Optional.ofNullable(taskRepository.getTaskById(taskId));
    }

    public void updateTaskName(UUID taskId, String taskName) {
        if (getTaskById(taskId).isPresent()) {
            getTaskById(taskId).get().setTaskName(taskName);
        }
    }

    public boolean deleteTaskById(UUID taskId) {
        if (getTaskById(taskId).isPresent()) {
            taskRepository.removeTaskById(taskId);
            return true;
        }
        return false;
    }
}
