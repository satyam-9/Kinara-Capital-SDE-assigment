import React from "react";

const StudentList = ({ students }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Total Marks</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.totalMarks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentList;

    
