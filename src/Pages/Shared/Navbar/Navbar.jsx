import { Link, NavLink } from "react-router-dom";
import { IoBagHandle } from "react-icons/io5";


const Navbar = () => {

    const navItems = <>

        <NavLink  >Home</NavLink>
        <NavLink to={'product'} > <div className="badge badge-secondary badge-outline">New Arrivals </div></NavLink>
        <NavLink>
            <Link to={'/'}>
                <button className=" mb-1">
                    <div className="flex  items-center">
                        <IoBagHandle className="text-xl text-pink-600" />
                        <div className="text-xl text-black">+0</div>
                    </div>
                </button>
            </Link>
        </NavLink>
        <NavLink >About Us </NavLink>
        <NavLink to={'logIn'}> SingIn  </NavLink>

    </>





    return (
        <div>
            <div className="navbar bg-pink-50 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Apon Style </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal text-sm font-normal gap-5 px-1">
                        {navItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;