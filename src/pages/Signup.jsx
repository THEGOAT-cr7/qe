import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { toast } from "react-toastify";

function Signup() {
  const { isPending, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    await signup(displayName, email, password);
  };

  return (
    <main>
      <div className="relative h-screen">
        <div className="lg:flex h-full">
          {/* IMAGE — same as login */}
          <div className="lg:w-1/2 w-full h-full lg:h-full bg-[url('https://picsum.photos/1200/800')] bg-cover bg-center bg-no-repeat" />

          {/* FORM */}
          <div className="lg:w-1/2 w-full flex items-center justify-center h-full lg:static absolute inset-0 z-10 px-4 bg-black/60 lg:bg-transparent text-white">
            <form
              onSubmit={handleSubmit}
              className="max-w-sm w-full bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

              <FormInput label="User Name" name="displayName" type="text" />
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="password" type="password" />
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />

              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="my-2 btn btn-primary w-full"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner mr-2"></span>
                      Loading...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>

                <button className="btn bg-white text-black border border-gray-300 opacity-50 cursor-not-allowed w-full">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="mr-2"
                  >
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    />
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    />
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    />
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    />
                  </svg>
                  Login with Google
                </button>
              </div>

              <div className="mt-4 text-white">
                <p>
                  Already have an account?{" "}
                  <Link className="underline font-medium" to="/login">
                    Login
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

export default Signup;
  