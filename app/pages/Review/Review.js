import './Review.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import { getAllSurveys } from 'actions/survey'
import { browserHistory } from 'react-router'

class Review extends React.Component {
  componentWillMount () {
    const {companyId} = this.props
    this.props.dispatch(getAllSurveys(companyId))
  }

  componentDidMount () {
    document.title = 'Daftar Teknologi | LPJK Survey Teknologi Konstruksi'
  }

  render () {
    const columns = [{
      Header: 'Nama Teknologi',
      accessor: 'technology_construction_applied'
    }, {
      Header: 'Tanggal Pertama',
      accessor: 'construction_project_date'
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
    }]

    const {reviewData} = this.props
    return <div className='p-5'><Paper>
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
    </Paper></div>
  }
}

function mapStateToProps (state) {
  const { companyId } = state.app
  const { reviewData } = state.survey
  return {
    companyId: companyId,
    reviewData: reviewData
  }
}
function mapDispatchToProps (dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
