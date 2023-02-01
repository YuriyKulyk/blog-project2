import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ArticleListItem.css'

type Props = {
    title: string
    desc: string
}
const ArticleListItem = ({ title, desc }: Props) => {
    return (
        <>
            <Card className="article">
                <CardContent>
                    <div className="img">
                        <img src="images/tazza2.jpg" alt="" />
                    </div>
                    <div className="article-title">{title}</div>
                    <div className="article-dec">{desc}</div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <div className="article-data">May 20th 2020</div>
                    <Button className="read-more">Read more</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ArticleListItem
