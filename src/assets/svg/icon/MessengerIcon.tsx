import { useHover } from '@mantine/hooks'
import { Flex } from '@mantine/core'

const MessengerIcon = () => {
  const { hovered, ref } = useHover()

  return (
    <Flex ref={ref}>
      {!hovered ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clipPath="url(#clip0_881_9702)">
            <path
              d="M15 30C6.72802 30 0 23.272 0 15C0 6.72802 6.72802 0 15 0C23.272 0 30 6.72802 30 15C30 23.272 23.272 30 15 30ZM15 0.563486C7.03794 0.563486 0.563486 7.03794 0.563486 15C0.563486 22.9621 7.03794 29.4365 15 29.4365C22.9621 29.4365 29.4365 22.9621 29.4365 15C29.4365 7.03794 22.9621 0.563486 15 0.563486Z"
              fill="url(#paint0_linear_881_9702)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0005 6.2373C10.0644 6.2373 6.23828 9.84925 6.23828 14.7347C6.23828 17.2873 7.28637 19.4961 8.98809 21.0175C9.12896 21.1471 9.21912 21.3275 9.22476 21.519L9.26984 23.0799C9.28674 23.5758 9.79951 23.9026 10.2559 23.6997L11.9971 22.9334C12.1436 22.8658 12.307 22.8545 12.4648 22.8996C13.265 23.1193 14.1158 23.2377 15.0005 23.2377C19.9366 23.2377 23.7627 19.6257 23.7627 14.7403C23.7627 9.85489 19.9366 6.24294 15.0005 6.24294V6.2373Z"
              fill="url(#paint1_radial_881_9702)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.73775 17.2197L12.3129 13.1344C12.7242 12.4864 13.5976 12.323 14.2118 12.785L16.2573 14.3177C16.4432 14.4586 16.7024 14.4586 16.8884 14.3177L19.6551 12.2216C20.0214 11.9398 20.506 12.385 20.258 12.7738L17.6829 16.859C17.2716 17.5071 16.3982 17.6705 15.784 17.2084L13.7385 15.6757C13.5525 15.5349 13.2933 15.5349 13.1074 15.6757L10.3407 17.7719C9.97441 18.0536 9.48981 17.6085 9.73775 17.2197Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_881_9702"
              x1="0"
              y1="15"
              x2="30"
              y2="15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0797FD" />
              <stop offset="0.61" stopColor="#9D33FD" />
              <stop offset="0.93" stopColor="#FD5280" />
              <stop offset="1" stopColor="#FD7061" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_881_9702"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(7.57374 23.5814) scale(18.0316 18.0316)"
            >
              <stop stopColor="#0797FD" />
              <stop offset="0.61" stopColor="#9D33FD" />
              <stop offset="0.93" stopColor="#FD5280" />
              <stop offset="1" stopColor="#FD7061" />
            </radialGradient>
            <clipPath id="clip0_881_9702">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clipPath="url(#clip0_881_9718)">
            <path
              d="M30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15Z"
              fill="url(#paint0_linear_881_9718)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0005 6.2373C10.0644 6.2373 6.23828 9.84925 6.23828 14.7347C6.23828 17.2873 7.28637 19.4961 8.98809 21.0175C9.12896 21.1471 9.21912 21.3275 9.22476 21.519L9.26984 23.0799C9.28674 23.5758 9.79951 23.9026 10.2559 23.6997L11.9971 22.9334C12.1436 22.8658 12.307 22.8545 12.4648 22.8996C13.265 23.1193 14.1158 23.2377 15.0005 23.2377C19.9366 23.2377 23.7627 19.6257 23.7627 14.7403C23.7627 9.85489 19.9366 6.24294 15.0005 6.24294V6.2373Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.73775 17.2197L12.3129 13.1344C12.7242 12.4864 13.5976 12.323 14.2118 12.785L16.2573 14.3177C16.4432 14.4586 16.7024 14.4586 16.8884 14.3177L19.6551 12.2216C20.0214 11.9398 20.506 12.385 20.258 12.7738L17.6829 16.859C17.2716 17.5071 16.3982 17.6705 15.784 17.2084L13.7385 15.6757C13.5525 15.5349 13.2933 15.5349 13.1074 15.6757L10.3407 17.7719C9.97441 18.0536 9.48981 17.6085 9.73775 17.2197Z"
              fill="url(#paint1_linear_881_9718)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_881_9718"
              x1="0"
              y1="15"
              x2="30"
              y2="15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0797FD" />
              <stop offset="0.61" stopColor="#9D33FD" />
              <stop offset="0.93" stopColor="#FD5280" />
              <stop offset="1" stopColor="#FD7061" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_881_9718"
              x1="9.67013"
              y1="14.9995"
              x2="20.3257"
              y2="14.9995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0797FD" />
              <stop offset="0.61" stopColor="#9D33FD" />
              <stop offset="0.93" stopColor="#FD5280" />
              <stop offset="1" stopColor="#FD7061" />
            </linearGradient>
            <clipPath id="clip0_881_9718">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </Flex>
  )
}

export default MessengerIcon
