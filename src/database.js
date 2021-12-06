//creamos nuestra bd
const mongoose =require('mongoose')

//URI=('mongodb://localhost/bdVacunados')
URI='mongodb+srv://user_antediazc:herminia1@clusterequipo8-g51.4a088.mongodb.net/bdVacunados?retryWrites=true&w=majority'

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then (db => console.log('Base de datos conectada', db.connection.name))
.catch(error => console.log(error))

module.exports= mongoose