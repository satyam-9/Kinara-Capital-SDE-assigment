package com.assisment.kinaracapital.kinaraCapitalAss.repository;

import com.assisment.kinaracapital.kinaraCapitalAss.bean.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    Page<Student> findByName(String name, Pageable pageable);
    Page<Student> findByTotalMarks(int totalMarks, Pageable pageable);
    Page<Student> findByNameAndTotalMarks(String name, int totalMarks, Pageable pageable);
}
