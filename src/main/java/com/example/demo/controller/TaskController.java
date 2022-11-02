package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


//@CrossOrigin
@RestController
@RequestMapping("tasks")
public class TaskController {
    private final TaskService taskService;

    // DI
    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public Task addTask(
            @RequestParam("taskName") String taskName,
            @RequestParam("taskDeadline") String taskDeadline) {
        return taskService.addTask(taskName, LocalDateTime.parse(taskDeadline));
    }

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    @PutMapping("/{taskId}")
    public void updateTask(
            @PathVariable("taskId") UUID taskId,
            @RequestParam("taskName") String taskName) {

        taskService.updateTaskName(taskId, taskName);
    }

    @DeleteMapping("/{taskId}")
    public boolean deleteTask(@PathVariable("taskId") UUID taskId) {
        return taskService.deleteTaskById(taskId);
    }

}
