import { render, screen } from "@testing-library/react";
import Unauth from "../Unauth";

test('check elements presence',()=>{
    render(<Unauth/>)
    expect(screen.getByAltText('Logo du site')).toBeInTheDocument()
    expect(screen.getByRole('button', {name:'Se connecter'})).toBeInTheDocument()
})