import React from 'react'

export interface BaseProps {
  /**
   * The `id` attribute of the HTML element rendered by the component
   */
  id?: string
  /**
   * A string of CSS classes to apply to the component
   */
  className?: string
  /**
   * Inline styles to be applied to the component
   */
  style?: React.CSSProperties
  /**
   * An optional ref
   */
  ref?: React.MutableRefObject<HTMLElement>
  /**
   * Optionally set the HTML property `tabindex`
   */
  tabIndex?: number
}
