import {retornaArreglo} from '../../base-pruebas/07-deses-arr'


describe('pruebas en el archivo 07-deses-arr.test.js', () => {
    test('retornaArreglo debe retornar un string y un numero', () => {
        
        const [letras, numeros] =retornaArreglo() //return ['ABC', 123]; 

        expect(typeof letras).toBe('string')
        expect(typeof numeros).toBe('number')
    })
    
})
