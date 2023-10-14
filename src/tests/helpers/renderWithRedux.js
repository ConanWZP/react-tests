import {store} from "../../store/store";
import {Provider} from "react-redux";


export const renderWithRedux = (component, initialState) => {

    const testStore = store(initialState)

    return (
        <Provider store={testStore}>
            {component}
        </Provider>
    )
}