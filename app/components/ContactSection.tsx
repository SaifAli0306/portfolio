'use client';

import { motion } from 'framer-motion';
 
export default function ContactSection() {
	return (
		<section className="py-20 px-4 bg-black text-white">
			<div className="max-w-4xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="space-y-8"
				>
					<h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						I’m open to opportunities in web or mobile development. Let’s collaborate!
					</p>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
						<a
							href="mailto:saifi36111@gmail.com"
							className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg inline-flex items-center gap-2 transition-all"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M2.003 5.884L12 12l9.997-6.116A2 2 0 0020 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M22 8.118l-10 6-10-6V20a2 2 0 002 2h16a2 2 0 002-2V8.118z" />
							</svg>
							Email Me
						</a>

						<a
							href="https://wa.me/923094091102"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg inline-flex items-center gap-2 transition-all"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.52 3.478A11.82 11.82 0 0012.003 0C5.38 0 .003 5.377.003 12a11.93 11.93 0 001.631 5.99L0 24l6.145-1.608A11.905 11.905 0 0012.003 24C18.626 24 24 18.623 24 12c0-3.18-1.24-6.176-3.48-8.522zM12 22.003a9.946 9.946 0 01-5.35-1.556l-.384-.241-3.646.956.974-3.557-.25-.37a9.94 9.94 0 01-1.503-5.235c0-5.514 4.486-10 10-10 2.675 0 5.186 1.04 7.071 2.929A9.926 9.926 0 0122 12c0 5.514-4.486 10.003-10 10.003zm5.325-7.343c-.27-.135-1.595-.787-1.842-.878-.247-.09-.428-.135-.609.135s-.7.878-.857 1.056c-.157.18-.314.202-.583.067-.27-.135-1.14-.42-2.17-1.335-.801-.714-1.34-1.595-1.496-1.865-.157-.27-.017-.416.118-.55.122-.121.27-.314.404-.472.134-.157.18-.27.27-.45.09-.18.045-.337-.022-.472-.067-.135-.609-1.47-.837-2.014-.22-.522-.447-.45-.609-.46-.157-.007-.337-.009-.518-.009-.18 0-.472.068-.717.337-.245.27-.946.923-.946 2.25s.969 2.615 1.103 2.793c.134.179 1.909 2.92 4.629 4.094.648.279 1.152.446 1.545.572.649.206 1.24.177 1.707.108.52-.078 1.595-.65 1.819-1.28.224-.63.224-1.167.157-1.28-.067-.113-.247-.179-.518-.314z" />
							</svg>
							WhatsApp
						</a>

						<a
							href="/resume.pdf"
							target="_blank"
							className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg inline-flex items-center gap-2 transition-all"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V8.828A2 2 0 0015.414 8L12 4.586A2 2 0 0010.586 4H6z" />
							</svg>
							View Resume
						</a>
					</div>

					{/* Social Icons */}
					<div className="mt-8 flex justify-center gap-6">
						<a
							href="https://github.com/SaifAli0306"
							target="_blank"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604C7.007 17.134 4.205 16.105 4.205 11.498c0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a10.443 10.443 0 012.998-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 22.097 24 17.6 24 12.297 24 5.67 18.627.297 12 .297z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/saif-ali-61150234a/"
							target="_blank"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.037-1.85-3.037-1.853 0-2.137 1.446-2.137 2.939v5.667h-3.232V9h3.104v1.561h.045c.432-.817 1.49-1.678 3.07-1.678 3.29 0 3.896 2.165 3.896 4.981v6.588zM5.337 7.433a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75zM6.953 20.452H3.719V9h3.234v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451c.98 0 1.772-.774 1.772-1.728V1.727C24 .774 23.206 0 22.225 0z" />
							</svg>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
