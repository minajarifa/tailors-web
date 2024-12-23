
export default function Register() {
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        console.log()
    }
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                        <form onSubmit={handleRegisterSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
