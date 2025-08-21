import React, { useState, useRef } from "react";

export default function Exercise07() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
  });

  const [message, setMessage] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);

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

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setMessage("Name, Email and Password should not be empty");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const isEmailDuplicate = existingUsers.some(
      (user: any) => user.email === form.email
    );
    if (isEmailDuplicate) {
      setMessage("Email already exist");
      return;
    }

    const updatedUsers = [...existingUsers, form];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setForm({
      name: "",
      email: "",
      password: "",
      address: ""
    });

    setMessage("Done");

    if (nameInputRef.current) {
      nameInputRef.current.focus();
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
            Dang ky tai khoan
          </h2>

          <label>Ten sinh vien</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChangeInput}
            ref={nameInputRef}
            style={{
              width: "100%",
              marginBottom: "16px",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />

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

          <label>Mat khau</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChangeInput}
            style={{
              width: "100%",
              marginBottom: "16px",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />

          <label>So dien thoai</label>
          <input
            type="text"
            name="address"
            value={form.address}
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
            Dang ky
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
