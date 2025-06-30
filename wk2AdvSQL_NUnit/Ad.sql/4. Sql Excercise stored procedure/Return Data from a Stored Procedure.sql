
DROP PROCEDURE IF EXISTS GetEmployeeCountByDepartmentOutput;
DROP PROCEDURE IF EXISTS GetEmployeeCountByDepartment;
DROP TABLE IF EXISTS Employees;
DROP TABLE IF EXISTS Departments;
GO


CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);
GO


CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT FOREIGN KEY REFERENCES Departments(DepartmentID),
    Salary DECIMAL(10,2),
    JoinDate DATE
);
GO


INSERT INTO Departments (DepartmentID, DepartmentName) VALUES 
(1, 'HR'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Marketing');

INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID, Salary, JoinDate) VALUES 
(1, 'John', 'Doe', 1, 5000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 2, 6000.00, '2019-03-22'),
(3, 'Michael', 'Johnson', 3, 7000.00, '2018-07-30'),
(4, 'Emily', 'Davis', 4, 5500.00, '2021-11-05');
GO

CREATE PROCEDURE GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT 
        d.DepartmentID,
        d.DepartmentName,
        COUNT(e.EmployeeID) AS TotalEmployees
    FROM Departments d
    LEFT JOIN Employees e ON d.DepartmentID = e.DepartmentID
    WHERE d.DepartmentID = @DepartmentID
    GROUP BY d.DepartmentID, d.DepartmentName;
END;
GO


CREATE PROCEDURE GetEmployeeCountByDepartmentOutput
    @DepartmentID INT,
    @TotalEmployees INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT @TotalEmployees = COUNT(*) 
    FROM Employees 
    WHERE DepartmentID = @DepartmentID;
END;
GO


EXEC GetEmployeeCountByDepartment @DepartmentID = 1;
EXEC GetEmployeeCountByDepartment @DepartmentID = 2;
EXEC GetEmployeeCountByDepartment @DepartmentID = 3;
EXEC GetEmployeeCountByDepartment @DepartmentID = 4;
EXEC GetEmployeeCountByDepartment @DepartmentID = 5; 
GO


DECLARE @EmpCount INT;
EXEC GetEmployeeCountByDepartmentOutput @DepartmentID = 1, @TotalEmployees = @EmpCount OUTPUT;
SELECT @EmpCount AS 'HR Department Employee Count';
GO
