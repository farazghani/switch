// src/pages/VerifyEmail.tsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "@/api/axiosInstance"; 

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    axios
      .post("/auth/verify-email", { token })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {status === "loading" && <p className="text-lg">Verifying your email...</p>}
      {status === "success" && <p className="text-green-600 text-xl font-semibold">✅ Email verified successfully!</p>}
      {status === "error" && <p className="text-red-600 text-xl font-semibold">❌ Verification failed. Link may be invalid or expired.</p>}
    </div>
  );
};

export default VerifyEmail;
