import { Router } from "express"
import { body, param } from 'express-validator'
import { createProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const  router = Router()


// Routing
router.get('/', (req, res) => {
    res.json('Desde Get')
})

router.post('/', 
    // Validación
    body('name')
      .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de Producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
    createProduct
)

router.put('/', (req, res) => {
    res.json('Desde Put')
})

router.patch('/', (req, res) => {
    res.json('Desde Patch')
})

router.delete('/', (req, res) => {
    res.json('Desde Delete')
})

export default router