const simpleLogger = (req,res,next)=>{
    console.log(req.url , " -- ", req.method, " -- ", `${new Date().toISOString()}`)
    const name = req.query.name
    if(name==="safa"){
        return res.json({
            message:"Correct query"
        })
    }
    next()
}

app.use(simpleLogger)


app.get('/' ,(req,res)=>{
    res.json({
        message:"hello man!"
    })
})
