import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import axios from "@/api/axiosInstance";
import { useState } from "react";

type ChangePasswordInputs = {
  old_password: string;
  new_password: string;
};

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ChangePasswordInputs>();

  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const onSubmit = async (data: ChangePasswordInputs) => {
    setMessage(null);

    if (!token) {
      setMessage({ type: "error", text: "❌ Invalid or missing token in URL." });
      return;
    }

    try {
      await axios.post(
        "/users/change-password",
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // keep if your backend requires it
        }
      );

      setMessage({ type: "success", text: "✅ Password changed successfully" });
      reset();
    } catch (err: any) {
      const errorMsg =
        err?.response?.data?.detail || err.message || "Something went wrong";
      setMessage({ type: "error", text: `❌ ${errorMsg}` });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Change Password</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <div>
          <label className="block mb-1 font-medium">Old Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            {...register("old_password", { required: "Old password is required" })}
          />
          {errors.old_password && (
            <p className="text-red-500 text-sm mt-1">{errors.old_password.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            {...register("new_password", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.new_password && (
            <p className="text-red-500 text-sm mt-1">{errors.new_password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Changing..." : "Change Password"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-lg font-medium ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
};

export default ChangePassword;
