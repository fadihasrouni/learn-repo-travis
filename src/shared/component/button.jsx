// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) => (
  // eslint-disable-next-line jsx-a11y/no-redundant-roles
  <button
    type="button"
    onClick={handleClick}
    className="btn btn-primary"
    role="button"
  >
    {label}
  </button>
)

export default Button
