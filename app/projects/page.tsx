import Image from 'next/image';
import React from 'react';

import Threads from '@/public/threads.jpeg';

const page = () => {
	return (
		<div className="pt-32 p-12 md:p-24 md:pt-32  items-center  gap-y-5  md:gap-x-20  h-full  flex md:flex-wrap flex-col md:flex-row  rounded-xl bg-gradient-to-r from-orange-500 to-green-500 ">
			{/* card for threads clone */}
			<div className=' flex flex-col md:block gap-3 border-2 overflow-hidden   rounded-xl  md:w-1/4  backdrop-blur-sm shadow-xl bg-white/30'>
				<div className=' h-full'>
					<Image className=' object-cover' src={Threads} alt="Thread clone image" />
				</div>
				<div className='p-3'>
					<p className=' font-semibold'>Threads app (comming soon)</p>
					<p className=''> Threads is the fastest-growing app in history, reaching 100 million users in five days.</p>
				</div>

			</div>
			{/* card for ecommerce website  */}
			{/* <div className=' flex flex-col md:block gap-3 border-2 overflow-hidden   rounded-xl  md:w-1/4  backdrop-blur-sm shadow-xl bg-white/30'>
				<div className=' h-full'>
					<Image className=' object-cover' src={Threads} alt="Thread clone image" />
				</div>
				<div className='p-3 '>
					<p className=' font-semibold'>Threads app 1</p>
					<p className=''> Threads is the fastest-growing app in history, reaching 100 million users in five days.</p>
				</div>

			</div> */}

			{/* card for blockhain project */}
			{/* <div className=' flex flex-col md:block gap-3 border-2 overflow-hidden   rounded-xl  md:w-1/4  backdrop-blur-sm shadow-xl bg-white/30'>
				<div className=' h-full'>
					<Image className=' object-cover' src={Threads} alt="Thread clone image" />
				</div>
				<div className='p-3 '>
					<p className=' font-semibold'>Threads app 1</p>
					<p className=''> Threads is the fastest-growing app in history, reaching 100 million users in five days.</p>
				</div>

			</div> */}
			{/* card for 3d project */}
			{/* <div className=' flex flex-col md:block gap-3 border-2 overflow-hidden   rounded-xl  md:w-1/4  backdrop-blur-sm shadow-xl bg-white/30'>
				<div className=' h-full'>
					<Image className=' object-cover' src={Threads} alt="Thread clone image" />
				</div>
				<div className='p-3 '>
					<p className=' font-semibold'>Threads app 1</p>
					<p className=''> Threads is the fastest-growing app in history, reaching 100 million users in five days.</p>
				</div>

			</div> */}
		</div>
	)
}

export default page