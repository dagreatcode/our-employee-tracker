INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Vincent', 'Kendrick', 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Barbara', 'Kendrick', 2, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Von', 'Kendrick', 1, 3);



INSERT INTO department (name) 
VALUES ('Management');

INSERT INTO department (name) 
VALUES ('Employee');

INSERT INTO department (name)
VALUEs ('OldEmployees');

INSERT INTO department (name)
VALUEs ('NewEmployees');


INSERT INTO role (title, salary, department_id) 
values ('Managment', 70000, 1);
INSERT INTO role (role_id, title, salary, department_id) 
values ('Employee', 50000, 2);

UPDATE role
SET title = Management, salary = 70000, department_id = 1
WHERE first_name = "Vincent";

UPDATE role
SET title = Employee, salary = 50000, department_id = 2
WHERE first_name = "Barbara";

UPDATE role
SET title = Management, salary = 70000, department_id = 1
WHERE first_name = "Von";

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
-- DELETE FROM 
-- WHERE