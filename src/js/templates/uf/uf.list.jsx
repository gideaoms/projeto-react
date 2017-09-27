import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { loadList } from './uf.action'
import { Edit, Remove } from 'js/common/icon'
import Paginator from 'js/common/paginator'

class UfList extends Component {

    constructor (props) {
        super(props)

        this.navigate = this.navigate.bind(this)
    }

    componentWillMount () {
        this.props.loadList()
    }

    renderRows () {
        const list = this.props.list.data || []
        return list.map(state => (
            <tr key={ state._id }>
                <td>{ state.name }</td>
                <td>{ state.initials }</td>
                <td>
                    <Link to={`/state/edit/${state._id}`}>
                        <Edit />
                    </Link>
                    <Link to={`/state/remove/${state._id}`}>
                        <Remove />
                    </Link>
                </td>
            </tr>
        ))
    }

    navigate (page) {
        this.props.loadList(page)
    }

    render () {
        return (
            <div>
                <Link to={'/state/new'} className="btn btn-primary mb-3">Novo</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sigla</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <Paginator
                    navigate={this.navigate}
                    perPage={this.props.list.perPage}
                    total={this.props.list.total}
                    currentPage={this.props.list.page}
                    lastPage={this.props.list.lastPage} />
            </div>
        )
    }

}

UfList.propTypes = {
    loadList: PropTypes.func,
    list: PropTypes.object
}

const mapDispatchToProps = dispatch => bindActionCreators({ loadList }, dispatch)
const mapStateToProps = state => ({ list: state.uf.list })

export default connect(mapStateToProps, mapDispatchToProps)(UfList)