const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    age:String,
    bio:String,
    single:Boolean,
})

const Person = mongoose.model('Person', personSchema)

mongoose.connect('mongodb://127.0.0.1:27017/prac' , {
    serverSelectionTimeoutMS:10,
})
.then(async ()=>{
    console.log('Database Connected')
    const person = new Person({
        firstName:'alvi',
        lastName:'roy'
    })
    await person.save()
    console.log("person created")
    console.log(person)
})
.catch((e)=>{
    console.log(e)
})
.finally(()=>{
    mongoose.connection.close()
})