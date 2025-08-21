import React, { useState } from "react";

export default function Exercise08() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.email.trim() || !form.password.trim()) {
      setMessage("Email and password should not be empty");
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userFound = existingUsers.find(
      (user: any) =>
        user.email === form.email && user.password === form.password
    );
    if (userFound) {
      setMessage("Login success");
    } else {
      setMessage("Login failed");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            width: "320px",
            border: "1px solid #ddd"
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Dang nhap tai khoan
          </h2>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChangeInput}
            style={{
              width: "100%",
              marginBottom: "16px",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChangeInput}
            style={{
              width: "100%",
              marginBottom: "20px",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />

          <button
            type="submit"
            style={{
              width: "105%",
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
              borderRadius: "6px",
              border: "none"
            }}
          >
            Login
          </button>

          {message && (
            <p
              style={{
                marginTop: "15px",
                textAlign: "center",
                color: message.includes("Done") ? "green" : "red"
              }}
            >
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
