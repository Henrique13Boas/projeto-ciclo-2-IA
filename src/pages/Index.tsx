import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Aqui nasce um novo projeto
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Comece sua jornada de desenvolvimento agora mesmo
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;