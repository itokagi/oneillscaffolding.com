"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SESSION_KEY = "osg_forms_session";

export function LoginGate({ children }) {
  const [status, setStatus] = useState("checking");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only authorise if the user logged in during THIS page visit.
    // Navigating away clears the session key (see cleanup below), so
    // returning to this page always starts at the login screen.
    const authed = sessionStorage.getItem(SESSION_KEY);
    setStatus(authed ? "authorized" : "login");

    return () => {
      // Clear session when the component unmounts (user navigates away).
      sessionStorage.removeItem(SESSION_KEY);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forms-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        sessionStorage.setItem(SESSION_KEY, "true");
        setStatus("authorized");
      } else {
        setError("Incorrect username or password. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    await fetch("/api/auth/forms-logout", { method: "POST" });
    setStatus("login");
    setUsername("");
    setPassword("");
  }

  if (status === "checking") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-punch border-t-transparent" />
      </div>
    );
  }

  if (status === "authorized") {
    return (
      <>
        {children}
        <div className="container px-[5%] py-6 flex justify-end">
          <button
            onClick={handleLogout}
            className="text-sm text-neutral-mid hover:text-neutral-dark transition-colors"
          >
            Sign out
          </button>
        </div>
      </>
    );
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-[5%] py-24">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div className="mb-4 h-[3px] w-12 bg-punch" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-punch">
            Staff Access
          </p>
          <h2 className="text-3xl font-bold">Forms Library Login</h2>
          <p className="mt-3 text-sm text-neutral-mid">
            This area is restricted to O&apos;Neill Scaffolding Group staff.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="username">Email address</Label>
            <Input
              id="username"
              type="email"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
          {error && (
            <p className="rounded-button bg-red-50 px-4 py-3 text-sm text-red-700 border border-red-200">
              {error}
            </p>
          )}
          <Button type="submit" className="w-full h-12" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </Button>
        </form>
      </div>
    </section>
  );
}
