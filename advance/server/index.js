const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/non-blocking/', (req, res) => {
  res.send('This page is non-blocking');
});
app.get('/blocking/', async (req, res) => {
    let count = 0;
    while (count < 1e9) {
        count++;
    }
    // Simulate a blocking operation
  res.send(`This page is blocking. Count reached: ${count}`);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
}
);