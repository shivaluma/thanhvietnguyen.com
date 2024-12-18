import { type SVGProps } from 'react'

import { cn } from '@/lib/utils'

interface Props extends SVGProps<SVGSVGElement> {}

const TooltipArrow = ({ className, ...rest }: Props) => {
  return (
    <svg
      id='tooltip-arrow'
      width='158'
      height='46'
      viewBox='0 0 158 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('absolute h-[9px] w-8', className)}
      {...rest}
    >
      <g clipPath='url(#clip0_2299_746)'>
        <path
          d='M70.9517 36.8028L55.1103 20.9614C47.3837 13.2348 43.5204 9.37145 39.0119 6.60868C35.0148 4.15921 30.657 2.35415 26.0985 1.25976C20.957 0.0253906 15.4935 0.0253906 4.56641 0.0253906H153.132C142.205 0.0253906 136.742 0.0253906 131.6 1.25976C127.042 2.35415 122.684 4.15921 118.687 6.60868C114.178 9.37145 110.315 13.2348 102.588 20.9614L86.7466 36.8028C82.385 41.1645 75.3134 41.1645 70.9517 36.8028Z'
          fill='var(--tooltip-color)'
        />
        <path
          d='M153.132 5.60975C141.939 5.60975 137.253 5.64564 132.904 6.68983C128.915 7.64741 125.102 9.22684 121.605 11.3701C117.791 13.7072 114.452 16.9956 106.537 24.9101L90.6952 40.7516C84.1527 47.294 73.5452 47.294 67.0028 40.7515L51.1613 24.9101C43.2468 16.9956 39.9077 13.7072 36.0939 11.3701C32.5964 9.22684 28.7833 7.64741 24.7947 6.68983C20.4453 5.64564 15.7591 5.60975 4.56623 5.60975H0.667969V0.0253906H4.56623C15.4933 0.0253906 20.9568 0.0253906 26.0983 1.25976C30.6568 2.35415 35.0146 4.15921 39.0117 6.60868C43.5202 9.37145 47.3835 13.2348 55.1101 20.9614L70.9515 36.8028C75.3132 41.1645 82.3848 41.1645 86.7464 36.8028L102.588 20.9614C110.315 13.2348 114.178 9.37145 118.687 6.60868C122.684 4.15921 127.042 2.35415 131.6 1.25976C136.742 0.0253906 142.205 0.0253906 153.132 0.0253906H157.03V5.60975H153.132Z'
          fill='var(--tooltip-border-color)'
        />
      </g>
      <defs>
        <clipPath>
          <rect width='158' height='46' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default TooltipArrow
