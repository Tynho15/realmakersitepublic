import { Button } from '@/components/ui/button';
import char1 from '../../assets/imagens/Sprite-0001.gif';

export const Section = () => {
  return (
    <div className="flex flex-1 w-full items-center flex-col">
      <div className='space-y-15 w-full'>
        <section id="sobre" className="flex items-center flex-col">
          <div className='flex flex-1 px-10 mt-20 flex-col w-full leading-7 max-w-[1280px] text-gray-700 space-y-5'>
            <h1 className='font-black text-3xl text-gray-700 mb-5'>Sobre</h1>
            <p className='text-justify'>Startup desenvolvedora de jogos indie para dispositivos móveis e PC.</p>
            <p className='text-justify'>
              <strong>Realmakerstudio</strong> é um Studio indie de jogos de pixelart criada por João Vitor, um jovem empreendedor de 21 anos. Com uma paixão ardente pela arte dos pixels, a Realmakerstudio cria jogos encantadores que trazem à vida mundos retro com uma estética única. Sob a liderança de João Vitor, a equipe talentosa da empresa se dedica a criar experiências envolventes e cativantes para os jogadores. Com sua abordagem simples e charmosa, os jogos da Realmakerstudio são uma celebração da nostalgia e da criatividade, proporcionando momentos de diversão e emoção para os fãs de jogos indie.
            </p>
          </div>
        </section>
        <section id="ultimo-jogo" className="flex items-center flex-col">
          <div className='flex flex-1 px-10 flex-col w-full leading-7 max-w-[1280px] text-gray-700 space-y-5'>
            <h2 className='font-black text-3xl text-gray-700 mb-5'>Último Jogo</h2>
            <div className='flex flex-col items-center justify-center space-y-5'>
              <div className="flex flex-col items-center justify-center space-y-5">
                <div className="rounded-xl shadow-md overflow-hidden my-10 w-full max-w-[800px] aspect-video">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pKulmkhRRY0" title="Mira&#39;s masion, gameplay demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='flex flex-col items-center justify-center space-y-5'>
                  <h3 className="text-xl font-semibold text-gray-800">Mira's Mansion Trailer</h3>
                  <p className='text-center text-gray-600'>
                    Um plataforma 2D com muitos mistérios para se desvendar. Explore o máximo de cômodos e desvende os mistérios que os guarda. Enfrente todos os inimigos da mansão mais assombrada dos games.
                  </p>
                  <Button className='cursor-pointer'>Ir para página do jogo</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inicio" className="flex items-center flex-col pt-20 bg-red-500/90">
          <div className="flex flex-1 px-10 flex-col w-full leading-7 max-w-[1280px] text-gray-100 space-y-5 text-shadow-2xs">
            <h1 className='font-black text-3xl text-gray-100 mb-5'>Mira's Mansion</h1>
            <p className='text-justify'>
              <strong>Mira's Mansion</strong> é um jogo de plataforma 2D com gráficos retrô e jogabilidade metroidvânia que você vai amar. Com uma história envolvente, gráficos encantadores e uma jogabilidade desafiadora, Mira's Mansion promete proporcionar horas de diversão e emoção para os fãs de jogos indie.
            </p>
            <p className='text-justify mb-10'>
              Está esperando o que? Baixe agora mesmo e mergulhe no mundo de Mira's Mansion!
            </p>
            <Button variant={'secondary'} className='cursor-pointer w-fit min-w-50'>Ir para loja</Button>
          </div>
          <div className='flex flex-1 max-w-[1280px] w-full px-10 h-30 mt-10'>
            <img className="h-30 left-0" src={char1} alt="Sobre a Real Maker Studio" />
          </div>
        </section>
      </div>
    </div>

  )
}

export default Section;