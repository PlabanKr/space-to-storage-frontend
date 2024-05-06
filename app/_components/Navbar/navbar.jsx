import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
    return (
        <div className="flex items-start">
            {/* Logo outside container */}
            <div className={styles.logoContainer}>
                <Image src="/new_logo_cropped.png" className={styles.logo} height={10} width={150} alt="Logo"  />
            </div>

            {/* Navbar container */}
            <nav className={`${styles.navBg} px-4 py-4 flex items-center grow justify-end shadow-lg`}>
                {/* Options */}
                <div className="space-x-12">
                    <Link href="/user/homepage" className={`${styles.navText} hover:text-emerald-700 text-xl font-bold`}>Home</Link>
                    <Link href="/user/aboutus" className={`${styles.navText} hover:text-emerald-700 text-xl font-bold`}>About</Link>
                    <Link href="/user/contact" className={`${styles.navText} hover:text-emerald-700 text-xl font-bold`}>Contact</Link>
                    <Link href="/user/login" className={`${styles.navBtn} hover:text-emerald-700 text-xl text-teal-900 py-2 px-8 rounded-full font-bold`}>LOGIN</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavbarComponent;