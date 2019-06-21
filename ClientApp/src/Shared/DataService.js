import axios from 'axios'

//axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

const baseUrl = '/'

export default {

  GetMap(pageNo, pageSize, IsActive) {
   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.querySelector('meta[name="api-token"]').getAttribute('content')
    return axios.get(baseUrl + `/Admin/Map/Get?pageno=${pageNo}&pagesize=${pageSize}&IsActive=${IsActive}`)
  }
  //ActivateLink(mapId) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.querySelector('meta[name="api-token"]').getAttribute('content')
  //  return axios.post(`/api/admin/Map/${mapId}/Activate`)
  //},
  //GetOfficesMap(OfficeType) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.querySelector('meta[name="api-token"]').getAttribute('content')
  //  return axios.get(baseUrl + `/Admin/Map/GetOffices?OfficeType=${OfficeType}`)
  //},
  //ActivateOffice(object) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.querySelector('meta[name="api-token"]').getAttribute('content')
  //  return axios.post(`/api/admin/Map/ActivateOffice`, object)
  //},
  //Deactivatelink(mapId) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.querySelector('meta[name="api-token"]').getAttribute('content')
  //  return axios.post(`/api/admin/Map/${mapId}/Deactivate`)
  //}

}
