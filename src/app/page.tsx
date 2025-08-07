import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  return (
    <main className="pt-24">
      <ParticlesBackground />
      <section id="sobre" className="min-h-screen px-6 py-12">
        <h2 className="text-2xl font-bold">Sobre mim</h2>
        {/* ... */}
      </section>

      <section id="projetos" className="min-h-screen px-6 py-12">
        <h2 className="text-2xl font-bold">Projetos</h2>
        {/* ... */}
      </section>

      <section id="conhecimentos" className="min-h-screen px-6 py-12">
        <h2 className="text-2xl font-bold">Conhecimentos</h2>
        {/* ... */}
      </section>

      <section id="contato" className="min-h-screen px-6 py-12">
        <h2 className="text-2xl font-bold">Contato</h2>
        {/* ... */}
      </section>
    </main>
  );
}