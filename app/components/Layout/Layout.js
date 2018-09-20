import Sidebar from 'components/Sidebar'
import ShowLoadingPage from 'components/Actions/ShowLoadingPage'
import { connect } from 'react-redux'
import './Layout.css'

class Layout extends React.Component {
  render () {
    const {showLoadingSpinner} = this.props
    console.log(showLoadingSpinner)
    return (
      <div className='page-row'>
        <Sidebar />
        <div className='page-container'>
          {showLoadingSpinner && <ShowLoadingPage />}
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showLoadingSpinner: state.app.showLoadingSpinner
  }
}

export default connect(mapStateToProps)(Layout)
