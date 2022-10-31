import { render, screen } from "@testing-library/react";
import Products from "../components/products/Products";

test("check buttons presence 'Ajouter au panier' and 'Voir le détail'", () => {
    render(<Products/>)
    expect(screen.getByRole('link', {name: 'Ajouter au panier'})).toBeInTheDocument()
    expect(screen.getByRole('link', {name: 'Voir le détail'})).toBeInTheDocument()
});
