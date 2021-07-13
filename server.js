const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require('mysql2');
// middleware functions for express
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '777mysql',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );


/* // READ 
db.query(`SELECT * FROM candidates`, (err, rows)=>{
    console.log(rows);
});

//READ single ROW  by ID (temporarily without placeholder)
db.query(`SELECT * FROM candidates WHERE Id = 1`, (err, rows)=>{
    console.log(rows);
});


//DELETE
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
});


//CREATE 
const sql = `INSERT INTO candidates(id, first_name, last_name, industry_connected)
        Values(?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
db.query(sql, params, (err, result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
});

*/



  //default response for any other requests (not found)
  app.use((req, res)=>{
      res.status(404).end();
  })

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});



/* practice route 
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });
*/