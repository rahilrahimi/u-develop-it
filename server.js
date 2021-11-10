db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});