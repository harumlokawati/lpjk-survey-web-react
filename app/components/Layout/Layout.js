import Sidebar from 'components/Sidebar'
import './Layout.css'

class Layout extends React.Component {
  render () {
    return (
      <div className='row'>
        <Sidebar />
        <div className='page-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
