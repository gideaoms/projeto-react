import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'

import uf from 'js/templates/uf/uf.reducer'
import auth from 'js/templates/auth/auth.reducer'

export default combineReducers({
    uf,
    auth,
    toastr
})