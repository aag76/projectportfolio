import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section - Programmer Portfolio */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="text-gradient-brand text-5xl font-extrabold">
            Crafting Innovative Software Solutions
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto leading-relaxed">
            Welcome to my portfolio. I specialize in building cutting-edge applications and solving complex problems with clean, efficient code.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base border-primary-600 text-primary-700 hover:bg-primary-50">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>

        {/* Core Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-primary-500">
            <CardHeader>
              <CardTitle className="text-primary-700">Full-Stack Development</CardTitle>
              <CardDescription>End-to-End Application Expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                From front-end interfaces to back-end systems, I deliver seamless and scalable solutions tailored to your needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary-500">
            <CardHeader>
              <CardTitle className="text-secondary-700">Problem Solving</CardTitle>
              <CardDescription>Innovative and Efficient</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                I thrive on tackling challenging problems and finding creative, efficient solutions through code.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent-500">
            <CardHeader>
              <CardTitle className="text-accent-700">Continuous Learning</CardTitle>
              <CardDescription>Staying Ahead of the Curve</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                I am committed to staying updated with the latest technologies and best practices to deliver top-notch solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Highlights Section */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-gradient-brand max-w-3xl mx-auto text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto leading-relaxed">
            Explore some of the projects I have worked on, showcasing my skills in software development and problem-solving.
          </p>
          <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
            <Link href="/projects">See My Projects</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
