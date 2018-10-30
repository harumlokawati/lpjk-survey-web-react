/* global localStorage, location */
import { Link } from 'react-router'
import { setReviewDetail } from 'actions/survey/index'
import { connect } from 'react-redux'
import './Sidebar.css'

class Sidebar extends React.Component {
  _logoutFromApp = (e) => {
    e.preventDefault()
    e.stopPropagation()

    localStorage.removeItem('state')
    Cookies.remove('access_token')
    location.reload()
  }

  deleteSurveyData = () => {
    this.props.dispatch(setReviewDetail(null))
  }

  render () {
    return (
      <div className='wrapper'>
        <nav className='sidebar' role='navigation'>
          {this.props.role === 'user' && <div className='sidebar-content'>
            <Link activeClassName='active' to='/survey' onClick={this.deleteSurveyData}>Survey</Link>
            <Link activeClassName='active' to='/profil_perusahaan'>Profil Perusahaan</Link>
            <Link activeClassName='active' to='/daftar_teknologi'>Daftar Teknologi</Link>
            <a href='' onClick={this._logoutFromApp}>Logout</a>
          </div>}
          {this.props.role === 'admin' && <div className='sidebar-content'>
            <Link activeClassName='active' to='/admin/registrasi'>Registrasi</Link>
            <Link activeClassName='active' to='/admin/profil_perusahaan'>Profil Perusahaan</Link>
            <Link activeClassName='active' to='/admin/daftar_teknologi'>Daftar Teknologi</Link>
            <a href='' onClick={this._logoutFromApp}>Logout</a>
          </div>}
        </nav>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {role} = state.app
  return {
    role: role
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
