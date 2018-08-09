import { Link } from 'react-router'
import './Sidebar.css'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <nav className='sidebar' role='navigation'>
          <div className='sidebar-content'>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/survey'>Survey</Link>
            <Link to='/query'>Query</Link>
            <Link to='/company_profile'>Company Profile</Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Sidebar
