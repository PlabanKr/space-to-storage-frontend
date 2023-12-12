import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
    return (
        <div className="flex items-start">
            {/* Logo outside container */}
            <div className="">
                <Image src="/LOGO_2.png" height={10} width={180} alt="Logo"  />
            </div>

            {/* Navbar container */}
            <nav className={`${styles.navBg} px-4 py-4 flex items-center grow justify-end rounded-lg shadow-lg`}>
                {/* Options */}
                <div className="space-x-12">
                    <Link href="/" className={`${styles.navText} hover:text-pink-900 text-xl font-bold`}>Home</Link>
                    <Link href="/" className={`${styles.navText} hover:text-pink-900 text-xl font-bold`}>About</Link>
                    <Link href="/" className={`${styles.navText} hover:text-pink-900 text-xl font-bold`}>Contact</Link>
                    <Link href="/" className={`${styles.navBtn} hover:text-pink-900 text-xl bg-pink-500 py-2 px-8 rounded-full font-bold`}>LOGIN</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavbarComponent;