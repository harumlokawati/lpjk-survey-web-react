import './Sidebar.css'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <nav className='sidebar' role='navigation'>
          <div className='sidebar-content'>
            <a href='#'>Dashboard</a>
            <a href='#'>Survey</a>
            <a href='#'>Query</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Sidebar
