package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// This is the student data layer. Notice that the parent class, JpaRepository
// contains all the methods that accesses the database. Just give this class
// the @Repository annotation and specify the entity/object type and id type
// and Spring Boot does the rest!

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query("SELECT s FROM Student s WHERE s.email = ?1")
    // This method is equivalent to the following raw SQL query:
    // SELECT * FROM student WHERE email = ?
    Optional<Student> findStudentByEmail(String email);
}
