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
  