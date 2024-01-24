import { ChangeEvent, FormEvent, useState } from "react";

export default function LogInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8080/user/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      console.log(await res.json());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="h-screen p-12">
      <div className="flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 m-auto bg-accent-content rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-white">
            Log In
          </h1>
          <form className="space-y-4" onSubmit={login}>
            <div>
              <label className="label" htmlFor="email">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                value={formData.email}
                onChange={onFormChange}
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full input input-bordered"
                required
              />
            </div>
            <div>
              <label className="label" htmlFor="password">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                value={formData.password}
                onChange={onFormChange}
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                required
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button className="btn btn-block" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
