import {render, screen} from "../utils/test-utils";
import {Footer} from '../components/footer/Footer'

test("check elements presence",()=>{
    const currentYear = new Date().getFullYear()
    render(<Footer/>)
    expect(screen.getByRole('link', {name:'logo du site'})).toBeInTheDocument()
    expect(screen.getByRole('heading', {name:'Liens utiles'})).toBeInTheDocument()
    expect(screen.getByRole('link', {name:'Qui sommes nous ?'})).toBeInTheDocument()
    expect(screen.getByRole('link', {name:'Données personnelles'})).toBeInTheDocument()
    expect(screen.getByRole('heading', {name:'Suivez-nous sur'})).toBeInTheDocument()
    expect(screen.getByRole('img', {name:'logo de Facebook'})).toBeInTheDocument()
    expect(screen.getByRole('img', {name:'logo de Youtube'})).toBeInTheDocument()
    expect(screen.getByRole('img', {name:'logo de Twitter'})).toBeInTheDocument()
    expect(screen.getByRole('img', {name:'logo de Instagram'})).toBeInTheDocument()
    expect(screen.getByText(`© ${currentYear} Listen to me`)).toBeInTheDocument()
})