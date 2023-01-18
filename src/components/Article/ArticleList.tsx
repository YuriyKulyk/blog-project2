import { Grid } from '@mui/material'
import ArticleListItem from './ArticleListItem'

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
                <Grid item xs={8} sm={6}>
                    <ArticleListItem />
                </Grid>
            </Grid>
        </>
    )
}
export default ArticleList
