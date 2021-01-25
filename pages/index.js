import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import { API_ENDPOINT } from '@constants/Constants'

// Cada que se llama la página, se ejecuta
// export const getServerSideProps = async () => {

//     const response = await fetch(API_ENDPOINT + 'avo')
//     const { data: productList } = await response.json()

//     return {
//         props: {
//             productList,
//         }
//     }
// }

// Llama a la api una única vez y genera un archivo, para mayor optimización
export const getStaticProps = async () => {

    const response = await fetch(API_ENDPOINT + 'avo')
    const { data: productList } = await response.json()

    return {
        props: {
            productList,
        }
    }
}

const Home = ({ productList }) => {

    // const [productList, setProductList] = React.useState([])

    // React.useEffect(() => {
    //     window.fetch('/api/avo')
    //         .then(response => response.json())
    //         .then(({ data, length }) => {
    //             setProductList(data)
    //         })
    // }, [])

    return (
        <Layout>
            <KawaiiHeader />
            <section>
                <Link href="/yes-or-no">
                    <a>¿Deberia comer un avo hoy?</a>
                </Link>
            </section>
            <ProductList products={productList} />
            <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
        </Layout>
    )
}

export default Home;