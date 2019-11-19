import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', (date, dataFormat= 'LL') => {
  if (!date) {
    return ''
  }
  return moment(date).format(dataFormat)
})