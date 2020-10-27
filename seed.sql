INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id) 
values (1, 'Vincent', 'Kendrick', 1, 1);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id) 
values (2, 'Barbara', 'Kendrick', 2, 2);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id) 
values (3, 'Von', 'Kendrick', 1, 3);



INSERT INTO department (department_id, name) 
VALUES (1, 'Management');

INSERT INTO department (department_id, name) 
VALUES (2, 'Employee');


INSERT INTO role (role_id, title, salary, department_id) 
values (3, 'Managment', 70000, 1);
INSERT INTO role (role_id, title, salary, department_id) 
values (4, 'Employee', 50000, 2);

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