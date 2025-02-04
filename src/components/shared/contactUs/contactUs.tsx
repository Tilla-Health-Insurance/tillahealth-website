import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const ContactUs = () => {
	return (
		<section className="relative py-20">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
				<motion.div
					className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				/>
			</div>

			<div className="container relative z-10 px-4">
				<motion.div
					className="max-w-4xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* Content Card */}
					<div className="relative backdrop-blur-sm rounded-3xl border border-primary/10 bg-background/30 p-8 md:p-12">
						{/* Decorative Corner */}
						<div className="absolute -top-6 -right-6">
							<motion.div
								className="w-12 h-12 rounded-full bg-primary/20"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 0.8, 0.5],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									repeatType: "reverse",
								}}
							/>
						</div>

						{/* Title Group */}
						<div className="text-center mb-8">
							<motion.div
								className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4"
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
								<span className="text-sm font-medium text-primary">
									24/7 Support
								</span>
							</motion.div>

							<motion.h2
								className="text-3xl md:text-4xl font-bold mb-4"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								Need Additional Help?
							</motion.h2>
						</div>

						{/* Contact Options Grid */}
						<motion.div
							className="grid grid-cols-1 md:grid-cols-3 gap-6"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
						>
							{/* Email Support */}
							<motion.div
								className="group relative flex flex-col items-center p-6 rounded-2xl border border-primary/10 bg-background/50 hover:bg-primary/5 transition-all duration-300"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
									<Mail className="w-6 h-6 text-primary" />
								</div>
								<h3 className="font-semibold mb-2">Email Support</h3>
								<p className="text-sm text-muted-foreground mb-1">
									Response within 24 hours
								</p>
								<a
									href="mailto:Support@tillahealth.com"
									className="text-sm text-primary hover:text-primary/80 transition-colors"
								>
									Support@tillahealth.com
								</a>
								<a
									href="mailto:Admin@tillahealth.com"
									className="text-sm text-primary hover:text-primary/80 transition-colors"
								>
									Admin@tillahealth.com
								</a>
							</motion.div>

							{/* Phone Support */}
							<motion.div
								className="group relative flex flex-col items-center p-6 rounded-2xl border border-primary/10 bg-background/50 hover:bg-primary/5 transition-all duration-300"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
									<Phone className="w-6 h-6 text-primary" />
								</div>
								<h3 className="font-semibold mb-2">Call Us</h3>
								<p className="text-sm text-muted-foreground mb-1">
									24/7 Member Services
								</p>
								<a
									href="tel:+12029755013"
									className="text-sm text-primary hover:text-primary/80 transition-colors"
								>
									+1 (202)-975-5013
								</a>
								<a
									href="tel:+251968658292"
									className="text-sm text-primary hover:text-primary/80 transition-colors"
								>
									+251 96-865-8292
								</a>
							</motion.div>

							{/* Location */}
							<motion.div
								className="group relative flex flex-col items-center p-6 rounded-2xl border border-primary/10 bg-background/50 hover:bg-primary/5 transition-all duration-300"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
									<MessageCircle className="w-6 h-6 text-primary" />
								</div>
								<h3 className="font-semibold mb-2">Location</h3>
								<p className="text-sm text-muted-foreground mb-1">
									Available 9AM-5PM EST
								</p>
								<span className="text-sm text-primary">MD, USA</span>
								<span className="text-sm text-primary">
									Addis Ababa, Ethiopia
								</span>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
