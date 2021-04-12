import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"
import heroes from "../../data/heroes";

describe('pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un HeroesAsync ', (done) => {
        
        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {

            expect(heroe).toBe(heroes[0]);
            done();

        });


    });
    test('debe devolver error si el heroe no existe', (done) => {
        const id=100;
        getHeroeByIdAsync(id).catch(e => {

            expect(e).toBe('No se pudo encontrar el héroe')
            done();

        });
    }); 
    
});
