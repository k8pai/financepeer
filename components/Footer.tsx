import Link from 'next/link';
import React from 'react';
import { SiLinkedin, SiGithub, SiGoogle, SiGmail } from 'react-icons/si';
import { BsGlobe2 } from 'react-icons/bs';
// const Footer = () => {
// 	return (
// 		<footer className="p-4">
// 			<div className="container mx-auto text-center">
// 				<p className="text-zinc-500">
// 					&copy; {new Date().getFullYear()} JSONify{' '}
// 				</p>
// 			</div>
// 		</footer>
// 	);
// };

const Footer = () => {
	return (
		<footer className="footer p-10 bg-zinc-950 text-base-content">
			<nav>
				<header className="footer-title">Services</header>
				<Link href={'#'} className="link link-hover">
					Api Endpoints
				</Link>
				<Link href={'#'} className="link link-hover">
					JSON Convertion
				</Link>
			</nav>
			<nav>
				<header className="footer-title">SiteMap</header>
				<Link href={'/saved'} className="link link-hover">
					Saved
				</Link>
				<Link href={'/features'} className="link link-hover">
					Features
				</Link>
			</nav>
			<nav>
				<header className="footer-title">Social</header>
				<div className="grid grid-flow-col gap-4">
					<Link href={'https://k8pai.dev'}>
						<BsGlobe2 className={'fill-[#fff] text-2xl'} />
					</Link>
					<Link href={'https://linkedin.com/in/k8pai'}>
						<SiLinkedin className={'fill-[#0A66C2] text-2xl'} />
					</Link>
					<Link href={'https://github.com/k8pai'}>
						<SiGithub className={'fill-[#fff] text-2xl'} />
					</Link>
					<Link href={'mailto:sudarshpaik7@gmail.com'}>
						<SiGmail className={'fill-[#EA4335]  text-2xl'} />
					</Link>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
