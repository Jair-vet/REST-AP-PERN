import request from "supertest"
import server from "../../server"

describe('POST /api/products',  () => {
    test('should display validate errors', async () => {
        const response = await request(server).post('/api/products').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(2) // Para sacar el tamaño
    })

    test('should validate thet the price is greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Monitor Curvo',
            price: 0
        })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(2) // Para sacar el tamaño
    })

    test('should validate the price is a number and greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Monitor Curvo',
            price: "hola"
        })

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(2)

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(4) // Para sacar el tamaño
    })

    test('should create a new product', async () => {
        const response = await request(server).post('/api/products').send({
            name: "Mouse - Testing",
            price: 400
        })
        
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('data') // Que almenos contenga esa propiedad
        
        expect(response.status).not.toBe(404)
        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('errors')
        
    })
})
