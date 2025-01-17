/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type { StrictReactDOMProps } from '../types/StrictReactDOMProps';
import type { StrictReactDOMAnchorProps } from '../types/StrictReactDOMAnchorProps';
import type { StrictReactDOMButtonProps } from '../types/StrictReactDOMButtonProps';
import type { StrictReactDOMImageProps } from '../types/StrictReactDOMImageProps';
import type { StrictReactDOMInputProps } from '../types/StrictReactDOMInputProps';
import type { StrictReactDOMLabelProps } from '../types/StrictReactDOMLabelProps';
import type { StrictReactDOMListItemProps } from '../types/StrictReactDOMListItemProps';
import type { StrictReactDOMOptionProps } from '../types/StrictReactDOMOptionProps';
import type { StrictReactDOMOptionGroupProps } from '../types/StrictReactDOMOptionGroupProps';
import type { StrictReactDOMSelectProps } from '../types/StrictReactDOMSelectProps';
import type { StrictReactDOMTextAreaProps } from '../types/StrictReactDOMTextAreaProps';

// $FlowFixMe[nonstrict-import]
import { createStrictDOMComponent as createStrict } from './modules/createStrictDOMComponent';
// $FlowFixMe[nonstrict-import]
import { Platform } from 'react-native';
import * as stylex from './stylex';

const styles = stylex.create({
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  },
  a: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
  button: {
    borderWidth: 1
  },
  code: {
    fontFamily: Platform.select({ ios: 'Menlo', default: 'monospace' })
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  hr: {
    backgroundColor: 'black',
    boxSizing: 'border-box',
    height: 1
  },
  img: {
    objectFit: 'fill'
  },
  input: {
    borderWidth: 1
  },
  lineThrough: {
    textDecorationLine: 'line-through'
  },
  textarea: {
    borderWidth: 1,
    verticalAlign: 'top'
  },
  underline: {
    textDecorationLine: 'underline'
  }
});

const headingProps = {
  style: styles.heading
};

/**
 * "a" (inline)
 */
export const a: React$AbstractComponent<
  StrictReactDOMAnchorProps,
  HTMLAnchorElement
> = createStrict('a', { style: styles.a });

/**
 * "article" (block)
 */
export const article: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLElement
> = createStrict('article');

/**
 * "aside" (block)
 */
export const aside: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('aside');

/**
 * "b" (inline)
 */
export const b: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('b', { style: styles.bold });

/**
 * "bdi" (inline)
 */
export const bdi: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('bdi');

/**
 * "bdo" (inline)
 */
export const bdo: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('bdo');

/**
 * "blockquote" (block)
 */
export const blockquote: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLQuoteElement
> = createStrict('blockquote');

/**
 * "br"
 */
export const br: React$AbstractComponent<StrictReactDOMProps, HTMLBRElement> =
  createStrict('br');

/**
 * "button" (inline-block)
 */
export const button: React$AbstractComponent<
  StrictReactDOMButtonProps,
  HTMLButtonElement
> = createStrict('button', {
  style: styles.button,
  type: 'button'
});

/**
 * "code" (inline)
 */
export const code: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('code', { style: styles.code });

/**
 * "del" (inline)
 */
export const del: React$AbstractComponent<StrictReactDOMProps, HTMLModElement> =
  createStrict('del', { style: styles.lineThrough });

/**
 * "div" (block)
 */
export const div: React$AbstractComponent<StrictReactDOMProps, HTMLDivElement> =
  createStrict('div');

/**
 * "em" (inline)
 */
export const em: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('em', { style: styles.italic });

/**
 * "fieldset" (block)
 */
export const fieldset: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLFieldSetElement
> = createStrict('fieldset');

/**
 * "footer" (block)
 */
export const footer: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('footer');

/**
 * "form" (block)
 */
export const form: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLFormElement
> = createStrict('form');

/**
 * "h1-h6" (block)
 */
