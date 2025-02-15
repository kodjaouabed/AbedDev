const express=require("express")
const mysql=require("mysql")
const multer=require("multer")
const path = require('path');
const cors=require("cors")

const cloudinary = require('cloudinary').v2;
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

const dbtemoins=mysql.createConnection({
    host:"bsl6mqjvufx6qdkw1svn-mysql.services.clever-cloud.com",
    user:"uphgffv8pafog4ay",
    database:"bsl6mqjvufx6qdkw1svn",
    password:"ONHF0T9LMTYvdNPu9424"
})

cloudinary.config({
    cloud_name: 'dtldeglnc',
    api_key: '298111192278727',
    api_secret: 'L-SuTGBlPf8rJ832b_Yc8NIgbu4',
  });

  const storage = multer.memoryStorage()
  
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


app.post("/newsletter",upload.none(),(req,res)=>{
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



    const uploadcloudinary=cloudinary.uploader.upload_stream(
        {folder:"imagestemoins"},
        (err,result)=>{
            if (err) {
                console.log(err)
            } else {
                const sql="select * from temoignage where nom=?"
    dbtemoins.query(sql,[req.body.nomtemoin],(err,data)=>{
        if (data.length>2) {
            res.send("Trop de témoignage merci")
        } else {
             const sql="INSERT INTO temoignage (nom,whatsapp,profession,image,temoignage) VALUES (?,?,?,?,?)"
    dbtemoins.query(sql,[req.body.nomtemoin,req.body.numero,req.body.profession,result.secure_url,req.body.message],(err,data)=>{
        if (err) {
            console.log(err)
        }else{
            res.send("Témoignage enrégistrer Merci!")
        }
    })
        }
    })
    
            }
        }
    )
    

    uploadcloudinary.end(req.file.buffer);
})


app.get("/alltemoignages",(req,res)=>{
    const sql="SELECT * FROM temoignage"
    dbtemoins.query(sql,[],(err,data)=>{
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