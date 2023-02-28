import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../../src/components/AddCategory";

describe("Pruebas de <AddCategory />",()=>{
    const inputValue = 'saitama';
    test("debe de cambiar el valor de la caja de texto",()=>{
        render(<AddCategory onNewValue={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue)
    });

    test("Debe de llamar a onNewValue si el input tiene un valor",()=>{
        const onNewValue = jest.fn();
        render(<AddCategory onNewValue={onNewValue}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form)
        expect(input.value).toBe('');
        expect(onNewValue).toHaveBeenCalled();
        expect(onNewValue).toHaveBeenCalledTimes(1);
        expect(onNewValue).toHaveBeenCalledWith(inputValue)
    });

    test("No debe de llamar el onNewCategory si el input esta vacio",()=>{
        const onNewValue = jest.fn();
        render(<AddCategory onNewValue={onNewValue}/>);
        // if(expect( screen.getByRole('textbox').value).toBe('')){
        //     expect(onNewValue).toBeCalledTimes(0)
        // }
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewValue).toHaveBeenCalledTimes(0);
        expect(onNewValue).not.toHaveBeenCalled()
    })
});