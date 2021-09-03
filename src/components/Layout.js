import Menu from "./Menu";
import {CarsProvider} from "../context/Cars";

const Layout = ({children}) => {
    return (
        <>
            <CarsProvider>
                <div className="App">
                    <div className="App-header p-3">
                            <Menu />
                    </div>
                    <section>
                        {children}
                    </section>
                </div>
            </CarsProvider>
        </>
    );
}
export default Layout;