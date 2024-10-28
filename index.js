const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// הגדרות חיבור למסד הנתונים
//הגדרות אלה משתנים ממשתמש לאחר 
const config = {
    user: 'DESKTOP-SBH3ON3/Hamodi', // שנה לשם המשתמש שלך
    password: '', // שנה לסיסמה שלך
    server: 'DESKTOP-SBH3ON3\SQLEXPRESS01', // כתובת השרת (אם מסד הנתונים מקומי)
    database: 'SecurityCompany',
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  };
  // התחברות למסד הנתונים
sql.connect(config).then(pool => {
    console.log('Connected to SQL Server');
  
  //  לקבלת כל הנקודות
  app.get('/points', async (req, res) => {
    try {
      const result = await pool.request().query('SELECT * FROM Points');
      res.json(result.recordset);
    } catch (err) {
      res.status(500).send('Error fetching points');
    }
  });
    //  להוספת נקודה חדשה
    app.post('/points', async (req, res) => {
        const { name, description } = req.body;
        try {
          await pool.request()
            .input('name', sql.NVarChar, name)
            .input('description', sql.NVarChar, description)
            .query('INSERT INTO Points (Name, Description) VALUES (@name, @description)');
          res.send('Point added successfully');
        } catch (err) {
          res.status(500).send('Error adding point');
        }
    });
      //  להוספת ביקור
  app.post('/visits', async (req, res) => {
    const { pointId } = req.body;
    try {
      await pool.request()
        .input('pointId', sql.Int, pointId)
        .query('INSERT INTO Visits (PointID) VALUES (@pointId)');
      res.send('Visit recorded successfully');
    } catch (err) {
      res.status(500).send('Error recording visit');
    }
  });
