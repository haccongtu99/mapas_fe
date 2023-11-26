import { FC } from 'react'

type TDoubleArrowIconProps = {
  color?: string
}

const DoubleArrowIcon: FC<TDoubleArrowIconProps> = ({ color = 'black' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="double_arrow_FILL0_wght400_GRAD0_opsz48 6">
        <path
          id="Vector"
          d="M6.05078 19L11.3008 12L6.05078 5H7.90078L13.1508 12L7.90078 19H6.05078ZM12.3508 19L17.6008 12L12.3508 5H14.2008L19.4508 12L14.2008 19H12.3508Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default DoubleArrowIcon
