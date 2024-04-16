import { Link } from 'react-router-dom';
import img from '../../assets/LogIn/logIn.png'
import Social from '../../Component/Social/Social';
const Login = () => {
    return (
        <div>
            <h2 className='text-center text-5xl mt-10 font-bold'>Please Login. </h2>
            <p className='text-center text-xl mt-5 font-medium'>Welcome Back </p>
            <div className='flex  flex-col mt-10 md:flex-row md:justify-between md:items-center justify-between items-center '>
                <div className='w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className='w-1/2 '>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-primary" required />
                        </div>

                        <div>
                            <input className='btn btn-outline btn-primary w-full mt-5 text-xl font-bold text-white ' type="button" value="LogIn" />
                        </div>

                    </form>

                    <div className='mt-5'>
                        <h2 className='text-center tex-xl font-medium '> Don’t have an account? <Link to={'/singUp'} className='uppercase underline text-pink-600'>Join</Link> </h2>
                    </div>

                    <h2 className=' text-4xl text-center font-bold divider mt-10 uppercase'>OR</h2>

                    <Social />
                </div>
            </div>
        </div>

    );
};

export default Login;