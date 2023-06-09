import CardList from '@/components/CardList'
import CustomButton from '@/components/CustomButton'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import SideBar from '@/components/SiderBar'
import { useGlobalContext } from '@/store'
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
    const [allMatches, setAllMatches] = useState<IData[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasMoreData, setHasMoreData] = useState(true)

    const { setSelectedMatches, selectedMatches } = useGlobalContext()

    useEffect(() => {
        const getData = async () => {
            const data = await fetchMatches()
            setAllMatches(data || [])
            setMatches(data?.slice(0, PAGE_SIZE))
        }

        getData()
    }, [])

    const handleSelectAll = () => {
        const length = allMatches.length
        if (allMatches.length === selectedMatches.length) {
            setSelectedMatches([])
        } else if (allMatches.length > 0) {
            setSelectedMatches(Array.from({ length }, (_, index) => String(index + 1)))
        }
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
                        <CountSelectedText>{selectedMatches?.length} User Selected</CountSelectedText>
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
