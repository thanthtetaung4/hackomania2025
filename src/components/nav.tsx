'use client';

import Link from 'next/link';
import { HomeIcon, UserGroupIcon, BookOpenIcon, TrophyIcon, UserIcon } from "@heroicons/react/20/solid";
export default function Nav() {

	return (
		<div className="fixed bottom-0 inset-x-0">
			<div className="bg-primary h-12 mx-auto flex items-center">
				<ul className="flex gap-10 justify-center items-center w-full">
					<Link href={"/learn"}><li><HomeIcon className="size-8 text-white hover:text-accent" /></li></Link>
					<li><UserGroupIcon className="size-8 text-white hover:text-accent" /></li>
					<Link href={"/learn"}><li><BookOpenIcon className="size-8 text-white hover:text-accent" /></li></Link>
					<li><TrophyIcon className="size-8 text-white hover:text-accent" /></li>
					<Link href="/login"><li><UserIcon className="size-8 text-white hover:text-accent" /></li></Link>	
				</ul>
			</div>
		</div>
	);
}
