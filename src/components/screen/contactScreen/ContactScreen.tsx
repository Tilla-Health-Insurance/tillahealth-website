"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Building, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useSendContactUs } from "@/actions/Query/auth/auth_query";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	topic: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export default function ContactScreen() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			topic: "",
			email: "",
			message: "",
		},
	});

	const { mutate: sendContactUs } = useSendContactUs();
	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);

		const content = values.message;
		const email = values.email;
		const topic = values.topic;
		const data = {
			email,
			topic,
			content,
		};

		sendContactUs(data, {
			onSuccess: () => {
				form.reset();
				setIsSubmitting(false);
			},
		});
	}

	return (
		<div className="container mx-auto p-2 md:p-8 space-y-8">
			<div className="text-center space-y-4">
				<h1 className="text-3xl font-bold text-primary">Contact Us</h1>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					We would love to hear from you! If you have any questions or feedback,
					please reach out to us using the information below.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="space-y-8">
					<Card className="shadow-md rounded-lg bg-card md:p-4 border ">
						<CardHeader>
							<CardTitle className="text-xl font-semibold text-primary">
								Get in Touch
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col space-y-4">
							<div className="space-y-2">
								<h1 className="font-bold text-lg mb-2">Ethiopia</h1>
								<ContactItem
									icon={<Building className="h-5 w-5 text-muted-foreground" />}
									label="Bole, Addis Ababa"
									href="https://www.google.com/maps/search/?api=1&query=Bole,+Addis+Ababa"
								/>
								<ContactItem
									icon={<Mail className="h-5 w-5 text-muted-foreground" />}
									label="Support@tillahealth.com"
									href="mailto:Support@tillahealth.com"
								/>
								<ContactItem
									icon={<Phone className="h-5 w-5 text-muted-foreground" />}
									label="+251 96-865-8292"
									href="tel:+251968658292"
								/>
							</div>
							<div className="space-y-2">
								<h1 className="font-bold text-lg mb-2">USA</h1>
								<ContactItem
									icon={<Building className="h-5 w-5 text-muted-foreground" />}
									label="Maryland, USA"
									href="https://www.google.com/maps/search/?api=1&query=Maryland,USA"
								/>
								<ContactItem
									icon={<Mail className="h-5 w-5 text-muted-foreground" />}
									label="Admin@tillahealth.com"
									href="mailto:Admin@tillahealth.com"
								/>
								<ContactItem
									icon={<Phone className="h-5 w-5 text-muted-foreground" />}
									label="+1 (202)-975-5013"
									href="tel:+1 (202)-975-5013"
								/>
							</div>
						</CardContent>
					</Card>
				</div>

				<Card>
					<CardHeader>
						<CardTitle className="text-primary">Send Us a Message</CardTitle>
						<CardDescription>
							Fill out the form below and we`&apos`ll get back to you as soon as
							possible.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
								<FormField
									control={form.control}
									name="topic"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Your Subject</FormLabel>
											<FormControl>
												<Input
													placeholder="please write your subject "
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="Your email"
													type="email"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Your message"
													className="min-h-[120px]"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button
									type="submit"
									className="w-full hover:bg-primary"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Submitting..." : "Send Message"}
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
interface ContactProp {
	icon: any;
	label: string;
	href: string;
}

// Reusable Contact Item Component
const ContactItem = ({ icon, label, href }: ContactProp) => (
	<div className="flex items-center space-x-3">
		{icon}
		<a
			href={href}
			className="text-primary hover:underline"
			target="_blank"
			rel="noopener noreferrer"
		>
			{label}
		</a>
	</div>
);
