import React from 'react'
import classNames from 'classnames'
import { BaseProps } from 'types/BaseProps'

interface SwitchProps extends BaseProps {
  label: string
  name: string
  disabled?: boolean
  small?: boolean
  large?: boolean
  knobLabels?: KnobLabels
  onChange: Function
}

interface KnobLabels {
  on: string
  off: string
}

const Switch = (props: SwitchProps) => {
  const { className, label, name, disabled, small, large, knobLabels = { on: 'ON', off: 'OFF'}, onChange } = props

  const labelClasses = classNames('inline-flex', 'items-center', 'space-x-2', { 'opacity-75': disabled, [className as string]: className })
  const wrapperClasses = classNames('switch', 'relative', 'rounded-full', 'border', 'border-gray-300', 'border-solid', 'overflow-hidden', 'w-20', 'top-1/2', 'mx-auto', 'mb-0', { 'h-6': small, 'h-8': !small && !large, 'h-10': large })
  const inputClasses = classNames('switch__input', 'relative', 'opacity-0', 'cursor-pointer', 'w-full', 'h-full', 'z-30', 'p-0', 'm-0', { 'cursor-not-allowed': disabled })
  const knobClasses = classNames('switch__knob', 'absolute inset-0 z-20 transition-all duration-300', { 'switch__knob--small': small, 'switch__knob--large': large })

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked)
  }

  return (
    <label className={labelClasses}>
      <span>{label}</span>
      <div className={wrapperClasses}>
        <input
          type="checkbox"
          name={name}
          className={inputClasses}
          disabled={disabled}
          onInput={onInput}
        />
        <div
          className={knobClasses}
          content-on={knobLabels.on}
          content-off={knobLabels.off}
        ></div>
        <div
          className="absolute bg-gray-200 inset-0 z-10 w-full rounded-full transition-all duration-300"
        ></div>
      </div>
    </label>
  )
}

export default Switch
