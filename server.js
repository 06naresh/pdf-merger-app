const express = require('express')
const path = require('path')
const {mergepdfs} = require('./pdfsmerger')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"templates","index.html"));
})

app.get('/pdfm', (req, res) => {
    res.sendFile(path.join(__dirname, "templates","pdfm.html"));
});

app.post('/merge', upload.array('pdfs', 12), async (req, res, next) => {
    console.log(req.files);
    let d=await mergepdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path));
    res.redirect(`http://localhost:3000/static/${d}.pdf`);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
