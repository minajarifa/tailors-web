import { Link, useNavigate } from "react-router-dom";
import Social from "../../Components/Social";
import { useContext } from "react"; 
import { AuthContext } from "../../Components/Auth/AuthProvider";
import Swal from "sweetalert2";

export default function Login() {
    const { signIn } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password); 
            console.log("Login Result:", result);

            Swal.fire({
                title: "Login successful!",
                icon: "success",
            });

            navigate("/"); 

        } catch (error) {
            console.error("Login Error:", error);

            Swal.fire({
                title: "Login failed!",
                text: `${error.message || "Something went wrong."}`,
                icon: "error",
            });
        }
    };

    return (
        <div>
            <h1 className="mt-10 text-5xl text-center">Login please</h1>
            <div className="mx-20 my-20 shadow-2xl card bg-base-100 shrink-0">
                <form onSubmit={handleLoginSubmit} className="card-body">
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="mt-6 form-control">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
                <div>
                    <Social />
                </div>
                <h1 className="mb-10 text-xl text-center">
                    New to this site? Please{" "}
                    <Link className="text-blue-600" to="/Register">
                        Register
                    </Link>
                </h1>
            </div>
        </div>
    );
}