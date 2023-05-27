import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentPagination from "./StudentPagination";
import StudentList from "./StudentList";

const StudentGrid = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [nameFilter, setNameFilter] = useState("");
    // const [totalMarksFilter, setTotalMarksFilter] = useState("");
    const [newStudent, setNewStudent] = useState({
        name: "",
        totalMarks: "",
    });

    useEffect(() => {
        fetchAllStudents();
    }, [page, pageSize]);

    const fetchAllStudents = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/students",
                {
                    params: {
                        page: page,
                        size: pageSize,
                    },
                }
            );
            // console.log(response.data.content)
            setStudents(response.data.content);
            setFilteredStudents(response.data.content);
        } catch (error) {
            console.error("error fetching students:", error);
        }
    };

    useEffect(() => {
        applyFilters();
    }, [students, nameFilter]);

    const applyFilters = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/students/filter",
                {
                    params: {
                        name: nameFilter,
                    },
                }
            );
            setFilteredStudents(response.data.content);
        } catch (error) {
            console.error("error applying filters: ", error);
        }
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleNameFilterChange = (event) => {
        setNameFilter(event.target.value);
        setPage(0); // Reset to the first page when filter changes
    };

    // const handleTotalMarksFilterChange = (event) => {
    //     setTotalMarksFilter(event.target.value);
    //     setPage(0); 
    // };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
    };

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        applyFilters();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(
                "http://localhost:8080/api/students/addStudents",
                newStudent
            );
            setNewStudent({ id: "", name: "", totalMarks: "" });
            fetchAllStudents(); // Refresh the student grid after adding a new student
        } catch (error) {
            console.error("Error adding student:", error);
        }
    };

    return (
        <div className="container">
            <h1>Student Details</h1>
            {/* add students */}
            <form className="addStudent" onSubmit={handleSubmit}>
                <div>
                    <label>Id: </label><br />
                    <input
                        type="text"
                        name="id"
                        placeholder="id"
                        value={newStudent.id}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                <label>Name: </label><br />

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newStudent.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                <label>Total Marks: </label><br />

                    <input
                        type="number"
                        name="totalMarks"
                        placeholder="Total Marks"
                        value={newStudent.totalMarks}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Add Student</button>
            </form>
            <hr />
            {/* filter students */}
            <div>
                <h4>Filter the result</h4>
                <form action="" onSubmit={handleFilterSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Filter by Name"
                            value={nameFilter}
                            onChange={handleNameFilterChange}
                        />
                        
                        {/* <button type="submit">Apply Filters</button> */}
                    </div>
                </form>
            </div>
            {/* displaying students detail with pagination */}
            <h4>filter results</h4>

            <div>
                {filteredStudents.map((student) => (
                    <ul key={student.id}>
                        <li>
                            <b>Name:</b> {student.name}
                        </li>
                        <li>
                            <strong>Total Marks:</strong> {student.totalMarks}
                        </li>
                    </ul>
                ))}
            </div>

            <hr />
            <h1>All students</h1>
            <StudentList students={students} />
            <StudentPagination
                page={page}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default StudentGrid;
