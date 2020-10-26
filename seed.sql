INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Vincent', 'Kendrick', 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Barbara', 'Kendrick', 2, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Von', 'Kendrick', 3, 3);



INSERT INTO department (name) 
values ('Management');
INSERT INTO department (name) 
values ('Employee');


INSERT INTO role (title, salary, department_id) 
values ('Managment', 70000, 1);
INSERT INTO role (title, salary, department_id) 
values ('Employee', 50000, 2);

UPDATE role
SET title = Management, salary = 70000, department_id = 4
WHERE first_name = "Vincent";

UPDATE role
SET title = Employee, salary = 50000, department_id = 5
WHERE first_name = "Barbara";

UPDATE role
SET title = Management, salary = 70000, department_id = 6
WHERE first_name = "Von";