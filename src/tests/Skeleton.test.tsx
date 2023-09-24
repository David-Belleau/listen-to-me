import {render, screen} from "../utils/test-utils";
import { Skeleton } from "../components/loading/Skeleton";

test("check elements presence", () => {
    render(<Skeleton />);
    expect(screen.getByLabelText("round")).toBeInTheDocument();
    expect(screen.getByLabelText("bar")).toBeInTheDocument();
})