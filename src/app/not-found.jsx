import image404 from '@/assets/images/404.png'; // Adjust the path as necessary
import Image from 'next/image';
import Link from 'next/link';
function NotFoundPage() {
    return (<>
        <Image src={image404} alt='404 not found' />
        <Link href={'/'}>Back</Link>
    </>);
}

export default NotFoundPage;
