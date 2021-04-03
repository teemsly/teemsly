import classnames from 'classnames'
import _ from 'lodash'

export const defaultClassPrefix = 'ts-'

export const getClassNamePrefix = () => {
  return defaultClassPrefix
}

export const setDefaultClassPrefix = (name: string) => `${getClassNamePrefix()}${name}`

export const addPrefix = (prefix: string, className: string | string[]): string => {
  if(!prefix || !className) {
    return '';
  }

  if(_.isArray(className)) {
    return classnames(className.filter(name => !!name).map(name => `${prefix}-${name}`));
  }

  return `${prefix}-${className}`
}

export default _.curry(addPrefix)