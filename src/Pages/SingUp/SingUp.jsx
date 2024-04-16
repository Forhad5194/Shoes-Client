import { Link } from 'react-router-dom';
import img from '../../assets/LogIn/logIn.png'
import Social from '../../Component/Social/Social';
import { useForm } from "react-hook-form"



const SingUp = () => {

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)










    return (
        <div>
            <div>
                <h2 className='text-center text-5xl mt-10 font-bold'>Join Apon Style Family</h2>
                <p className='text-center text-xl mt-5 font-medium uppercase'>explore new style of shoes</p>
            </div>
            <div className='flex  flex-col mt-10 md:flex-row md:justify-between md:items-center justify-between items-center'>
                <div className='w-1/2 '>
                    <img src={img} alt="" />
                </div>
                <div className='w-1/2'>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' {...register("name")} className="input input-bordered input-primary w-full " required />


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' {...register("email")} className="input input-bordered input-primary w-full" required />


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password"  {...register("password")} className="input input-bordered input-primary w-full " required />


                            <label className="label">

                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-primary' value={'Sing UP '} />

                        </div>
                    </form>

                    <div className=' mt-5'>
                        <h2 className='text-center tex-xl font-medium '> Don’t have an account? <Link to={'/logIn'} className='uppercase underline text-pink-600'>LogIn</Link> </h2>
                    </div>

                    <h2 className=' text-4xl text-center font-bold divider mt-10 uppercase'>OR</h2>

                    <Social />




                </div>
            </div>
        </div>
    );
};

export default SingUp;