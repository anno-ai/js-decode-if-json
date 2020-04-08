const defaultTo = require('lodash/defaultTo')

  /**
   * Decodes a string if it is json. Returns default value if nil
   *
   * @param   {mixed}  value  A json string
   *
   * @return  {object}         [return description]
   */
export function decodeIfJson (value: any, defaultValue:any = null): any {
  try {
    value = JSON.parse(value)
  } catch (err) {
    value = null
  }

  return defaultTo(value, defaultValue)
}
