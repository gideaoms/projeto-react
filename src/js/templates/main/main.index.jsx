import React from 'react'

import Header from 'js/common/header'
import Footer from 'js/common/footer'

export default props => (
    <div>
        <Header />
        <div className="container">
            { props.children }
        </div>
        <Footer />
    </div>
)