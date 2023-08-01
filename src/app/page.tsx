import Image from 'next/image'
import styles from './page.module.css'
import {getSessionAccount} from "@/hooks/getSessionAccount";
import {redirect} from "next/navigation";

export default async function Home() {
  if (!await getSessionAccount()) {
    redirect('/auth');
  }
  return (
    <main className={styles.main}>
    </main>
  )
}
