import ArticleList from '../../components/Article/ArticleList'
import ProductsList from '../../components/Products/ProductsList'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <ArticleList />
            <ProductsList />
        </>
    )
}
export default Home
