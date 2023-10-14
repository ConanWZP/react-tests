import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";

export const renderWithRouter = (components, initialRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {components}
        </MemoryRouter>
    )
}