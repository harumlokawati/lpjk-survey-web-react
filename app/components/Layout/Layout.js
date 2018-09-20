import Sidebar from 'components/Sidebar'
import ShowLoadingPage from 'components/Notifications/ShowLoadingPage'
import CustomSnackBar from 'components/Notifications/SnackBar'
import { connect } from 'react-redux'
import './Layout.css'

class Layout extends React.Component {
  render () {
    const {showLoadingSpinner, snackbar} = this.props
    return (
      <div className='page-row'>
        <Sidebar />
        <div className='page-container'>
          {showLoadingSpinner && <ShowLoadingPage />}
          {snackbar.show && <CustomSnackBar
            variant={snackbar.variant}
            message={snackbar.message}
          />}
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showLoadingSpinner: state.notification.showLoadingSpinner,
    snackbar: state.notification.snackbar
  }
}

export default connect(mapStateToProps)(Layout)
