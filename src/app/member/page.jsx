"use client";
import LogoAnimation from "@/components/LogoAnimation";
import { auth, authStore, provider } from "@/lib/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useSpring, animated } from "@react-spring/web";
import { Jersey_15 } from "next/font/google";
import { useEffect, useState } from "react";
const Jersey15 = Jersey_15({
  variable: "--font-jersey-15",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Member() {
  console.log(authStore.getState().values);
  const [error, setError] = useState("");

  async function loginWithGoogle() {
    console.log("login with google");
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      if (!email.endsWith("@bmu.edu.in")) {
        setError("Only @bmu.edu.in emails are allowed.");
        await signOut(auth);
        return;
      }

      setError("");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      {authStore.getState().value ? (
        <>
          <div className="flex w-full h-full mt-8">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="flex flex-col items-center justify-center h-full">
                ok
              </div>
            </div>
            <div className="hidden md:block md:w-2/3 lg:w-3/4 bg-[#0f0f0f] h-full"></div>
          </div>
        </>
      ) : (
        <div className="flex w-full h-full mt-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <LogoAnimation color="#bbb" time={3} height={100} />
              </div>
              <div
                className={`${Jersey15.className} text-3xl text-[#bbb] mt-2`}
              >
                Members Login
              </div>
              <div className="text-[#bbb] text-xs">
                continue with your @bmu.edu.in id
              </div>

              <div
                className={`text-[#bbb] text-xs ${error ? "text-red-500" : ""}`}
              >
                {authStore.getState().value ? (
                  <div className="text-[#218b3c] ">
                    Signed in as: {authStore.getState().value.email}
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      loginWithGoogle();
                    }}
                    className={`${Jersey15.className} text-xl cursor-pointer glass rounded-xl px-3 p-2 mt-8`}
                  >
                    Sign in with Google
                  </div>
                )}
                {error && (
                  <div className="text-red-500 opacity-90">{error}</div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-2/3 lg:w-3/4 bg-[#0f0f0f] h-full"></div>
        </div>
      )}
    </div>
  );
}
