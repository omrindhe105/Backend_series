

 const express = require('express');
 const path = require('path')
const app = express()

const port = 3000;

app.use(express.json());
app.use (express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      


