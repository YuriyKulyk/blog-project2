import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ProductsListItem.css'

type Props = {
    title2: string
    desc2: string
    image: string
}

const ProductsListItem = ({ title2, desc2, image }: Props) => {
    return (
        <>
            <Card className="article2">
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="article-title2">{title2}</div>
                    <div className="article-dec2">{desc2}</div>
                </CardContent>
                <CardActions className="btns-wrap2">
                    <div className="article-data2">May 20th 2020</div>
                    <Button className="read-more2">Read more</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductsListItem
