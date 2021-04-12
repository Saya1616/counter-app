import {getImagen} from '../../base-pruebas/11-async-await';

describe('Pruebas 11-async-await', () => {
    test('getImagen debe retornar el Url de la imagen', async () => {
        
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true)
    })  
    
})
