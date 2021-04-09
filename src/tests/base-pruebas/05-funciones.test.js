import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones'



describe('Pruebas en el archivo 05-funciones.test.js', () => {
    test('getUser debe retornar un objeto ', () => {
        
        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }
        
        
        const testUsuario = getUser()


        expect(testUsuario).toEqual(usuario)
    })
    
    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = "Saya"

        const usuario = {

            uid: 'ABC567',
            username: nombre

        }

        const testUsuario = getUsuarioActivo(nombre)

        expect(testUsuario).toEqual(usuario)

    })
    
})
