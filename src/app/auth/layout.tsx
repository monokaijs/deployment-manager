import {ReactNode} from "react";
import {Card, Col, Layout, Row} from "antd";
import RootLayout from "@/app/layout";
import styles from "./page.module.css";

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <RootLayout>
      <Layout className={styles.outer}>
        <Row justify={'center'} align={'middle'} style={{height: '100%'}}>
          <Col xs={24} sm={24} md={12} xl={6}>
            <Card>
              {children}
            </Card>
          </Col>
        </Row>
      </Layout>
    </RootLayout>
  )
}
