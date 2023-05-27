package com.assisment.kinaracapital.kinaraCapitalAss.controller;

import com.assisment.kinaracapital.kinaraCapitalAss.bean.Student;
import com.assisment.kinaracapital.kinaraCapitalAss.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin
public class StudentController {
    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }


    @GetMapping
    public Page<Student> getStudents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return studentService.getStudents(page, size);
    }
//    @GetMapping
//    public List<Student> getStudents(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size){
//        return studentService.getStudents(page, size);
//    }

    @GetMapping("/filter")
    public Page<Student> filterStudents(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer totalMarks,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return studentService.filterStudents(name, totalMarks, page, size);
    }

    @PostMapping("/addStudents")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

}
