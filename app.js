const express = require('express')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

//Nhập khẩu router
const posts = require('./routes/posts')

//Khởi động App 
const app = express()

//Khởi động Handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Khởi động bodyparser middelware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Khởi động express middleware
app.use(express.json())

//Kết nối cơ sở dữ liệu
connectDB()

//Một số routes cơ bản có thể đưa vào file riêng trong thư mục routes
app.get('/', (req, res)=> res.render('index'))
app.get('/about', (req, res)=> res.render('about'))

//Mang routes vào để sử dụng
app.use('/posts', posts)

const PORT = 5000;

app.listen(PORT, () => console.log('Server đã khởi động tại UDA-WEBSOCIAL ${UDA-WEBSOCIAL}'))