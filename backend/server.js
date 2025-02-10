const express=require("express")
const mysql=require("mysql")
const cors=require("cors")
const app=express()
app.use(cors())
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


const db=mysql.createConnection({
    host:"br73rgcjphwqgonsyejw-mysql.services.clever-cloud.com",
    user:"uzlrsyfqpnolbfys",
    database:"br73rgcjphwqgonsyejw",
    password:"cebG3LZiEzT9kVWIQBCU"
})

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
app.listen(3006,()=>{
    console.log("server en ecoute")
})