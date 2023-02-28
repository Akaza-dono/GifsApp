import { render, screen } from "@testing-library/react"
import { GifItem } from "../../../src/components/GifItem";

describe('Suit de pruebas para la aplicaciond de gifs',()=>{
    const title = "Un titulo";
    const url = "unauurl"

    test('El gifItem debe hacer match con el snapshot',()=>{
        const { container } = render(<GifItem title={title} url={url}/>)
        expect( container ).toMatchSnapshot();
   }) 

    // test('Debe de confirmar que las prop types esten resueltas',()=>{
    //     render(<GifItem title={title} url={url}/>)
    //     expect(screen.getByText(title).innerHTML).toBe(title)
    // });

    test('debe de mostrar la imagen con el url y el alt indicado',()=>{
        render(<GifItem title={title} url={url}/>)
        const {src, alt} = screen.getByRole('img');
        expect(src.split('/')[3]).toBe(url);
    });

    test('Debe de reconocer que actualmente el titulo exite',()=>{
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title).innerHTML).toBeTruthy();
    })

})