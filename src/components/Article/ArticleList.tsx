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
                <Grid item xs={8} sm={7}>
                    <ArticleListItem
                        title="Long Established"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleListItem
                        title="Long Established"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleListItem
                        title="Long Established"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleListItem
                        title="Long Established"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={8} sm={6}>
                    <ArticleListItem
                        title="Long Established"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ArticleList
