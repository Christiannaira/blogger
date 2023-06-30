import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="container shadow m-5 p-5">
                <Outlet />

            </div>
        </>
    )
}

export default Layout;

