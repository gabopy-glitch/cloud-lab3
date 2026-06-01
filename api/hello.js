export default function handler(req, res) {
    const nombre = req.query.nombre || "Estudiante";
    res.status(200).json({
        mensaje: `Hola ${nombre}`
    });
}