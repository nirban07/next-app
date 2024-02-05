import { FileText, FolderOpenDot, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='absolute w-4/5 mx-auto inset-10  h-12 m-4 flex justify-evenly items-center rounded-xl backdrop-blur-sm shadow-xl hover:bg-white/30 z-10 border'>
			<Link className='hover:scale-125 flex gap-1' href="/"><Home />Home</Link>
			<Link className='hover:scale-125 flex gap-1' href="/projects"><FolderOpenDot />Projects</Link>
			<Link className='hover:scale-125 flex gap-1' href="resume.pdf"><FileText />Resume</Link>
		</div>
	)
}

export default Navbar