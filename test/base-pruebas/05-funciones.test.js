import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('prueba en 05-funciones', () => { 
   
    test('getUser debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser()
        console.log(user);


        expect( testUser ).toEqual( user );

     });

    test('getUsuarioActivo debe de retornar un objeto', () => { 

        const name = 'Cristobal'
        const user = getUsuarioActivo(name)
        console.log(name);
        expect( user ).toEqual({
            uid: 'ABC567',
            username: name
        });
    });

});