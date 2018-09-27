/* global localStorage */
import { Link } from 'react-router'
import './Sidebar.css'

class Sidebar extends React.Component {
  _logoutFromApp = (e) => {
    e.preventDefault()
    e.stopPropagation()

    localStorage.removeItem('state')
    Cookies.remove('access_token')
    location.reload()
  }

  render () {
    return (
      <div className='wrapper'>
        <nav className='sidebar' role='navigation'>
          <div className='sidebar-content'>
            <Link to='/survey'>Survey</Link>
            <Link to='/profil_perusahaan'>Profil Perusahaan</Link>
            <a href='' onClick={this._logoutFromApp}>Logout</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Sidebar
