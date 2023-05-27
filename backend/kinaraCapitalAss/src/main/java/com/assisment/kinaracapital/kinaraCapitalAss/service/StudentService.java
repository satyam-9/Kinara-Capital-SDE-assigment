package com.assisment.kinaracapital.kinaraCapitalAss.service;

import com.assisment.kinaracapital.kinaraCapitalAss.bean.Student;
import com.assisment.kinaracapital.kinaraCapitalAss.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.swing.text.Style;
import java.util.List;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }


    public Page<Student> filterStudents(String name, Integer totalMarks, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        if (name != null && totalMarks != null) {
            return studentRepository.findByNameAndTotalMarks(name, totalMarks, pageable);
        } else if (name != null) {
            return studentRepository.findByName(name,pageable);
        } else if (totalMarks != null) {
            return studentRepository.findByTotalMarks(totalMarks,pageable);
        } else {
            return studentRepository.findAll(pageable);
        }
    }


    public Page<Student> getStudents(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return studentRepository.findAll(pageable);
    }

//    public List<Student> getStudents(int page, int size){
//        return studentRepository.findAll();
//    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }
}
