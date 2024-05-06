import Image from "next/image";
import NavbarComponent from "./_components/Navbar/navbar";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <main className={`${styles.mainHome} text-3xl text-center`}>
      <NavbarComponent />
      <div className={styles.contents}>
        <div className ={styles.homeContainer}  >
          <h1 className={styles.homeMainText}>Welcome.<br /></h1>
          <h5 className={styles.homeSecondaryText}> To a satellite derived water retention solutions</h5>
          <Link href="/user/signup"><button className={styles.startedButton}>GET STARTED</button></Link>
          
        </div>
        <div className={styles.imageContainer}>
          <Image src="/projection2.png" height={420} width={420} alt="logo"/>
        </div>
      </div>
    </main>
  );
};

export default Home;