USE employeetracker_db;
INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Acounting Manager"),
        ("Sales"),
        ("Legal Team"),
        ("Lawyer");

INSERT INTO roles (title, salary, department_id)
VALUES
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Accountant", 125000, 3),
("legal Team Lead", 25000, 3),
("Lawyer", 190000,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 1, NULL),
("Jason", "Amose", 2, 1),
("Emma", "Roberts", 3, 2),
("Jennifer", "Kool", 4, NULL),
("Bill", "Sams", 5,4),
("Emily", "Vega", 6, NULL),
("Lily", "Snaps", 7, NULL);