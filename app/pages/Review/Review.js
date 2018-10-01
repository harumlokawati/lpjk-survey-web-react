import './Review.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Paper from '@material-ui/core/Paper'

class Review extends React.Component {
  componentDidMount () {
    document.title = 'Daftar Teknologi | LPJK Survey Teknologi Konstruksi'
  }

  render () {
    const data_ = [
      {
        'id': 2,
        'company_id': 1,
        'construction_product_type': null,
        'technology_construction_applied': 'wkwk',
        'construction_project': null,
        'construction_project_date': '2018-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': null,
        'technology_construction_type': null,
        'technology_construction_origin': null,
        'technology_construction_owner': null,
        'technology_construction_category': null,
        'technology_construction_primary_type': null,
        'technology_construction_benefit': null,
        'technology_construction_all_benefits': null,
        'technology_construction_cost': null,
        'technology_construction_success_factor': null,
        'technology_construction_all_success_factors': null,
        'technology_construction_obstacle': null,
        'technology_construction_all_obstacles': null,
        'technology_construction_human_resource': null,
        'technology_construction_support': null,
        'technology_construction_supply_chain': null,
        'technology_construction_supply_chain_origin': null,
        'technology_construction_innovation_origin': null,
        'technology_construction_innovation_category': null,
        'technology_construction_assessment': null,
        'technology_construction_level': null,
        'created_at': '2018-09-27T07:42:51.491Z',
        'updated_at': '2018-09-27T07:42:51.491Z',
        'intellectual_property_right': null
      },
      {
        'id': 1,
        'company_id': 1,
        'construction_product_type': [
          'Gedung',
          'Infrastruktur'
        ],
        'technology_construction_applied': 'sadasdas',
        'construction_project': 'asdasd',
        'construction_project_date': '2017-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': [
          'Perancangan',
          'Konstruksi'
        ],
        'technology_construction_type': 'Perangkat Keras (Hardware)',
        'technology_construction_origin': 'Dalam Negeri',
        'technology_construction_owner': 'Konsultan',
        'technology_construction_category': 'Hak Cipta',
        'technology_construction_primary_type': 'Teknologi Mekanik',
        'technology_construction_benefit': 'Tangible',
        'technology_construction_all_benefits': 'w',
        'technology_construction_cost': [
          'Investasi',
          'Operasi'
        ],
        'technology_construction_success_factor': 'Teknis',
        'technology_construction_all_success_factors': 'w',
        'technology_construction_obstacle': 'Teknis',
        'technology_construction_all_obstacles': 'w',
        'technology_construction_human_resource': [
          'Tenaga Ahli'
        ],
        'technology_construction_support': [
          'Mekanik'
        ],
        'technology_construction_supply_chain': 'Tidak',
        'technology_construction_supply_chain_origin': 'Dalam Negeri',
        'technology_construction_innovation_origin': 'Dalam Negeri',
        'technology_construction_innovation_category': 'HaKI (Hak atas Kekayaan Intelektual)',
        'technology_construction_assessment': 'Ya',
        'technology_construction_level': 'Emerging',
        'created_at': '2018-09-27T07:40:47.609Z',
        'updated_at': '2018-09-27T07:40:47.609Z',
        'intellectual_property_right': null
      },
      {
        'id': 2,
        'company_id': 1,
        'construction_product_type': null,
        'technology_construction_applied': 'wkwk',
        'construction_project': null,
        'construction_project_date': '2018-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': null,
        'technology_construction_type': null,
        'technology_construction_origin': null,
        'technology_construction_owner': null,
        'technology_construction_category': null,
        'technology_construction_primary_type': null,
        'technology_construction_benefit': null,
        'technology_construction_all_benefits': null,
        'technology_construction_cost': null,
        'technology_construction_success_factor': null,
        'technology_construction_all_success_factors': null,
        'technology_construction_obstacle': null,
        'technology_construction_all_obstacles': null,
        'technology_construction_human_resource': null,
        'technology_construction_support': null,
        'technology_construction_supply_chain': null,
        'technology_construction_supply_chain_origin': null,
        'technology_construction_innovation_origin': null,
        'technology_construction_innovation_category': null,
        'technology_construction_assessment': null,
        'technology_construction_level': null,
        'created_at': '2018-09-27T07:42:51.491Z',
        'updated_at': '2018-09-27T07:42:51.491Z',
        'intellectual_property_right': null
      },
      {
        'id': 1,
        'company_id': 1,
        'construction_product_type': [
          'Gedung',
          'Infrastruktur'
        ],
        'technology_construction_applied': 'sadasdas',
        'construction_project': 'asdasd',
        'construction_project_date': '2017-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': [
          'Perancangan',
          'Konstruksi'
        ],
        'technology_construction_type': 'Perangkat Keras (Hardware)',
        'technology_construction_origin': 'Dalam Negeri',
        'technology_construction_owner': 'Konsultan',
        'technology_construction_category': 'Hak Cipta',
        'technology_construction_primary_type': 'Teknologi Mekanik',
        'technology_construction_benefit': 'Tangible',
        'technology_construction_all_benefits': 'w',
        'technology_construction_cost': [
          'Investasi',
          'Operasi'
        ],
        'technology_construction_success_factor': 'Teknis',
        'technology_construction_all_success_factors': 'w',
        'technology_construction_obstacle': 'Teknis',
        'technology_construction_all_obstacles': 'w',
        'technology_construction_human_resource': [
          'Tenaga Ahli'
        ],
        'technology_construction_support': [
          'Mekanik'
        ],
        'technology_construction_supply_chain': 'Tidak',
        'technology_construction_supply_chain_origin': 'Dalam Negeri',
        'technology_construction_innovation_origin': 'Dalam Negeri',
        'technology_construction_innovation_category': 'HaKI (Hak atas Kekayaan Intelektual)',
        'technology_construction_assessment': 'Ya',
        'technology_construction_level': 'Emerging',
        'created_at': '2018-09-27T07:40:47.609Z',
        'updated_at': '2018-09-27T07:40:47.609Z',
        'intellectual_property_right': null
      },
      {
        'id': 2,
        'company_id': 1,
        'construction_product_type': null,
        'technology_construction_applied': 'wkwk',
        'construction_project': null,
        'construction_project_date': '2018-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': null,
        'technology_construction_type': null,
        'technology_construction_origin': null,
        'technology_construction_owner': null,
        'technology_construction_category': null,
        'technology_construction_primary_type': null,
        'technology_construction_benefit': null,
        'technology_construction_all_benefits': null,
        'technology_construction_cost': null,
        'technology_construction_success_factor': null,
        'technology_construction_all_success_factors': null,
        'technology_construction_obstacle': null,
        'technology_construction_all_obstacles': null,
        'technology_construction_human_resource': null,
        'technology_construction_support': null,
        'technology_construction_supply_chain': null,
        'technology_construction_supply_chain_origin': null,
        'technology_construction_innovation_origin': null,
        'technology_construction_innovation_category': null,
        'technology_construction_assessment': null,
        'technology_construction_level': null,
        'created_at': '2018-09-27T07:42:51.491Z',
        'updated_at': '2018-09-27T07:42:51.491Z',
        'intellectual_property_right': null
      },
      {
        'id': 1,
        'company_id': 1,
        'construction_product_type': [
          'Gedung',
          'Infrastruktur'
        ],
        'technology_construction_applied': 'sadasdas',
        'construction_project': 'asdasd',
        'construction_project_date': '2017-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': [
          'Perancangan',
          'Konstruksi'
        ],
        'technology_construction_type': 'Perangkat Keras (Hardware)',
        'technology_construction_origin': 'Dalam Negeri',
        'technology_construction_owner': 'Konsultan',
        'technology_construction_category': 'Hak Cipta',
        'technology_construction_primary_type': 'Teknologi Mekanik',
        'technology_construction_benefit': 'Tangible',
        'technology_construction_all_benefits': 'w',
        'technology_construction_cost': [
          'Investasi',
          'Operasi'
        ],
        'technology_construction_success_factor': 'Teknis',
        'technology_construction_all_success_factors': 'w',
        'technology_construction_obstacle': 'Teknis',
        'technology_construction_all_obstacles': 'w',
        'technology_construction_human_resource': [
          'Tenaga Ahli'
        ],
        'technology_construction_support': [
          'Mekanik'
        ],
        'technology_construction_supply_chain': 'Tidak',
        'technology_construction_supply_chain_origin': 'Dalam Negeri',
        'technology_construction_innovation_origin': 'Dalam Negeri',
        'technology_construction_innovation_category': 'HaKI (Hak atas Kekayaan Intelektual)',
        'technology_construction_assessment': 'Ya',
        'technology_construction_level': 'Emerging',
        'created_at': '2018-09-27T07:40:47.609Z',
        'updated_at': '2018-09-27T07:40:47.609Z',
        'intellectual_property_right': null
      },
      {
        'id': 2,
        'company_id': 1,
        'construction_product_type': null,
        'technology_construction_applied': 'wkwk',
        'construction_project': null,
        'construction_project_date': '2018-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': null,
        'technology_construction_type': null,
        'technology_construction_origin': null,
        'technology_construction_owner': null,
        'technology_construction_category': null,
        'technology_construction_primary_type': null,
        'technology_construction_benefit': null,
        'technology_construction_all_benefits': null,
        'technology_construction_cost': null,
        'technology_construction_success_factor': null,
        'technology_construction_all_success_factors': null,
        'technology_construction_obstacle': null,
        'technology_construction_all_obstacles': null,
        'technology_construction_human_resource': null,
        'technology_construction_support': null,
        'technology_construction_supply_chain': null,
        'technology_construction_supply_chain_origin': null,
        'technology_construction_innovation_origin': null,
        'technology_construction_innovation_category': null,
        'technology_construction_assessment': null,
        'technology_construction_level': null,
        'created_at': '2018-09-27T07:42:51.491Z',
        'updated_at': '2018-09-27T07:42:51.491Z',
        'intellectual_property_right': null
      },
      {
        'id': 1,
        'company_id': 1,
        'construction_product_type': [
          'Gedung',
          'Infrastruktur'
        ],
        'technology_construction_applied': 'sadasdas',
        'construction_project': 'asdasd',
        'construction_project_date': '2017-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': [
          'Perancangan',
          'Konstruksi'
        ],
        'technology_construction_type': 'Perangkat Keras (Hardware)',
        'technology_construction_origin': 'Dalam Negeri',
        'technology_construction_owner': 'Konsultan',
        'technology_construction_category': 'Hak Cipta',
        'technology_construction_primary_type': 'Teknologi Mekanik',
        'technology_construction_benefit': 'Tangible',
        'technology_construction_all_benefits': 'w',
        'technology_construction_cost': [
          'Investasi',
          'Operasi'
        ],
        'technology_construction_success_factor': 'Teknis',
        'technology_construction_all_success_factors': 'w',
        'technology_construction_obstacle': 'Teknis',
        'technology_construction_all_obstacles': 'w',
        'technology_construction_human_resource': [
          'Tenaga Ahli'
        ],
        'technology_construction_support': [
          'Mekanik'
        ],
        'technology_construction_supply_chain': 'Tidak',
        'technology_construction_supply_chain_origin': 'Dalam Negeri',
        'technology_construction_innovation_origin': 'Dalam Negeri',
        'technology_construction_innovation_category': 'HaKI (Hak atas Kekayaan Intelektual)',
        'technology_construction_assessment': 'Ya',
        'technology_construction_level': 'Emerging',
        'created_at': '2018-09-27T07:40:47.609Z',
        'updated_at': '2018-09-27T07:40:47.609Z',
        'intellectual_property_right': null
      },
      {
        'id': 2,
        'company_id': 1,
        'construction_product_type': null,
        'technology_construction_applied': 'wkwk',
        'construction_project': null,
        'construction_project_date': '2018-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': null,
        'technology_construction_type': null,
        'technology_construction_origin': null,
        'technology_construction_owner': null,
        'technology_construction_category': null,
        'technology_construction_primary_type': null,
        'technology_construction_benefit': null,
        'technology_construction_all_benefits': null,
        'technology_construction_cost': null,
        'technology_construction_success_factor': null,
        'technology_construction_all_success_factors': null,
        'technology_construction_obstacle': null,
        'technology_construction_all_obstacles': null,
        'technology_construction_human_resource': null,
        'technology_construction_support': null,
        'technology_construction_supply_chain': null,
        'technology_construction_supply_chain_origin': null,
        'technology_construction_innovation_origin': null,
        'technology_construction_innovation_category': null,
        'technology_construction_assessment': null,
        'technology_construction_level': null,
        'created_at': '2018-09-27T07:42:51.491Z',
        'updated_at': '2018-09-27T07:42:51.491Z',
        'intellectual_property_right': null
      },
      {
        'id': 1,
        'company_id': 1,
        'construction_product_type': [
          'Gedung',
          'Infrastruktur'
        ],
        'technology_construction_applied': 'sadasdas',
        'construction_project': 'asdasd',
        'construction_project_date': '2017-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': [
          'Perancangan',
          'Konstruksi'
        ],
        'technology_construction_type': 'Perangkat Keras (Hardware)',
        'technology_construction_origin': 'Dalam Negeri',
        'technology_construction_owner': 'Konsultan',
        'technology_construction_category': 'Hak Cipta',
        'technology_construction_primary_type': 'Teknologi Mekanik',
        'technology_construction_benefit': 'Tangible',
        'technology_construction_all_benefits': 'w',
        'technology_construction_cost': [
          'Investasi',
          'Operasi'
        ],
        'technology_construction_success_factor': 'Teknis',
        'technology_construction_all_success_factors': 'w',
        'technology_construction_obstacle': 'Teknis',
        'technology_construction_all_obstacles': 'w',
        'technology_construction_human_resource': [
          'Tenaga Ahli'
        ],
        'technology_construction_support': [
          'Mekanik'
        ],
        'technology_construction_supply_chain': 'Tidak',
        'technology_construction_supply_chain_origin': 'Dalam Negeri',
        'technology_construction_innovation_origin': 'Dalam Negeri',
        'technology_construction_innovation_category': 'HaKI (Hak atas Kekayaan Intelektual)',
        'technology_construction_assessment': 'Ya',
        'technology_construction_level': 'Emerging',
        'created_at': '2018-09-27T07:40:47.609Z',
        'updated_at': '2018-09-27T07:40:47.609Z',
        'intellectual_property_right': null
      },
      {
        'id': 2,
        'company_id': 1,
        'construction_product_type': null,
        'technology_construction_applied': 'wkwk',
        'construction_project': null,
        'construction_project_date': '2018-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': null,
        'technology_construction_type': null,
        'technology_construction_origin': null,
        'technology_construction_owner': null,
        'technology_construction_category': null,
        'technology_construction_primary_type': null,
        'technology_construction_benefit': null,
        'technology_construction_all_benefits': null,
        'technology_construction_cost': null,
        'technology_construction_success_factor': null,
        'technology_construction_all_success_factors': null,
        'technology_construction_obstacle': null,
        'technology_construction_all_obstacles': null,
        'technology_construction_human_resource': null,
        'technology_construction_support': null,
        'technology_construction_supply_chain': null,
        'technology_construction_supply_chain_origin': null,
        'technology_construction_innovation_origin': null,
        'technology_construction_innovation_category': null,
        'technology_construction_assessment': null,
        'technology_construction_level': null,
        'created_at': '2018-09-27T07:42:51.491Z',
        'updated_at': '2018-09-27T07:42:51.491Z',
        'intellectual_property_right': null
      },
      {
        'id': 1,
        'company_id': 1,
        'construction_product_type': [
          'Gedung',
          'Infrastruktur'
        ],
        'technology_construction_applied': 'sadasdas',
        'construction_project': 'asdasd',
        'construction_project_date': '2017-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': [
          'Perancangan',
          'Konstruksi'
        ],
        'technology_construction_type': 'Perangkat Keras (Hardware)',
        'technology_construction_origin': 'Dalam Negeri',
        'technology_construction_owner': 'Konsultan',
        'technology_construction_category': 'Hak Cipta',
        'technology_construction_primary_type': 'Teknologi Mekanik',
        'technology_construction_benefit': 'Tangible',
        'technology_construction_all_benefits': 'w',
        'technology_construction_cost': [
          'Investasi',
          'Operasi'
        ],
        'technology_construction_success_factor': 'Teknis',
        'technology_construction_all_success_factors': 'w',
        'technology_construction_obstacle': 'Teknis',
        'technology_construction_all_obstacles': 'w',
        'technology_construction_human_resource': [
          'Tenaga Ahli'
        ],
        'technology_construction_support': [
          'Mekanik'
        ],
        'technology_construction_supply_chain': 'Tidak',
        'technology_construction_supply_chain_origin': 'Dalam Negeri',
        'technology_construction_innovation_origin': 'Dalam Negeri',
        'technology_construction_innovation_category': 'HaKI (Hak atas Kekayaan Intelektual)',
        'technology_construction_assessment': 'Ya',
        'technology_construction_level': 'Emerging',
        'created_at': '2018-09-27T07:40:47.609Z',
        'updated_at': '2018-09-27T07:40:47.609Z',
        'intellectual_property_right': null
      },
      {
        'id': 2,
        'company_id': 1,
        'construction_product_type': null,
        'technology_construction_applied': 'wkwk',
        'construction_project': null,
        'construction_project_date': '2018-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': null,
        'technology_construction_type': null,
        'technology_construction_origin': null,
        'technology_construction_owner': null,
        'technology_construction_category': null,
        'technology_construction_primary_type': null,
        'technology_construction_benefit': null,
        'technology_construction_all_benefits': null,
        'technology_construction_cost': null,
        'technology_construction_success_factor': null,
        'technology_construction_all_success_factors': null,
        'technology_construction_obstacle': null,
        'technology_construction_all_obstacles': null,
        'technology_construction_human_resource': null,
        'technology_construction_support': null,
        'technology_construction_supply_chain': null,
        'technology_construction_supply_chain_origin': null,
        'technology_construction_innovation_origin': null,
        'technology_construction_innovation_category': null,
        'technology_construction_assessment': null,
        'technology_construction_level': null,
        'created_at': '2018-09-27T07:42:51.491Z',
        'updated_at': '2018-09-27T07:42:51.491Z',
        'intellectual_property_right': null
      },
      {
        'id': 1,
        'company_id': 1,
        'construction_product_type': [
          'Gedung',
          'Infrastruktur'
        ],
        'technology_construction_applied': 'sadasdas',
        'construction_project': 'asdasd',
        'construction_project_date': '2017-09-27',
        'construction_project_cost': 'Rp 2.500.000.000 - Rp 50.000.000.000',
        'technology_construction_stage': [
          'Perancangan',
          'Konstruksi'
        ],
        'technology_construction_type': 'Perangkat Keras (Hardware)',
        'technology_construction_origin': 'Dalam Negeri',
        'technology_construction_owner': 'Konsultan',
        'technology_construction_category': 'Hak Cipta',
        'technology_construction_primary_type': 'Teknologi Mekanik',
        'technology_construction_benefit': 'Tangible',
        'technology_construction_all_benefits': 'w',
        'technology_construction_cost': [
          'Investasi',
          'Operasi'
        ],
        'technology_construction_success_factor': 'Teknis',
        'technology_construction_all_success_factors': 'w',
        'technology_construction_obstacle': 'Teknis',
        'technology_construction_all_obstacles': 'w',
        'technology_construction_human_resource': [
          'Tenaga Ahli'
        ],
        'technology_construction_support': [
          'Mekanik'
        ],
        'technology_construction_supply_chain': 'Tidak',
        'technology_construction_supply_chain_origin': 'Dalam Negeri',
        'technology_construction_innovation_origin': 'Dalam Negeri',
        'technology_construction_innovation_category': 'HaKI (Hak atas Kekayaan Intelektual)',
        'technology_construction_assessment': 'Ya',
        'technology_construction_level': 'Emerging',
        'created_at': '2018-09-27T07:40:47.609Z',
        'updated_at': '2018-09-27T07:40:47.609Z',
        'intellectual_property_right': null
      }
    ]

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

    return <div className='p-5'><Paper>
      <ReactTable
        data={data_}
        columns={columns}
        filterable
        defaultPageSize={10}
        className='-striped -highlight'

        // Text
        previousText='⇦'
        nextText='⇨'
        loadingText='Loading...'
        noDataText='Tidak ada data ditemukan'
        pageText='Halaman'
        ofText='dari'
        rowsText='baris'
      />
    </Paper></div>
  }
}

export default (Review)
