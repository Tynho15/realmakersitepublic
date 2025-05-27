import { Button } from '@/components/ui/button';
import video from '../../assets/videos/trailer.mp4';
import { scrollToId } from '@/utils/goToAction';

const Landing = () => {
  const doc  = document
  return(
    <div className="flex relative flex-col items-center justify-center h-screen bg-neutral-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 z-1"/>
      <video className="absolute opacity-50 inset-0 w-full h-full object-cover" autoPlay loop muted playsInline src={video}>
      </video>
      <h1 className="text-4xl z-1 font-bold mb-4 text-gray-200 items-center text-center">Bem vindo à <span className="text-red-600">Real Maker Studio</span>!</h1>
      <p className="text-lg z-1 text-gray-400 mb-8 text-center">Startup desenvolvedora de jogos indie para dispositivos móveis e PC.</p>
      <Button onClick={() => scrollToId({document: doc, dest: "ultimo-jogo"})} className='z-1 cursor-pointer'>
        Conheça nossos jogos
      </Button>
    </div>
  )
}

export default Landing;