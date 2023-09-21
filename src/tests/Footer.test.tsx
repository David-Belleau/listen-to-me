import {render, screen} from "../utils/test-utils";
import {Footer} from '../components/footer/Footer'

test("check elements presence",()=>{
    const currentYear = new Date().getFullYear()
    render(<Footer/>)
    expect(screen.getByRole('button',{name:'Contact'})).toBeInTheDocument()
    expect(screen.getByText(`© ${currentYear} Listen to me`)).toBeInTheDocument()
})