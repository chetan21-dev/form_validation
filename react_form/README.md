# Employee Management System

A simple **Employee Management System** built with **React.js** that allows users to perform CRUD operations (Create, Read, Update, Delete) on employee records. The application also includes **form validation** to ensure valid employee details are entered before submission.

---

## Features

* Add new employee details
* View employee list
* Update existing employee information
* Delete employee records
* Search employee records
* Form validation for employee details
* Responsive and user-friendly UI

---

## Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap / Material UI (if used)

---

## Project Screenshot

![Image](./public/assets/output.jpeg)

---

## Functionalities

### Add Employee

Users can add a new employee by entering:

* First Name
* Last Name
* Email ID

### Update Employee

Existing employee details can be edited and updated.

### Delete Employee

Users can remove employee records from the table.

### Search Employee

Employees can be searched using the search bar.

### Form Validation

Validation is applied to:

* Required fields
* Valid email format
* Empty input prevention

Example:

* First name cannot be empty
* Last name cannot be empty
* Email must be in valid format

---

## Installation & Setup

### Clone the Repository

```bash
git clone <your-repository-url>
```

### Navigate to Project Folder

```bash
cd employee-management-system
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
npm start
```

The app will run on:

```bash
http://localhost:3000
```

---

## Folder Structure

```bash
src/
│
├── components/
│   ├── AddEmployee.js
│   ├── ListEmployee.js
│   ├── UpdateEmployee.js
│
├── services/
│   └── EmployeeService.js
│
├── App.js
└── index.js
```

---

## Validation Rules

| Field      | Validation                 |
| ---------- | -------------------------- |
| First Name | Required                   |
| Last Name  | Required                   |
| Email      | Must be valid email format |

---

## Author

Developed by Chetan Kharche
