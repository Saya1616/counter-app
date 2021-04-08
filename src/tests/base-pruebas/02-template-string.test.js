import {getSaludo} from "../../base-pruebas/02-template-string"





describe('Pruebas en el archivo 02-template-string.test.js', () => {
    test('getSaludo debe retornar Hola Saya', () => {
        const nombre = 'Saya'

        const saludo = getSaludo(nombre)

        expect(saludo).toBe('Hola ' + nombre)
    })

    test('getSaludo debe retornar Hola Carlos por defecto', () => {
        const saludo = getSaludo()

        expect(saludo).toBe('Hola Carlos' )
    })
    
})
