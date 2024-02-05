import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle
} from '@nextui-org/react';

import Nirban from '../public/nirban.jpg';

export default function Home() {
  return (
    <main className=" h-full flex flex-col-reverse md:flex-row  rounded-xl bg-gradient-to-r from-orange-500 to-green-500 ">

      <div className='w-full md:w-2/4 h-full flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='font-serif text-3xl md:text-8xl '>Nirban Roy</h1>
        <p>FullStack developer</p>
        <p className='w-60'>Trying to make the web prettier one property at a time</p>
        <div className='flex gap-4'>
          <Linkedin />
          <Github />
          <Twitter />
        </div>

      </div>
      <div className='w-full md:w-2/4 pt-40 md:pt-0  flex items-center justify-center '>
        <Image src={Nirban} alt='Nirban Roy' className='rounded-full brightness-95 w-2/5'></Image>
      </div>

    </main>
  );
}
