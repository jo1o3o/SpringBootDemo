package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// This is the student data layer. Notice that the parent class, JpaRepository
// already contains the basic CRUD methods for student table. Just give this class
// the @Repository annotation and specify the entity/object type and id type and
// Spring Boot does the rest.

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    // @Query annotation is not necessary here, but we can include it to be more
    // specific.
    @Query("SELECT s FROM Student s WHERE s.email = ?1")
    Optional<Student> findStudentByEmail(String email);
}
