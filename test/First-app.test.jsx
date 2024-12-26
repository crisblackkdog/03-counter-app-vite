const { render } = require("@testing-library/react")
const { FirstApp } = require("../src/First-app")


describe('Pruebas First-app', () => { 
    test('debe hacer match con snapshot', () => { 

        const title ='Hola, soy goku';
        const {container} = render( <FirstApp title = {title} /> )
        // console.log(container);

        expect(container).toMatchSnapshot();
     })
    test('debe de mostrar el titulo en h1', () => { 

        const title ='Hola, soy goku';
        const {container, getByText} = render( <FirstApp title = {title} /> )

        expect(getByText(title)).toBeTruthy()

        const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toContain(title)

     })
 })