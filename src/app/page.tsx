import styles from './page.module.css'
import {getSessionAccount, getSessionData} from "@/hooks/getSessionAccount";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await getSessionData();
  if (!session?.isLoggedIn) {
    redirect('/auth');
  }
  return (
    <main className={styles.main}>
    </main>
  )
}
