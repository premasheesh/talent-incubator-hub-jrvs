import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    CheckCircle2,
    Users,
    TrendingUp,
    Award,
    Sparkles,
    Zap,
    Target,
    GraduationCap,
    Heart,
} from "lucide-react";

import heroImage from "@/assets/hero-tech-team.jpg";
import collaborationImage from "@/assets/collaboration.jpg";
import workspaceImage from "@/assets/workspace.jpg";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-32">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Tech team collaboration"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 gradient-hero opacity-90" />
                </div>
                <div className="container relative mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 bg-white/15 backdrop-blur-3xl backdrop-saturate-200 border border-white/30 rounded-full px-6 py-3 animate-float shadow-lg">
                            <Sparkles className="h-5 w-5 text-white animate-pulse" />
                            <span className="text-sm font-semibold text-white">
                Launch Your Tech Career
              </span>
                        </div>
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl drop-shadow-2xl">
                            Talent Incubator Hub
                        </h1>
                        <p className="mb-8 text-xl text-white/95 drop-shadow-lg">
                            Unleash your potential with hands-on training, real projects, and
                            mentorship that bridges academia and industry — designed to build
                            tomorrow’s tech leaders.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/jobs">
                                <Button size="lg" variant="ghost" className="bg-white/15 text-white hover:bg-white/25 animate-glow">
                                    <Zap className="mr-2 h-5 w-5" />
                                    Explore Opportunities
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
                <div className="container relative mx-auto px-4">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                        <div className="text-center group">
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-primary/20 group-hover:bg-white/90 liquid-morph shadow-lg">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <div className="mb-2 text-5xl font-bold gradient-text">1200+</div>
                            <div className="text-sm text-muted-foreground">Program Alumni</div>
                        </div>

                        <div className="text-center group">
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-primary/20 group-hover:bg-white/90 liquid-morph shadow-lg">
                                <GraduationCap className="h-8 w-8 text-accent" />
                            </div>
                            <div className="mb-2 text-5xl font-bold text-accent">800+</div>
                            <div className="text-sm text-muted-foreground">Recent Graduates</div>
                        </div>

                        <div className="text-center group">
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-primary/20 group-hover:bg-white/90 liquid-morph shadow-lg">
                                <Heart className="h-8 w-8 text-primary" />
                            </div>
                            <div className="mb-2 text-5xl font-bold gradient-text">94%</div>
                            <div className="text-sm text-muted-foreground">2-Year Retention</div>
                        </div>

                        <div className="text-center group">
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-primary/20 group-hover:bg-white/90 liquid-morph shadow-lg">
                                <TrendingUp className="h-8 w-8 text-accent" />
                            </div>
                            <div className="mb-2 text-5xl font-bold text-accent">67%</div>
                            <div className="text-sm text-muted-foreground">Newcomers</div>
                        </div>

                        <div className="text-center group">
                            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-primary/20 group-hover:bg-white/90 liquid-morph shadow-lg">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <div className="mb-2 text-5xl font-bold gradient-text">38%</div>
                            <div className="text-sm text-muted-foreground">Women in Tech</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative py-20">
                <div className="absolute inset-0">
                    <img
                        src={collaborationImage}
                        alt="Collaboration workspace"
                        className="h-full w-full object-cover opacity-10"
                    />
                </div>
                <div className="container relative mx-auto px-4">
                    <h2 className="mb-4 text-center text-5xl font-bold">Join the Program</h2>
                    <p className="mb-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your journey from aspiring professional to industry-ready in three clear steps
                    </p>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="bg-white/80 backdrop-blur-xl backdrop-saturate-150 hover:bg-white/90 liquid-morph shadow-elegant hover:shadow-glow hover:-translate-y-2 border-primary/20 overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 liquid-morph" />
                            <CardContent className="p-8 relative">
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-hero shadow-lg animate-float">
                                    <CheckCircle2 className="h-8 w-8 text-white" />
                                </div>
                                <div className="mb-3 text-4xl font-bold text-primary/20">01</div>
                                <h3 className="mb-4 text-2xl font-bold">Apply</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Browse current opportunities</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Complete a practical assessment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Start with a 2–3 week risk-free trial</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/80 backdrop-blur-xl backdrop-saturate-150 hover:bg-white/90 liquid-morph shadow-elegant hover:shadow-glow hover:-translate-y-2 border-primary/20 overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 liquid-morph" />
                            <CardContent className="p-8 relative">
                                <div
                                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-accent shadow-lg animate-float"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <Users className="h-8 w-8 text-white" />
                                </div>
                                <div className="mb-3 text-4xl font-bold text-accent/20">02</div>
                                <h3 className="mb-4 text-2xl font-bold">Get Paid as You Learn</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                        <span>Compensation during training</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                        <span>Mentorship from experienced engineers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                        <span>Build a strong professional profile</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                        <span>Sharpen technical and soft skills</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/80 backdrop-blur-xl backdrop-saturate-150 hover:bg-white/90 liquid-morph shadow-elegant hover:shadow-glow hover:-translate-y-2 border-primary/20 overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 liquid-morph" />
                            <CardContent className="p-8 relative">
                                <div
                                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-hero shadow-lg animate-float"
                                    style={{ animationDelay: "0.4s" }}
                                >
                                    <TrendingUp className="h-8 w-8 text-white" />
                                </div>
                                <div className="mb-3 text-4xl font-bold text-primary/20">03</div>
                                <h3 className="mb-4 text-2xl font-bold">Client Placement</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>24-month placement track</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Salary growth every 6 months</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Work with premier companies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Ongoing professional development</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={workspaceImage}
                        alt="Modern workspace"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/15 backdrop-blur-3xl backdrop-saturate-200 border border-white/30 animate-float animate-glow shadow-2xl">
                            <Award className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl drop-shadow-2xl">
                            Ready to Start Your Tech Career?
                        </h2>
                        <p className="mb-10 text-xl text-white/95 drop-shadow-lg">
                            Join 1200+ graduates who launched their careers through our program
                        </p>
                        <Link to="/jobs">
                            {/*<Button size="lg" className="btn-gradient">*/}
                            {/*    <Sparkles className="mr-2 h-5 w-5" />*/}
                            {/*    View Open Positions*/}
                            {/*</Button>*/}
                            <Button variant="jarvisLight" size="lg">
                                View Open Positions
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
