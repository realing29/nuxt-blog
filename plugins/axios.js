export default function({$axios, redirect, store}) {

  $axios.interceptors.request.use(request => {
    if(store.getters['auth/isAuthenticated'] && !request.headers.common['Authorization']) {
      const token = store.getters
      request.headers.common['Authorization'] = `Bearer ${token}`
    }
    
    return request
  })

  $axios.onError(error => {
    if(error.response){
      if(error.response.status === 401){
        redirect('admin/login?massage=session')
        store.dispatch('auth/logout')
      }

      if(error.response.status === 500){
        console.log('Server 500 error')
      }
    }
  })
}

