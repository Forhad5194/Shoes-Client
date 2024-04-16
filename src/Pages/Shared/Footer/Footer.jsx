
const Footer = () => {
    return (
        <div>
            <footer className="footer mt-10 p-10 rounded-xl bg-pink-50 text-base-content">
                <aside>

                    <p className="text-4xl font-semibold text-center">Apon Shoes Store.<br />Providing reliable tech since 1952</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center  p-4 bg-pink-50 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Apon Shoes Store. </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;