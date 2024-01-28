import { useEffect } from "react";
import { useUser } from "../lib/user";
import { Link } from "wouter";

export default function NavBar() {
  const { user, update } = useUser();

  useEffect(() => {
    update();
  }, []);

  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              Segfault
            </Link>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            {user ? (
              <Link href="/question/new" className="">
                <button className="btn btn-primary">New</button>
              </Link>
            ) : (
              <Link href="/login">
                <button className="btn">Log In</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
