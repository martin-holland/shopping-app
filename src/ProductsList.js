import axios from "axios";
import Product from "./Product";
const api = "https://fakestoreapi.com/products"

const {data: products} = await axios.get(api)

const ProductsList = () => {

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '1rem' }}>
            {Array.isArray(products) && products.map((product) => {
                const field = product.id * 100
                return <Product key={product.id} {...product} anotherField={field} />
            }
            )
            }
        </div>
    )
}

export default ProductsList;