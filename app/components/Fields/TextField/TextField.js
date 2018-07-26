import './TextField.css'

class TextField extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <label htmlFor='text-field' className='text-field'>
          <input type='text' id='text-field' placeholder='Answer' />
          <span className='field-label' />
          <span className='field-border' />
        </label>
      </div>
    )
  }
}

export default TextField
