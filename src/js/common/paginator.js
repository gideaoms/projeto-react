import React, { Component } from 'react'
import PropTypes from 'prop-types'

import If from './if'

class Paginator extends Component {

    constructor (props) {
        super(props)

        this.pages = []
    }

    navigate (page) {
        if (this.props.currentPage !== page) {
            this.props.navigate(page)
        }
    }

    nextPrev (page, event) {
        event.preventDefault()

        console.log(page, this.props)

        if (page === 0 || page === this.props.lastPage + 1) {
            return
        }
        this.navigate(page)
    }

    generatePagesArray (currentPage, collectionLength, rowsPerPage, paginationRange) {
        const pages = []
        const totalPages = Math.ceil(collectionLength / rowsPerPage)
        const halfWay = Math.ceil(paginationRange / 2)
        let position = ''

        if (currentPage <= halfWay) {
            position = 'start'
        } else if (totalPages - halfWay < currentPage) {
            position = 'end'
        } else {
            position = 'middle'
        }

        const ellipsesNeeded = paginationRange < totalPages
        let i = 1
        while (i <= totalPages && i <= paginationRange) {
            const pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages)
            const openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'))
            const closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'))
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                pages.push('...')
            } else {
                pages.push(pageNumber)
            }
            i += 1
        }
        return pages
    }

    calculatePageNumber (i, currentPage, paginationRange, totalPages) {
        const halfWay = Math.ceil(paginationRange / 2)
        if (i === paginationRange) {
            return totalPages
        } else if (i === 1) {
            return i
        } else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i
            } else if (halfWay < currentPage) {
                return currentPage - halfWay + i
            } 
            return i
        } 
        return i
    }

    render () {
        this.pages = this.generatePagesArray(this.props.currentPage, this.props.total, this.props.perPage, 12)
        return (
            <If test={this.pages.length > 1}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={`page-item ${this.props.currentPage === 1 ? 'disabled' : ''}`}>
                            <a className="page-link" href="#" onClick={this.nextPrev.bind(this, this.props.currentPage - 1)}>
                                <i className="fa fa-angle-left"></i>                                    
                            </a>
                        </li>

                        {
                            this.pages.map((page, index) => (
                                <li key={index} className={`page-item ${this.props.currentPage === page ? 'active' : ''}`}>
                                    <a className="page-link" href="#" onClick={this.navigate.bind(this, page)}>{page}</a>
                                </li>
                            ))
                        }

                        <li className={`page-item ${this.props.currentPage === this.props.lastPage ? 'disabled' : ''}`}>
                            <a className="page-link" href="#" onClick={this.nextPrev.bind(this, this.props.currentPage + 1)}>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </If>
        )
    }

}

Paginator.propTypes = {
    lastPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    navigate: PropTypes.func.isRequired
}

export default Paginator