export const h1: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLHeadingElement
> = createStrict('h1', headingProps);
export const h2: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLHeadingElement
> = createStrict('h2', headingProps);
export const h3: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLHeadingElement
> = createStrict('h3', headingProps);
export const h4: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLHeadingElement
> = createStrict('h4', headingProps);
export const h5: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLHeadingElement
> = createStrict('h5', headingProps);
export const h6: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLHeadingElement
> = createStrict('h6', headingProps);

/**
 * "header" (block)
 */
export const header: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('header');

/**
 * "hr" (block)
 */
export const hr: React$AbstractComponent<StrictReactDOMProps, HTMLHRElement> =
  createStrict('hr', { style: styles.hr });

/**
 * "i" (inline)
 */
export const i: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('i', { style: styles.italic });

/**
 * "img" (inline)
 */
export const img: React$AbstractComponent<
  StrictReactDOMImageProps,
  HTMLImageElement
> = createStrict('img', { style: styles.img });

/**
 * "input" (inline-block)
 */
export const input: React$AbstractComponent<
  StrictReactDOMInputProps,
  HTMLInputElement
> = createStrict('input', {
  style: styles.input
});

/**
 * "ins" (inline)
 */
export const ins: React$AbstractComponent<StrictReactDOMProps, HTMLModElement> =
  createStrict('ins', { style: styles.underline });

/**
 * "kbd" (inline)
 */
export const kbd: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('kbd', { style: styles.code });

/**
 * "label" (inline)
 */
export const label: React$AbstractComponent<
  StrictReactDOMLabelProps,
  HTMLLabelElement
> = createStrict('label');

/**
 * "li" (block)
 */
export const li: React$AbstractComponent<
  StrictReactDOMListItemProps,
  HTMLLIElement
> = createStrict('li');

/**
 * "main" (block)
 */
export const main: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('main');

/**
 * "nav" (block)
 */
export const nav: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('nav');

/**
 * "ol" (block)
 */
export const ol: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLOListElement
> = createStrict('ol');

/**
 * "optgroup"
 */
export const optgroup: React$AbstractComponent<
  StrictReactDOMOptionGroupProps,
  HTMLOptGroupElement
> = createStrict('optgroup');

/**
 * "option"
 */
export const option: React$AbstractComponent<
  StrictReactDOMOptionProps,
  HTMLOptionElement
> = createStrict('option');

/**
 * "p" (block)
 */
export const p: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLParagraphElement
> = createStrict('p');

/**
 * "pre" (block)
 */
export const pre: React$AbstractComponent<StrictReactDOMProps, HTMLPreElement> =
  createStrict('pre', { style: styles.code });

/**
 * "s" (inline)
 */
export const s: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('s', { style: styles.lineThrough });

/**
 * "section" (block)
 */
export const section: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLElement
> = createStrict('section');

/**
 * "select" (inline-block)
 */
export const select: React$AbstractComponent<
  StrictReactDOMSelectProps,
  HTMLSelectElement
> = createStrict('select');

/**
 * "span" (inline)
 */
export const span: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLSpanElement
> = createStrict('span');

/**
 * "strong" (inline)
 */
export const strong: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('strong', { style: styles.bold });

/**
 * "sub" (inline)
 */
export const sub: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('sub');

/**
 * "sup" (inline)
 */
export const sup: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('sup');

/**
 * "textarea" (inline-block)
 */
export const textarea: React$AbstractComponent<
  StrictReactDOMTextAreaProps,
  HTMLTextAreaElement
> = createStrict('textarea', {
  style: styles.textarea
});

/**
 * "u" (inline)
 */
export const u: React$AbstractComponent<StrictReactDOMProps, HTMLElement> =
  createStrict('u', { style: styles.underline });

/**
 * "ul" (block)
 */
export const ul: React$AbstractComponent<
  StrictReactDOMProps,
  HTMLUListElement
> = createStrict('ul');
