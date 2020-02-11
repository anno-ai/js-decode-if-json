const defaultTo = require('lodash/defaultTo')

module.exports = {
  /**
   * Decodes a string if it is json. Returns default value if nil
   *
   * @param   {mixed}  value  A json string
   *
   * @return  {object}         [return description]
   */
  decodeIfJson: (value, defaultValue = null) => {
    try {
      value = JSON.parse(value)
    } catch (err) {
      value = null
    }

    return defaultTo(value, defaultValue)
  }
}
