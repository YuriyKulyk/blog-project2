import { Grid } from '@mui/material'
import productsArray from '../../utils/productsArray'
import ProductsListItem from './ProductsListItem'
import './ProductsListItem.css'

type ProductsProps = {
    id: number
    title2: string
    desc2: string
    image: string
}

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({ id, title2, desc2, image }: ProductsProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                title2={title2}
                                desc2={desc2}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
            <br />
            <br />
        </>
    )
}
export default ProductsList
