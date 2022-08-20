import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
    <Layout pageTitle="Home Page">
      <Image src="/profile.jpg" width={150} height={200} alt="profile" />
    <h1 className={styles['title-homepage']}>Welcome Aswan</h1>
    </Layout>
    </>
  )
}
