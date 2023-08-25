import Image from "next/image";
import profileImage from '../../public/images/profile2.png'
import Link from "next/link";
export default function Hero() {
    return (
        <section className='text-center'>
            <Image className='rounded-full mx-auto' src={profileImage} alt='Picture of the author' width={250} height={250} priority/>
            <h2 className="text-3xl font-bold mt-2">{"Hi I'm hyunjin"}</h2>
            <h3 className="text-xl font-semibold" >Frontend Engineer</h3>
            <p>안녕하세요 2년차 개발자 김현진입니다.</p>
            <Link href='/contact'>
                <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact ME</button>
            </Link>
        </section>
    );
}

