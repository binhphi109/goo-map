import { put, select } from 'redux-saga/effects'
import { is } from 'ramda'

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    console.tron.display({
      name: '🔥 GOOMAP 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to GooMap!'
      }
    })
  }
}
