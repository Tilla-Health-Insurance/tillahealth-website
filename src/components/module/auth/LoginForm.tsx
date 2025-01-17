"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log({ email, password, rememberMe });
	};

	return (
		<div className="p-6 flex items-center justify-center bg-gray-50 border-2">
			<div className="w-full max-w-md max-h-md p-8 space-y-6">
				<div className="text-center space-y-2">
					<h1 className="text-3xl font-bold tracking-tight text-primary">
						LOGIN
					</h1>
					<div className="space-y-1">
						<p className="text-lg text-gray-600">Welcome Back.</p>
						<p className="text-sm text-gray-500">
							Please Login to your account
						</p>
					</div>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email Address</Label>
						<Input
							id="email"
							type="email"
							placeholder="Enter your email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="remember"
								checked={rememberMe}
								onCheckedChange={(checked) => setRememberMe(checked as boolean)}
							/>
							<Label htmlFor="remember" className="text-sm">
								Remember Me
							</Label>
						</div>
						<Link
							href="/forgot-password"
							className="text-sm text-primary hover:underline"
						>
							Forgot Password? Click Here
						</Link>
					</div>

					<Button
						type="submit"
						className="w-full bg-primary hover:bg-[#A01830] text-white"
					>
						Login
					</Button>

					<div className="text-center space-x-2 text-sm">
						<span className="text-gray-600">Don&apos;t have an account?</span>
						<Link href="/sign-up" className="text-primary hover:underline">
							Sign Up
						</Link>
						<span className="text-gray-600">|</span>
						<Link href="/statements" className="text-primary hover:underline">
							Access Statements
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
