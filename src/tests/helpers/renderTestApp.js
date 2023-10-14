import {store} from "../../store/store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";


export const renderTestApp = (component, options) => {

    const testStore = store(options?.initialState)

    return (
        <Provider store={testStore}>
            <MemoryRouter initialEntries={[options?.initialRoute]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )

}