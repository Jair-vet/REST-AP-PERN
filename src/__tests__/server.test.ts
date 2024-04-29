import request from "supertest"
import server from "../server"


describe('GET /api', () => {
    test('Should send back a json response', async () => {
        const res = await request(server).get('/api')

        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/)

        expect(res.text).toMatch('DESDE API') // un string al cual no puedo acceder
        expect(res.body.msj).toBe('DESDE API') // un string al cual puedo acceder al valor deseado

        console.log(res.text)
        console.log(res.body)
        
    })
})

