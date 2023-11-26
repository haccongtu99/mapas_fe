import { useHover } from '@mantine/hooks'
import { Flex } from '@mantine/core'

const FacebookIcon = () => {
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
          <g clipPath="url(#clip0_881_9362)">
            <path
              d="M18.7237 15.9974L19.1689 13.1011H16.3909V11.2191C16.3909 10.4246 16.7797 9.65259 18.025 9.65259H19.2872V7.18453C19.2872 7.18453 18.1377 6.9873 17.0445 6.9873C14.7568 6.9873 13.2579 8.37348 13.2579 10.8866V13.0955H10.7109V15.9918H13.2579V22.9959H16.3909V15.9918H18.7237V15.9974Z"
              fill="url(#paint0_linear_881_9362)"
            />
            <path
              d="M15 30C6.72802 30 0 23.272 0 15C0 6.72802 6.72802 0 15 0C23.272 0 30 6.72802 30 15C30 23.272 23.272 30 15 30ZM15 0.563486C7.03794 0.563486 0.563486 7.03794 0.563486 15C0.563486 22.9621 7.03794 29.4365 15 29.4365C22.9621 29.4365 29.4365 22.9621 29.4365 15C29.4365 7.03794 22.9621 0.563486 15 0.563486Z"
              fill="url(#paint1_linear_881_9362)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_881_9362"
              x1="14.9991"
              y1="30.248"
              x2="14.9991"
              y2="1.62292"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2C64F6" />
              <stop offset="1" stopColor="#2C64F6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_881_9362"
              x1="15"
              y1="0"
              x2="15"
              y2="1.62284"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2C64F6" />
              <stop offset="1" stopColor="#2C64F6" />
            </linearGradient>
            <clipPath id="clip0_881_9362">
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
          <g clipPath="url(#clip0_881_9708)">
            <path
              d="M30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15Z"
              fill="url(#paint0_linear_881_9708)"
            />
            <path
              d="M18.7237 16.0033L19.1689 13.107H16.3909V11.2249C16.3909 10.4304 16.7797 9.65845 18.025 9.65845H19.2872V7.19038C19.2872 7.19038 18.1377 6.99316 17.0445 6.99316C14.7568 6.99316 13.2579 8.37934 13.2579 10.8925V13.1014H10.7109V15.9977H13.2579V23.0018H16.3909V15.9977H18.7237V16.0033Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_881_9708"
              x1="15"
              y1="30.2479"
              x2="15"
              y2="1.62284"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2C64F6" />
              <stop offset="1" stopColor="#2C64F6" />
            </linearGradient>
            <clipPath id="clip0_881_9708">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </Flex>
  )
}

export default FacebookIcon
