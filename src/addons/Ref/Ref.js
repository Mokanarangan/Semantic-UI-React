import PropTypes from 'prop-types'
import { Children, Component } from 'react'
import { findDOMNode } from 'react-dom'

import { META } from '../../lib'

/**
 * This component exposes a callback prop that always returns the DOM node of both functional and class component
 * children.
 */
export default class Ref extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,

    /**
     * Called when componentDidMount.
     *
     * @param {DOMElement} node - Referred node.
     */
    innerRef: PropTypes.func.isRequired,
  }

  static _meta = {
    name: 'Ref',
    type: META.TYPES.ADDON,
  }

  componentDidMount() {
    const { innerRef } = this.props
    const node = findDOMNode(this)

    innerRef(node)
  }

  render() {
    const { children } = this.props

    return Children.only(children)
  }
}
