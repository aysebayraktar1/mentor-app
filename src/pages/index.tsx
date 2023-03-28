import CardList from '@/components/CardList'
import CustomButton from '@/components/CustomButton'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import SideBar from '@/components/SiderBar'
import {
    Container,
    PageContainer,
    PageHeader,
    PageTitle,
    SelectMenu,
    CountSelectedText,
    LoadMoreButton,
} from '@/styles/home'
import { useEffect, useState } from 'react'
import { fetchMatches } from '../service/index'

const PAGE_SIZE = 6

export default function Home() {
    const [matches, setMatches] = useState<IData[]>([])
    const [allMatches, setAllMatches] = useState<IData[] | Record<string, any>>([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasMoreData, setHasMoreData] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const data = await fetchMatches()
            setAllMatches(data)
            setMatches(data?.slice(0, PAGE_SIZE))
        }

        getData()
    }, [])

    const handleSelectAll = () => {
        console.log('-----> selected all')
    }

    const loadMoreData = () => {
        setIsLoading(true)
        const startIndex = matches.length
        const endIndex = startIndex + PAGE_SIZE
        const newData = allMatches.slice(startIndex, endIndex)
        setMatches((prevData) => [...prevData, ...newData])
        setIsLoading(false)
        setHasMoreData(newData.length === PAGE_SIZE)
    }

    return (
        <Container>
            <SideBar />
            <PageContainer>
                <Header />
                <Menu />
                <PageHeader>
                    <PageTitle>Best Results of the Auto-Matching engine</PageTitle>
                    <SelectMenu>
                        <CountSelectedText>17 User Selected</CountSelectedText>
                        <CustomButton icon="select-icon" iconPosition="left" bg="white" onClick={handleSelectAll}>
                            Select All
                        </CustomButton>
                    </SelectMenu>
                </PageHeader>
                <CardList matches={matches} />
                {matches.length > 0 && hasMoreData && !isLoading && (
                    <LoadMoreButton onClick={loadMoreData}>
                        <CustomButton>Load More</CustomButton>
                    </LoadMoreButton>
                )}
            </PageContainer>
        </Container>
    )
}
