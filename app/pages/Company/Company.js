import './Company.css'
import 'react-table/react-table.css'
import ReactTable from 'react-table'
import { connect } from 'react-redux'
import { getAllCompanies } from 'actions/survey'

class Company extends React.Component {
  componentWillMount () {
    this.props.dispatch(getAllCompanies())
  }

  componentDidMount () {
    document.title = 'Daftar Perusahaan | LPJK Survey Teknologi Konstruksi'
  }

  render () {
    const columns = [{
      Header: 'Nama',
      accessor: 'name',
      headerClassName: 'font-weight-bold'
    }, {
      Header: 'Lokasi',
      accessor: 'location',
      headerClassName: 'font-weight-bold'
    }, {
      Header: 'Kategori',
      accessor: 'category',
      headerClassName: 'font-weight-bold'
    }, {
      Header: 'Jenis',
      accessor: 'business_type',
      headerClassName: 'font-weight-bold'
    }]

    const style = {
      width: '100%',
      background: '#FAFFFF',
      borderRadius: '3px'
    }

    const { companiesData } = this.props
    return (<div className='container p-5'>
      <div className='row'>
        {companiesData && <ReactTable
          data={companiesData}
          columns={columns}
          defaultPageSize={10}
          className='-striped -highlight'
          style={style}

          previousText='⇦'
          nextText='⇨'
          loadingText='Loading...'
          noDataText='Tidak ada data ditemukan'
          pageText='Halaman'
          ofText='dari'
          rowsText='baris'
        />}
      </div>
    </div>)
  }
}

function mapStateToProps (state) {
  const { companiesData } = state.survey
  return {
    companiesData: companiesData
  }
}

function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)
