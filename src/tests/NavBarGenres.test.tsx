import { render, screen } from "@testing-library/react";
import NavBarGenres from "../components/navBarGenres/NavBarGenres";

test("chek buttons presence",()=>{
    render(<NavBarGenres/>)
    expect(screen.getByRole('button',{name:'Rap'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Pop'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Electro'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Reggae'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Rock'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Hip-Hop'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Dance Hall'})).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'RnB'})).toBeInTheDocument()
})