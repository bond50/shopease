import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - ShopEase`}</title>
        </Helmet>
    )
}

export default MetaData
