import { useForm, SubmitHandler } from "react-hook-form";
import axios from "@/api/axiosInstance";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface RegisterFormInputs {
  email: string;
  password: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  avatar_url?: string;
}

interface RegisterResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: Record<string, any>;
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      console.log("Registering user with data:", data);
      const res = await axios.post<RegisterResponse>("/auth/register", data);
      toast.success("Registration successful");
      navigate("/verify-email", { state: { email: data.email } });
    } catch (error: any) {
      const msg =
        error?.response?.data?.detail?.[0]?.msg || "Registration failed";
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              {...register("first_name", { required: "First name is required" })}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              {...register("last_name")}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>

        {/* Phone & Avatar */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              {...register("phone_number")}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <div>
            <label className="block text-sm font-medium mb-1">
              Avatar URL (optional)
            </label>
            <input
              type="text"
              {...register("avatar_url")}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          </div>
         
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-gray-800"
        >
          {isSubmitting ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
