import mongoose, {Schema,model} from 'mongoose'

const pacienteSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    propietario:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    celular:{
        type:String,
        require:true,
        trim:true
    },
    convencional:{
        type:String,
        require:true,
        trim:true
    },
    ingreso:{
        type:Date,
        require:true,
        trim:true,
        default:Date.now()
    },
    sintomas:{
        type:String,
        require:true,
        trim:true
    },
    salida:{
        type:Date,
        require:true,
        trim:true,
        default:Date.now()
    },
    estado:{
        type:Boolean,
        default:true
    },
    veterinario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Veterinario'
    }
},{
    timestamps:true
})

export default model('Paciente',pacienteSchema)