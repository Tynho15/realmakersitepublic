function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Real Maker Studio</h2>
          <p className="text-sm">Desenvolvedora de jogos indie para dispositivos móveis e PC.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/RealMakerStudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="https://www.youtube.com/channel/UCIYWGxeuVXfvL7n4hlvEJJg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">YouTube</a>
          <a href="https://www.instagram.com/realmakerstudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a>
          <a href="https://twitter.com/RealMakerStudio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Real Maker Studio. Todos os direitos reservados.</p>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">Desenvolvido com amor e pixel art.</p>
      </div>
    </footer>
  )
}

export default Footer;