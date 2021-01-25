import React from 'react'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import { API_ENDPOINT } from '@constants/Constants'

export const getStaticProps = async ({ params }) => {
    const { productId } = params;
    const response = await fetch(`${API_ENDPOINT}avo/${productId}`)
    const { data: product } = await response.json()

    return {
        props: {
            product,
        }
    }
}
// El siguiente método es obligatorio para las páginas dinamicas: getStaticPaths
export const getStaticPaths = async () => {
    const response = await fetch(API_ENDPOINT + 'avo')
    const { data: productList } = await response.json()

    const paths = productList.map(({id}) => ({
        params: {
            productId: id.toString()
        }
    }
    ));

    return {
        paths,
        // Incremental static generation
        // 404 for everything else
        fallback: false
    }
}

const ProductItem = ({ product }) => {

    return (
        <Layout>
          {product == null ? null : <ProductSummary product={product} />}
        </Layout>
      )
}

export default ProductItem;