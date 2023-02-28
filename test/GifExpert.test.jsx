import { render, screen } from "@testing-library/react"
import { GifExpert } from "../src/GifExpert"

describe("Testsuit de gifExpert",()=>{
    test("Debe hacer match con el snapshot",()=>{
        const {container} = render(<GifExpert/>);
        screen.debug()
        expect(container).toMatchSnapshot();

    });
    // test("debe de existir el input con el value indefinido",()=>{
    //     expect(screen.getByText('Cargando...')).toBeTruthy()
    //     // const input = screen.getByRole('textbox');
    //     // screen.debug()    
    // })
})