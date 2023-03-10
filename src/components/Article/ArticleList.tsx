import { Grid } from '@mui/material'
import ArticleListItem from './ArticleListItem'
import './ArticleListItem.css'

type Props = {}
const ArticleList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <ArticleListItem
                        title="Long Established"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
                        "
                    />
                </Grid>
            </Grid>
            <br />
            <br />
        </>
    )
}
export default ArticleList
