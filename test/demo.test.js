describe('prueba en <demoComponent>', () => {  

    
    test(' esta prueba no debe de fallar', () => {
    
        // 1 inicializacion
        const message1 = 'hola mundo'

        // 2 estimulo
        const message2 = message1.trim(); 

        // 3 observar el estimulo 

        // expect( message1 ).toBe( message2 );
        expect(message1).toBe(message2);

    });
});