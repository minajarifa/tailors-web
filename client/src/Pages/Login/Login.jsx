import Social from "../../Components/Social";

export default function Login() {
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user, "handleLoginSubmit")
    }
    return (
        <div className="mx-20 my-20 shadow-2xl card bg-base-100 shrink-0">
            <form onSubmit={handleLoginSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="mt-6 form-control">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            <div>
               <Social/>
            </div>
        </div>

    )
}
