import './Review.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { connect } from 'react-redux'
import { getAllSurveys, getAllSurveysCompany } from 'actions/survey'
import { browserHistory, Link } from 'react-router'

class Review extends React.Component {
  componentWillMount () {
    const {companyId, role} = this.props
    if (role === 'admin') {
      this.props.dispatch(getAllSurveysCompany())
    } else {
      this.props.dispatch(getAllSurveys(companyId))
    }
  }

  componentDidMount () {
    document.title = 'Daftar Teknologi | LPJK Survey Teknologi Konstruksi'
  }

  render () {
    const columns = [{
      Header: 'Nama Teknologi',
      accessor: 'technology_construction_applied'
    }, {
      Header: 'Jenis Teknologi',
      accessor: 'technology_construction_type',
      filterMethod: (filter, row) => {
        if (filter.value === '0') {
          return true
        }
        if (filter.value === '1') {
          return row[filter.id] === 'Perangkat Lunak (Software)'
        } else if (filter.value === '2') {
          return row[filter.id] === 'Perangkat Keras (Hardware)'
        } else if (filter.value === '3') {
          return row[filter.id] === 'Material'
        } else if (filter.value === '4') {
          return row[filter.id] === 'Peralatan'
        } else if (filter.value === '5') {
          return row[filter.id] === 'Metode'
        } else if (filter.value === '6') {
          return (row[filter.id] !== 'Perangkat Lunak (Software)' &&
            row[filter.id] !== 'Perangkat Keras (Hardware)' &&
            row[filter.id] !== 'Material' &&
            row[filter.id] !== 'Peralatan' &&
            row[filter.id] !== 'Metode')
        }
      },
      Filter: ({ filter, onChange }) =>
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%' }}
          value={filter ? filter.value : '0'}
        >
          <option value={0}>{'Show All'}</option>
          <option value={1}>{'Perangkat Lunak (Software)'}</option>
          <option value={2}>{'Perangkat Keras (Hardware)'}</option>
          <option value={3}>{'Material'}</option>
          <option value={4}>{'Peralatan'}</option>
          <option value={5}>{'Metode'}</option>
          <option value={6}>{'Lain-lain'}</option>
        </select>
    }, {
      id: 'project_cost',
      Header: 'Nilai Proyek',
      accessor: 'construction_project_cost',
      filterMethod: (filter, row) => {
        if (filter.value === '0') {
          return true
        }
        if (filter.value === '1') {
          return row[filter.id] === '< Rp 2.500.000.000'
        } else if (filter.value === '2') {
          return row[filter.id] === 'Rp 2.500.000.000 - Rp 50.000.000.000'
        } else if (filter.value === '3') {
          return row[filter.id] === 'Rp 50.000.000.000 - Rp 100.000.000.000'
        }
        return row[filter.id] === '> Rp 100.000.000.000'
      },
      Filter: ({ filter, onChange }) =>
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%' }}
          value={filter ? filter.value : '0'}
        >
          <option value={0}>{'Show All'}</option>
          <option value={1}>{'< Rp 2.500.000.000'}</option>
          <option value={2}>{'Rp 2.500.000.000 - Rp 50.000.000.000'}</option>
          <option value={3}>{'Rp 50.000.000.000 - Rp 100.000.000.000'}</option>
          <option value={4}>{'> Rp 100.000.000.000'}</option>
        </select>
    }, {
      Header: 'Tanggal Pertama',
      accessor: 'construction_project_date'
    }]

    const {reviewData} = this.props
    return <div className='container p-5'>
      <div className='row'>
        <div className='col pb-3'>
          <div className='float-right'>
            <Link to='/survey'>
              <Button variant='contained' color='primary'>
                <AddIcon>Tambah</AddIcon>
                &ensp;Tambah Teknologi
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='row'>
        <Paper className='col'>
          {reviewData && <ReactTable
            data={reviewData}
            columns={columns}
            filterable
            defaultPageSize={10}
            className='-striped -highlight'

            // Callbacks
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e) => {
                  browserHistory.push(`/survey/${rowInfo.original.id}`)
                }
              }
            }}

            // Text
            previousText='⇦'
            nextText='⇨'
            loadingText='Loading...'
            noDataText='Tidak ada data ditemukan'
            pageText='Halaman'
            ofText='dari'
            rowsText='baris'
          />}
        </Paper>
      </div>
    </div>
  }
}

function mapStateToProps (state) {
  const { companyId, role } = state.app
  const { reviewData } = state.survey
  return {
    companyId: companyId,
    role: role,
    reviewData: reviewData
  }
}
function mapDispatchToProps (dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
