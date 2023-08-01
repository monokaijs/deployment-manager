import {ReactNode} from "react";
import {Layout} from "antd";
import RootLayout from "@/app/layout";
import styles from "./page.module.css";

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <RootLayout>
      <Layout className={styles.outer}>
        {children}
      </Layout>
    </RootLayout>
  )
}
