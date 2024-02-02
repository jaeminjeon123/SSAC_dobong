//app.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8244;
app.use(express.static(path.join(__dirname, 'public')));
// 파일 저장을 위한 multer 설정
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
  res.render('index');
});

app.post('/uploads', upload.single('userfile'), (req, res) => {
 
  const userData = {
    id: req.body.id,
    password: req.body.password, 
    name: req.body.name,
    age: req.body.age,
    filePath: req.file ? `/uploads/${req.file.filename}` : null
  };
  
 
  res.redirect(`/result-page?id=${encodeURIComponent(userData.id)}&password=${encodeURIComponent(userData.password)}&name=${encodeURIComponent(userData.name)}&age=${encodeURIComponent(userData.age)}&filePath=${encodeURIComponent(userData.filePath)}`);
});

app.get('/result-page', (req, res) => {
  res.render('result-page', { data: req.query });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
