import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Nav = () => {
	const router = useRouter();

	return (
		<nav className='relative'>
			<div className='relative flex px-10 sm:px-20 text-2xl whitespace-nowrap sm:space-x-20 overflow-x-scroll scrollbar-hide'>
				<Swiper
					// slidesPerView={1}
					breakpoints={{
						320: {slidesPerView: 2.3, spaceBetween: 10},
						// 320: {slidesPerView: 2.2},
					}}
				>
					{Object.entries(requests).map(([key, {title, url}]) => (
						<SwiperSlide key={key}>
							<h2 
								onClick={() => router.push(`/?genre=${key}`)}
								className='cursor-pointer duration-100 hover:scale-125 hover:text-white active:text-red-500 last:pr-24'
							>
								{title}
							</h2>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 z-50' />
		</nav>
	)
}

export default Nav