const express=require("express")
const mysql=require("mysql")
const multer=require("multer")
const path = require('path');
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const db=mysql.createConnection({
    host:"br73rgcjphwqgonsyejw-mysql.services.clever-cloud.com",
    user:"uzlrsyfqpnolbfys",
    database:"br73rgcjphwqgonsyejw",
    password:"cebG3LZiEzT9kVWIQBCU"
})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,"../front-end/public/images/imagestemoins"));
    },
    filename: (req, file, cb) => {
      const newFilename = Date.now() + path.extname(file.originalname)
      cb(null,newFilename);
    },
  });
  
  const upload = multer({ storage });

app.get("/projets",(req,res)=>{
    const sql="SELECT * FROM projets"
    db.query(sql,[],(err,data)=>{
        if (err) {
            console.log(err)
        }else{
            res.send(data)
        }
    })
})


app.post("/newsletter",(req,res)=>{
    const newsletter=req.body.newsletter
    const date=new Date()
   


    const sql="select * from newsletter where adresse=?"
    db.query(sql,[newsletter],(err,data)=>{
        if (data.length>0) {
            res.send("vous etiez  abonné")
        } else {
             const sql="INSERT INTO newsletter (adresse,date) VALUES (?,?)"
    db.query(sql,[newsletter,date],(err,data)=>{
        if (err) {
            console.log(err)
        }else{
            res.send("Merci de vous etre abonné")
        }
    })
        }
    })
})


app.post("/temoignage",upload.single("image"),(req,res)=>{
    const sql="select * from temoignage where nom=?"
    db.query(sql,[req.body.nomtemoin],(err,data)=>{
        if (data.length>2) {
            res.send("Trop de témoignage merci")
        } else {
             const sql="INSERT INTO temoignage (nom,profession,image,temoignage) VALUES (?,?,?,?)"
    db.query(sql,[req.body.nomtemoin,req.body.profession,req.file.filename,req.body.message],(err,data)=>{
        if (err) {
            console.log(err)
        }else{
            res.send("Témoignage enrégistrer Merci!")
        }
    })
        }
    })
    
})


app.get("/alltemoignages",(req,res)=>{
    const sql="SELECT * FROM temoignage"
    db.query(sql,[],(err,data)=>{
        if (err) {
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

app.listen(3006,()=>{
    console.log("server en ecoute")
})