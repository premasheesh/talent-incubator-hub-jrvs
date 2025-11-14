// src/components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-gray-700 py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1 */}
                <div>
                    <h2 className="font-bold text-xl text-primary mb-2">
                        Jarvis Consulting
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Empowering tech talent through our Talent Incubation Program.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a
                                href="/jobs"
                                className="hover:text-primary transition-colors"
                            >
                                Job Openings
                            </a>
                        </li>
                        <li>
                            <a
                                href="/my-applications"
                                className="hover:text-primary transition-colors"
                            >
                                My Applications
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a href="/contact" className="hover:text-primary transition-colors">
                                Locations & Contact Info
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="hover:text-primary transition-colors">
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Connect</h3>
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:info@jarvisconsulting.com"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
                © 2025 <span className="text-primary font-medium">Jarvis Consulting</span>. All rights reserved.
            </div>
        </footer>
    );
}
