import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Prueba en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un heroe por id', () => { 

        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({id: 1, name: 'Batman', owner: 'DC'})



     });
    test('getHeroeById debe de retornar undefined si no existe', () => { 

    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy(undefined)

    });
    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => { 

        const name = 'DC'
        const owner = getHeroesByOwner(name);
        console.log(owner);
        
        expect(owner.length).toEqual(3)

        });
    test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => { 

        const name = 'Marvel'
        const owner = getHeroesByOwner(name);
        console.log(owner);
        
        expect(getHeroesByOwner(name).length).toEqual(2)

        });


 })