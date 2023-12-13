import express from 'express'
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
import hbs from 'hbs'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/cinema",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const screen1Model = mongoose.model('screen1',{
    seatno:{type:Number},
    status:{type:String}
})
const screen2Model = mongoose.model('screen2',{
    seatno:{type:Number},
    status:{type:String}
})
const screen3Model = mongoose.model('screen3',{
    seatno:{type:Number},
    status:{type:String}
})
const moviesModel = mongoose.model('movies',{
    name:{type:String},
    rate:{type:Number},
    screenNo:{type:Number}
})
var screen1Res
screen1Model.find()
.then(function (output){
    screen1Res= output

})
.catch(function(error){
    console.log(error)

})
var screen2Res
screen2Model.find()
.then(function (output){
    screen2Res= output

})
.catch(function(error){
    console.log(error)

})
var screen3Res
screen3Model.find()
.then(function (output){
    screen3Res= output

})
.catch(function(error){
    console.log(error)

})
var moviesRes
moviesModel.find()
.then(function (output){
    moviesRes= output

})
.catch(function(error){
    console.log(error)

})

app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req, res) => {
    res.render("login")
})
app.get('/cinema',(req,res)=>{
    res.render("cinema",{
        movies:moviesRes,
        screen1:screen1Res,
        screen2:screen2Res,
        screen3:screen3Res

    })
})
 

app.listen(3000, () => {
    console.log("Listening...")
})