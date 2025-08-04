import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

interface FormInput {
  token: string;
}

export default function VerifyPhone() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInput>();
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email: string })?.email;

  const onSubmit = async (data: FormInput) => {
    try {
      await axios.post("/auth/verify-phone", data); // change this endpoint if needed
      toast.success("Phone verified!");
      navigate("/"); // or /dashboard
    } catch (err: any) {
      toast.error(err.response?.data?.detail?.[0]?.msg || "Verification failed");
    }
  };

  return (
    <div className="centered-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-card">
        <h2>Verify Phone</h2>
        <input
          type="text"
          placeholder="Enter OTP sent to phone"
          {...register("token", { required: "OTP is required" })}
          className="input"
        />
        {errors.token && <p className="error-text">{errors.token.message}</p>}
        <button type="submit" disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? "Verifying..." : "Verify"}
        </button>
      </form>
    </div>
  );
}
