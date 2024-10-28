
CREATE DATABASE SecurityCompany;

USE SecurityCompany;

CREATE TABLE Points (
    PointID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(255) NOT NULL,
    Description NVARCHAR(500)
);


CREATE TABLE Visits (
    VisitID INT PRIMARY KEY IDENTITY(1,1),
    PointID INT FOREIGN KEY REFERENCES Points(PointID),
    VisitTime DATETIME DEFAULT GETDATE()
);

