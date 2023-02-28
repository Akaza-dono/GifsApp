import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../../src/hooks/useFetchGifs"

describe(" pruebas en el hook useFetchGifs",()=>{
    test("Debe de regresar el estado inicial",()=>{

        const {result:{current:{images,isLoading}}} =  renderHook( () => useFetchGifs('onePunch'))       
        expect(images.length).toBe(0);
        expect(isLoading).toBe(true)
        
    })

    test("debe de retornare un arreglo de imagenes y el isloading en false",async()=>{
        const {result} = renderHook(()=>useFetchGifs('onepunch'))

        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy()
    })
})