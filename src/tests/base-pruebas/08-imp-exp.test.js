import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08 imp-exp-test.js', () => {
    test('debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id)
        const heroesData = heroes.find( (heroe) => heroe.id === id )


        expect(heroe).toEqual(heroesData)
    })
    test('debe retornar undefined cuando id no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id)
      


        expect(heroe).toBe(undefined)
    })


    test('debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)
        const heroesData = heroes.filter( (heroe) => heroe.owner === owner )

        console.log(heroesData)
        expect(heroes).toEqual(heroesData)
    })

    test('debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)
        
        expect(heroes.length).toBe(2)
    })
})
