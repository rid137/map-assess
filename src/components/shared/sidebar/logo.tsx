import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={"/"}><Image src='/icons/logo.svg' width={1000} height={1000} className=' w-48 object-contain' alt='logo' /></Link>
    )
}

export default Logo;