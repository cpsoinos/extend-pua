import React from 'react'
import { BaseProps } from '../../types/BaseProps'
import { pickBy } from '../../util/pickBy'
import classNames from 'classnames'

export interface ButtonProps extends BaseProps {
  /**
   * Specifies the type of button.
   */
  buttonType?: 'button' | 'submit' | 'reset'
  /**
   * The target URL. If passed, will render an `<a>` tag with this `href` instead of a `<button>` tag
   */
  href?: string
  /**
   * Specifies a name for the button. Must be unique if used within a form.
   */
  name?: string
  /**
   * Specifies that a button should be disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Shows a spinner instead of the component's `{children}` to indicate a loading state
   * @default false
   */
  loading?: boolean
  /**
   * Sets focus on the element when the web page loads
   * @default false
   */
  autoFocus?: boolean
  /**
   * A11y support: the button's label
   */
  ariaLabel?: string
  /**
   * Specifies an initial value for the button
   */
  value?: string
  /**
   * Nested JSX, TSX, or HTML element
   */
  children: React.ReactChild
  /**
   * Function that overrides the button's onClick() handler
   */
  onClick?: () => void
  /**
   * Sets the button's onfocus handler
   */
  onFocus?: () => void
  /**
   * Sets the button's onblur handler
   */
  onBlur?: () => void
}

export interface ButtonPassThruProps extends BaseProps {
  type?: string
  href?: string
  name?: string
  disabled?: boolean
  loading?: boolean
  autoFocus?: string
  'aria-label'?: string
  value?: string
  onClick?: Function
  onFocus?: Function
  onBlur?: Function
}

const Element = (
  element: 'a' | 'button',
  props: ButtonPassThruProps,
  children: React.ReactChild,
) => {
  return React.createElement(element, props, children)
}

const Button = (props: ButtonProps) => {
  const {
    className,
    buttonType,
    href,
    name,
    disabled = false,
    loading = false,
    autoFocus = false,
    ariaLabel,
    value,
    children,
    onClick,
    onFocus,
    onBlur
  } = props

  const classes = classNames('bg-red-flag', 'hover:bg-blue-deep-sky', 'transition', 'ease-in', 'duration-200', 'text-white', 'p-2', 'rounded-md', 'leading-loose', `${className}`.trim())

  const btnProps = pickBy({
    type: buttonType,
    href,
    name,
    disabled,
    loading: loading?.toString(),
    autoFocus,
    'aria-label': ariaLabel,
    value,
    onClick,
    onFocus,
    onBlur,
    className: classes,
    style: {
      '-webkit-appearance': 'button-bevel',
      '-moz-appearance': 'button',
      appearance: 'button'
    }
  })

  const element = href ? 'a' : 'button'

  return Element(element, btnProps, children)
}

export default Button
