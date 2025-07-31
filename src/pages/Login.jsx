import { Link } from "react-router-dom";
import FormInput from "../components/Forminput";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { isPending, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const success = await login(email, password);
    console.log("Login success:", success);
  };

  return (
    <main>
      <div className="relative h-screen">
        <div className="lg:flex items-center justify-center h-full">
          <div className="lg:w-1/2 w-full h-full lg:h-full bg-[url('https://picsum.photos/1200/800')] bg-cover bg-center bg-no-repeat" />

          {/* FORM */}
          <div className="lg:w-1/2 w-full flex items-center justify-center h-full lg:static absolute inset-0 z-10 px-4 bg-black/60 lg:bg-transparent text-white">
            <form
              onSubmit={handleSubmit}
              className="max-w-sm w-full bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4">Log In</h2>

              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="password" type="password" />

              <button
                type="submit"
                className={`my-2 btn btn-primary w-full ${
                  isPending
                    ? "opacity-50 pointer-events-none cursor-not-allowed"
                    : ""
                }`}
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner mr-2"></span>
                    Loading...
                  </>
                ) : (
                  "Log In"
                )}
              </button>

              <div className="mt-4 text-white">
                <p>
                  Don't have an account?{" "}
                  <Link className="underline font-medium" to="/signup">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
