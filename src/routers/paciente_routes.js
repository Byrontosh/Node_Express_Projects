import {Router} from 'express'
import {
    actualizarPaciente,
    detallePaciente,
    eliminarPaciente,
    listarPacientes,
    registrarPaciente,
} from "../controllers/paciente_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router()


router.get("/pacientes",verificarAutenticacion,listarPacientes);
router.get("/paciente/:id",verificarAutenticacion, detallePaciente);
router.post("/paciente/registro", verificarAutenticacion,registrarPaciente);
router.put("/paciente/actualizar/:id", verificarAutenticacion,actualizarPaciente);
router.delete("/paciente/eliminar/:id", verificarAutenticacion,eliminarPaciente);


export default router