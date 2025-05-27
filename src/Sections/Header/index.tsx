import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import imglogo from '../../assets/imagens/logo_01.png';
import { CircleHelp, Copyright, Gamepad2, Home, MenuIcon } from 'lucide-react';
import { RxDiscordLogo } from 'react-icons/rx';
import { useState } from 'react';

function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <header className="sticky z-90 top-0 w-full bg-gray-100 shadow-md">
      <div className="flex h-20 items-center justify-center p-4 md:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="fixed left-0 p-5 text-gray-800 hover:text-red-800"><MenuIcon size={40}/></SheetTrigger>
          <SheetContent side='left' className="w-[70%] z-91">
            <SheetHeader className='flex flex-row items-center border-b-2'><div className="w-15"><img src={imglogo} /></div><h1 className="flex absolute w-full flex-1 justify-center font-semibold text-2xl text-gray-700">Real Maker Studio</h1></SheetHeader>
            <nav className="flex flex-col">
              <a onClick={() => setSheetOpen(!sheetOpen)} href="#" className="flex gap-4 text-gray-600 hover:text-red-800 p-4"><Home /> Início</a>
              <a onClick={() => setSheetOpen(!sheetOpen)} href="https://discord.com/invite/BYGZXZkRcC" className="flex gap-4 text-gray-600 hover:text-red-800 p-4"><RxDiscordLogo size={24} /> Discord</a>
              <a onClick={() => setSheetOpen(!sheetOpen)} href="#sobre" className="flex gap-4 text-gray-600 hover:text-red-800 p-4"><CircleHelp /> Sobre</a>
              <a onClick={() => setSheetOpen(!sheetOpen)} href="#ultimo-jogo" className="flex gap-4 text-gray-600 hover:text-red-800 p-4"><Gamepad2 /> Último Jogo</a>
            </nav>
            <SheetFooter className="p-0">
              <div className="flex text-xs items-center justify-center gap-2 border-t-2 py-4">
                <Copyright size={15}/><p>{new Date().getFullYear()} Real Maker Studio. Todos os direitos reservados.</p>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <img className="h-20" src={imglogo} alt="logo" />
      </div>
      <div className="hidden md:flex justify-center h-20 shadow-md">
        <div className="flex flex-1 max-w-[1280px] px-10 items-center justify-between bg-gray-100">
          <img className="h-20" src={imglogo} alt="logo" />
          <nav className="flex">
            <a href="#" className="text-gray-500 font-bold hover:text-red-800 p-7">Início</a>
            <a href="#sobre" className="text-gray-500 font-bold hover:text-red-800 p-7">Sobre</a>
            <a href="https://discord.com/invite/BYGZXZkRcC" target='_blank' className="text-gray-500 font-bold hover:text-red-800 p-7">Discord</a>
            <a href="#ultimo-jogo" className="text-gray-500 font-bold hover:text-red-800 p-7">Último Jogo</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header;