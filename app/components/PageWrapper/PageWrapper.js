
class PageWrapper extends React.Component {
  render () {
    return (<div className='wrapper'>
      {this.props.children}
    </div>)
  }
}

export default PageWrapper
