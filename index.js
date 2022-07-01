//Requerir mongoose
const mongoose = require("mongoose")
const Schema = mongoose.Schema
//Crear modelo de estudiante

const estudianteSchema = new Schema({
    nacionalidad: {
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        required: true, //Si no tiene nombre no se puede crear
        trim: true,
        minlength: 4,
        maxlength: 50
    },
    edad: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    carreraPrevia: {
        type: String,
        default: "Por Definir"
    },
    calificacion: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    modalidad: {
        type: String,
        enum: ["Presencial", "En linea", "Hibrido"],
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    idNumber: Number
}, {
    timestamps: true //Nos ayuda a guardarlo con fecha de creacion y actualizacion (createdAt, updatedAt)
})

const Estudiante = mongoose.model("Estudiante", estudianteSchema)


//Creamos el puente de conexion

//La BD / DB es estudiantesIronhack

async function conectarDB() {
    const db = await mongoose.connect("mongodb://localhost:27017/estudiantesIronhack")
}

conectarDB()


//Crear un estudiante

function crearEstudiante() {
    const enrique = new Estudiante({
        nacionalidad: "Mexicana",
        nombre: "Samuel",
        edad: 29,
        carreraPrevia: "Historiador",
        modalidad: "En linea",
        email: "sam@quiubo.com"
    })
    enrique.save()
        .then((enriqueGuardado) => {
            console.log(enriqueGuardado)
        })
        .catch(console.log)
}

//crearEstudiante()

//Encontrar todos los estudiantes

//Es lo mismo que la linea 88
// Estudiante.find()
//     .then((resultado) => console.log(resultado))
//     .catch((err) => console.log(err))

//Encontrar todos los estudiantes
// Estudiante.find({ nacionalidad: "Italiano" }, "nombre nacionalidad edad")
//     .then(console.log)
//     .catch(console.log)

//Encontrar por ID
// Estudiante.findById("62bf78a4c50b2fb8a2b5a9e8")
//     .then(console.log)
//     .catch(console.log)

//Encontrar uno solo
// Estudiante.findOne({ nacionalidad: "Italiano" })
//     .then(console.log)
//     .catch(console.log)

//Eliminar un estudiante

// Estudiante.findByIdAndDelete("62bf6c71f7af189e64850399")
//     .then(console.log)
//     .catch(console.log)


//Actualizar estudiante
// Estudiante
//     .findByIdAndUpdate("62bf78a4c50b2fb8a2b5a9e8", {
//         nacionalidad: "Mexicana"
//     })
//     .then(console.log)
//     .catch(console.log)

//Actualizar muchos
// Estudiante.updateMany({ email: /@quiubo\.com/ },
// { email: "hola@ironhack.com" })
//     .then(console.log)
//     .catch(console.log)

Estudiante.insertMany([{
    nacionalidad: "Mexicana",
    nombre: "Moises",
    edad: 29,
    carreraPrevia: "Musico",
    modalidad: "En linea",
    email: "moy@quiubo.com"
}, {
    nacionalidad: "Mexicana",
    nombre: "Vale",
    edad: 16,
    carreraPrevia: "Todologa",
    modalidad: "En linea",
    email: "vale@quiubo.com"
},
{
    nacionalidad: "Mexicana",
    nombre: "Horacio",
    edad: 47,
    carreraPrevia: "Todologo",
    modalidad: "En linea",
    email: "Horacio@quiubo.com"
},
{
    nacionalidad: "Mexicana",
    nombre: "Fernanda",
    edad: 29,
    carreraPrevia: "Psicologa",
    modalidad: "En linea",
    email: "fer@quiubo.com"
}
])
    .then(console.log)
    .catch(console.log)