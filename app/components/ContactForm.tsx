"use client";
import { useState } from "react";

const topics = ["General enquiry", "Join a descent", "Press", "Data and archive"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const email = String(d.get("email") || "");
    if (!String(d.get("name") || "").trim()) return setErr("Please tell us your name.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Please enter a valid email address.");
    if (!String(d.get("message") || "").trim()) return setErr("Please write a short message.");
    setErr("");
    setSent(true);
  };

  if (sent)
    return (
      <div className="sent">
        <h2 className="lead">Thank you.</h2>
        <p>This is a concept site, so nothing was actually sent. A real version would reply within a few days.</p>
        <button className="btn" onClick={() => setSent(false)}>Write another</button>
      </div>
    );

  return (
    <form className="cform" onSubmit={submit} noValidate>
      <label>Name<input name="name" autoComplete="name" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" /></label>
      <label>Topic
        <select name="topic" defaultValue={topics[0]}>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label>Message<textarea name="message" rows={5} data-lenis-prevent /></label>
      {err && <p className="err" role="alert">{err}</p>}
      <button className="btn" type="submit">Send message →</button>
    </form>
  );
}
