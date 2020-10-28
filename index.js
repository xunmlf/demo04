const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<div style="background-color:red;width:300px;height:400px;">江西软件大学</div>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))