CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);
CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(100),
    salary INT,
    department_id INT,
    PRIMARY KEY (id)
);
CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(100),
    PRIMARY KEY (id)
);

-- employee:

-- id - INT PRIMARY KEY
-- first_name - VARCHAR(30) to hold employee first name
-- last_name - VARCHAR(30) to hold employee last name
-- role_id - INT to hold reference to role employee has
-- manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager