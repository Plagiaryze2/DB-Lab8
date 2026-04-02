USE RozgarDB;
GO

CREATE PROCEDURE sp_LoginUser
    @Email varchar(100),
    @Password varchar(100)
AS
BEGIN
    Select U.UserID,U.FullName,U.Email
    From Users as U
    Where U.Email = @Email AND U.PasswordHash = @Password
END;
GO

CREATE PROCEDURE sp_GetExperience
    @UserID int
AS
BEGIN
Select E.ExpID,E.JobTitle,E.CompanyName,E.YearsWorked,E.IsCurrentJob
FROM Experience as E
WHERE E.UserID = @UserID
END;
GO

CREATE PROCEDURE sp_AddExperience
    @UserID int,
    @JobTitle varchar(100),
    @CompanyName varchar(100),
    @YearsWorked int
AS
BEGIN
INSERT INTO Experience (UserID, JobTitle, CompanyName, YearsWorked, IsCurrentJob)
VALUES (@UserID, @JobTitle, @CompanyName, @YearsWorked, 0);
END;
GO

USE RozgarDB;
SELECT name FROM sys.procedures;