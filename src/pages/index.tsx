import Header from '@/components/Header'
import Menu from '@/components/Menu'
import SideBar from '@/components/SiderBar'
import { Container, PageContainer } from '@/styles/home'

export default function Home() {
    return (
        <Container>
            <SideBar />
            <PageContainer>
                <Header />
                <Menu />
            </PageContainer>
        </Container>
    )
}
