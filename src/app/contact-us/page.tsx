"use client";

import { Meteors } from "@/components/ui/meteors";
import { useState } from "react";

export default function Page() {
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const placeholders = [
    "Contact Us for any query",
    "24×7 customer service",
    "Enter Yout Email Address",
  ];

  const handleChange = (e: any) => {
    setemail(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <section className="overflow-hidden w-screen h-screen flex justify-center items-center gap-2 relative">
        <div className="w-full h-full bg-black/30 z-10 absolute" />
        <form
          onSubmit={() => alert("Email Submitted")}
          className="w-4/5 bg-transparent rounded-xl bg-black flex flex-col gap-4 z-20"
        >
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter Your Email"
            className="bg-transparent w-full border outline-none rounded-full px-4 py-2 shadow"
            onChange={(e: any) => setemail(e.target.value)}
          />
          <textarea
            rows={10}
            className="w-full bg-transparent border outline-none rounded-xl px-4 py-2 shadow"
            placeholder="Enter Your Message..."
            value={message}
            onChange={(e: any) => setmessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-transparent border rounded-full shadow w-full py-2 font-bold"
          >
            Submit
          </button>
        </form>
        <Meteors number={20} className="" />
      </section>
    </>
  );
}
