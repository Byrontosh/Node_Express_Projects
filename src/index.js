import express from 'express'
import morgan from 'morgan'
import fetch from 'node-fetch'
import { v4 as uuidv4 }  from 'uuid'


const app = express()


let pacientes

app.use(morgan('dev'))
app.use(express.json())


// Método para obtener todos los pacientes
app.get('/pacientes',async(req,res)=>{
    const peticion = await fetch("http://localhost:4000/pacientes")
    const respuesta = await peticion.json()
    res.json(respuesta)
})


// Método para obtener un solo paciente
app.get('/pacientes/:id', async(req,res)=>{
    const peticion = await fetch(`http://localhost:4000/pacientes/${req.params.id}`)
    const respuesta = await peticion.json()
    if(Object.keys(respuesta).length===0)
    {
        return res.status(404).json({mensaje:"Paciente no encontrado"})
    }
    else{
        res.json(respuesta)
    }
})


// Método para crear un nuevo paciente
app.post('/pacientes/',async(req,res)=>{
    const url = "http://localhost:4000/pacientes"
    const paciente = {
        ...req.body,
        id:uuidv4()
    }
    const peticion = await fetch(url,{
        method:'POST',
        body:JSON.stringify(paciente),
        headers:{'Content-Type':'application/json'}
    })
    const respuesta = await peticion.json()
    res.json(respuesta)
})






// Método para actualizar un paciente registrado
app.put('/pacientes/:id',async(req,res)=>{
    const peticion = await fetch(`http://localhost:4000/pacientes/${req.params.id}`)
    const respuesta = await peticion.json()
    if(Object.keys(respuesta).length===0)
    {
        return res.status(404).json({mensaje:"Paciente no encontrado"})
    }
    else{
        const url = `http://localhost:4000/pacientes/${req.params.id}`
        const peticion = await fetch(url,{
            method:'PUT',
            body:JSON.stringify(req.body),
            headers:{'Content-Type':'application/json'}
        })
        const respuesta = await peticion.json()
        res.json({mensaje:"Paciente actualizado satisfactoriamente"})
    }
})





// Método para eliminar un nuevo paciente
app.delete('/pacientes/:id',async(req,res)=>{
    
    const peticion = await fetch(`http://localhost:4000/pacientes/${req.params.id}`)
    const respuesta = await peticion.json()
    if(Object.keys(respuesta).length===0)
    {
        return res.status(404).json({mensaje:"Paciente no encontrado"})
    }
    else{
        const url = `http://localhost:4000/pacientes/${req.params.id}`
            const peticion = await fetch(url,{
            method:'DELETE',
        })
        const respuesta = await peticion.json()
        res.json({mensaje:"Paciente eliminado satisfactoriamente"})
    }
})




app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');