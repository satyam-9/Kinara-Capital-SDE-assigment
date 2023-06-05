## Objective

The objective of this test assignment is to develop a grid system with filtering functionality in the
backend. The grid system is designed to display student details(id, name , total marks etc) and
allow filtering based on various columns.
The assignment involves developing the backend APIs responsible for loading student details
with pagination, and implementing server-side filtering.

## Requirements

1. Load Student Details API: Implement an API that retrieves student details from a
file(csv/json / any other format) and returns the data in a paginated manner. The API
should accept parameters such as page number and page size to allow pagination.
2. Server-side Filtering API: Implement server-side filtering functionality in the backend.
The filtering mechanism should allow the UI to send filter criteria to the backend API,
which will then return the filtered results to the UI.


## Getting Started with the solution

### Descriptions

This project is a student grid application that allows you to view, filter, and add student details. It provides a user-friendly interface to display student information and perform actions such as filtering by name and total marks, adding new students, and pagination.
The frontend is build with React.js and the backend is build with java spring boot, along with the for the database MySQL is used.

### Features

- Display student details including ID, name, and total marks.
- Filter students by name and total marks.
- Add new students to the grid.
- Pagination support to navigate through student records.

### Built With

* [![Spring][Spring.io]][Spring-url]
* [![React][React.js]][React-url]
* [![MySQL][MySQL.com]][MySQL-url]

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Spring.io]: https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[Spring-url]: https://spring.io/

[MySQL.com]: https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://mysql.com/

### Prerequisites

- Node.js and npm should be installed on your machine.
- Java Development Kit (JDK) and Spring Boot should be installed for the backend.

### Installation

1. Clone the repository:
 ```
git clone <repository url>
```
2. Navigate to the project directory:
```
cd frontend/my-app
```
3. Install the frontend dependencies:
```
npm install
```
4. Start the frontend server:
```
npm start
```

5. Install the backend dependencies (if applicable):
  configure the database uri, userid and password
6. Start the backend server
Run the spring boot application

7. Open your web browser and access the application at http://localhost:3000.


## Screenshot of ui
![image](https://github.com/satyam-9/Kinara-Capital-SDE-assigment/assets/58043576/a6a8f4fb-b386-44f5-80c1-5c2117a3d671)
