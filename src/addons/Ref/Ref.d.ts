import * as React from 'react';
import { DOMElement } from 'react';

export interface RefProps {
  [key: string]: any;

  /** Primary content. */
  children: React.ReactNode;

  /**
   * Called when componentDidMount.
   *
   * @param {DOMElement} node - Referred node.
   */
  innerRef: (node: DOMElement) => void;
}

declare const Ref: React.ComponentClass<RefProps>;

export default Ref;
