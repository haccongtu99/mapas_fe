import { useHover } from '@mantine/hooks'
import { Flex } from '@mantine/core'

const InstagramIcon = () => {
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
          <g clipPath="url(#clip0_881_9366)">
            <path
              d="M19.2379 9.85547C18.7195 9.85547 18.2969 10.2781 18.2969 10.7965C18.2969 11.3149 18.7195 11.7375 19.2379 11.7375C19.7563 11.7375 20.1789 11.3149 20.1789 10.7965C20.1789 10.2781 19.7563 9.85547 19.2379 9.85547Z"
              fill="url(#paint0_linear_881_9366)"
            />
            <path
              d="M15.0674 11.0557C12.8924 11.0557 11.123 12.825 11.123 15.0001C11.123 17.1751 12.8924 18.9445 15.0674 18.9445C17.2425 18.9445 19.0119 17.1751 19.0119 15.0001C19.0119 12.825 17.2425 11.0557 15.0674 11.0557ZM15.0674 17.5245C13.6756 17.5245 12.543 16.3919 12.543 15.0001C12.543 13.6083 13.6756 12.4756 15.0674 12.4756C16.4593 12.4756 17.5919 13.6083 17.5919 15.0001C17.5919 16.3919 16.4593 17.5245 15.0674 17.5245Z"
              fill="url(#paint1_linear_881_9366)"
            />
            <path
              d="M18.1945 23.0011H11.8046C9.15056 23.0011 6.99805 20.8429 6.99805 18.1945V11.8046C6.99805 9.15056 9.1562 6.99805 11.8046 6.99805H18.1945C20.8485 6.99805 23.0011 9.1562 23.0011 11.8046V18.1945C23.0011 20.8485 20.8429 23.0011 18.1945 23.0011ZM11.8046 8.49692C9.98452 8.49692 8.50255 9.97889 8.50255 11.7989V18.1889C8.50255 20.0089 9.98452 21.4909 11.8046 21.4909H18.1945C20.0146 21.4909 21.4965 20.0089 21.4965 18.1889V11.7989C21.4965 9.97889 20.0146 8.49692 18.1945 8.49692H11.8046Z"
              fill="url(#paint2_linear_881_9366)"
            />
            <path
              d="M15 30C6.72802 30 0 23.272 0 15C0 6.72802 6.72802 0 15 0C23.272 0 30 6.72802 30 15C30 23.272 23.272 30 15 30ZM15 0.563486C7.03794 0.563486 0.563486 7.03794 0.563486 15C0.563486 22.9621 7.03794 29.4365 15 29.4365C22.9621 29.4365 29.4365 22.9621 29.4365 15C29.4365 7.03794 22.9621 0.563486 15 0.563486Z"
              fill="url(#paint3_linear_881_9366)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_881_9366"
              x1="11.9069"
              y1="3.77545"
              x2="26.4223"
              y2="17.671"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE185" />
              <stop offset="0.21" stopColor="#FFBB36" />
              <stop offset="0.38" stopColor="#FF5176" />
              <stop offset="0.52" stopColor="#F63395" />
              <stop offset="0.74" stopColor="#A436D2" />
              <stop offset="1" stopColor="#5F4EED" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_881_9366"
              x1="7.80975"
              y1="8.05228"
              x2="22.3251"
              y2="21.9479"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE185" />
              <stop offset="0.21" stopColor="#FFBB36" />
              <stop offset="0.38" stopColor="#FF5176" />
              <stop offset="0.52" stopColor="#F63395" />
              <stop offset="0.74" stopColor="#A436D2" />
              <stop offset="1" stopColor="#5F4EED" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_881_9366"
              x1="7.77566"
              y1="8.08557"
              x2="22.2967"
              y2="21.9811"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE185" />
              <stop offset="0.21" stopColor="#FFBB36" />
              <stop offset="0.38" stopColor="#FF5176" />
              <stop offset="0.52" stopColor="#F63395" />
              <stop offset="0.74" stopColor="#A436D2" />
              <stop offset="1" stopColor="#5F4EED" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_881_9366"
              x1="0"
              y1="15"
              x2="30"
              y2="15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE185" />
              <stop offset="0.21" stopColor="#FFBB36" />
              <stop offset="0.38" stopColor="#FF5176" />
              <stop offset="0.52" stopColor="#F63395" />
              <stop offset="0.74" stopColor="#A436D2" />
              <stop offset="1" stopColor="#5F4EED" />
            </linearGradient>
            <clipPath id="clip0_881_9366">
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
          <g clipPath="url(#clip0_881_9724)">
            <path
              d="M30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15Z"
              fill="url(#paint0_linear_881_9724)"
            />
            <path
              d="M19.2379 9.85547C18.7195 9.85547 18.2969 10.2781 18.2969 10.7965C18.2969 11.3149 18.7195 11.7375 19.2379 11.7375C19.7563 11.7375 20.1789 11.3149 20.1789 10.7965C20.1789 10.2781 19.7563 9.85547 19.2379 9.85547Z"
              fill="white"
            />
            <path
              d="M15.0674 11.0557C12.8924 11.0557 11.123 12.825 11.123 15.0001C11.123 17.1751 12.8924 18.9445 15.0674 18.9445C17.2425 18.9445 19.0119 17.1751 19.0119 15.0001C19.0119 12.825 17.2425 11.0557 15.0674 11.0557ZM15.0674 17.5245C13.6756 17.5245 12.543 16.3919 12.543 15.0001C12.543 13.6083 13.6756 12.4756 15.0674 12.4756C16.4593 12.4756 17.5919 13.6083 17.5919 15.0001C17.5919 16.3919 16.4593 17.5245 15.0674 17.5245Z"
              fill="white"
            />
            <path
              d="M18.1945 23.0011H11.8046C9.15056 23.0011 6.99805 20.8429 6.99805 18.1945V11.8046C6.99805 9.15056 9.1562 6.99805 11.8046 6.99805H18.1945C20.8485 6.99805 23.0011 9.1562 23.0011 11.8046V18.1945C23.0011 20.8485 20.8429 23.0011 18.1945 23.0011ZM11.8046 8.49692C9.98452 8.49692 8.50255 9.97889 8.50255 11.7989V18.1889C8.50255 20.0089 9.98452 21.4909 11.8046 21.4909H18.1945C20.0146 21.4909 21.4965 20.0089 21.4965 18.1889V11.7989C21.4965 9.97889 20.0146 8.49692 18.1945 8.49692H11.8046Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_881_9724"
              x1="15"
              y1="30.2479"
              x2="15"
              y2="1.62284"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE185" />
              <stop offset="0.21" stopColor="#FFBB36" />
              <stop offset="0.38" stopColor="#FF5176" />
              <stop offset="0.52" stopColor="#F63395" />
              <stop offset="0.74" stopColor="#A436D2" />
              <stop offset="1" stopColor="#5F4EED" />
            </linearGradient>
            <clipPath id="clip0_881_9724">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </Flex>
  )
}

export default InstagramIcon
