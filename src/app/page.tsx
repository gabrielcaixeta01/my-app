import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen p-10">
      <ParticlesBackground />
      <div className="relative z-10">
        <ThemeSwitcher />
        <h1 className="text-4xl font-bold mt-6">Testando Tailwind</h1>
      </div>
    </main>
  );
}