import { Link, Navigate } from "react-router-dom";
import Social from "../../Components/Social";
import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Components/Auth/AuthProvider";

export default function Register() {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { name, email, password, photo };
        console.log(newUser);
        try {
            const result = await createUser(email, password);
            console.log(result);
            await updateUserProfile(name, photo);
            Swal.fire("Register successfully!");
            Navigate("/");
        } catch (error) {
            console.error(error);
            Swal.fire(`${error}`);
        }
    };
    return (
        <div>
            <h1 className="mt-10 text-5xl text-center">Register please </h1>
            <div className="mx-20 my-20 shadow-2xl card bg-base-100 shrink-0">
                <form onSubmit={handleLoginSubmit} className="card-body">
                    <div className="form-control">
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name="photo" type="text" placeholder="photoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="mt-6 form-control">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div>
                    <Social />
                </div>
                <h1 className="mb-10 text-xl text-center">Already have an? please <Link className="text-blue-600" to="/Login">Login</Link> now</h1>
            </div>
        </div>
    )
}