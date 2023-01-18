import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ArticleListItem.css'

type Props = {}
const ArticleListItem = (props: Props) => {
    return (
        <>
            <Card className="article">
                <CardContent>
                    <div className="article-title">Long Estabilished</div>
                    <div className="article-dec">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that....
                    </div>
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
