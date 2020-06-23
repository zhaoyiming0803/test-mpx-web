'use strict'

const path = require('path')

module.exports = (p) => {
  if (p.startsWith(`.${path.sep}`) || p.startsWith(`..${path.sep}`)) {
    p = path.resolve(path.dirname(module.parent.filename), p)
  }

  try {
    return require(p)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND' && ~err.message.indexOf(p)) return undefined
    else throw err
  }
}
