import { Stack } from '@icons/Stack'

import BentoBadge from '../BentoBadge'
import TechStacks from './TechStacks'

const BentoItemTechStack = () => {
  return (
    <div className='flex h-full flex-col gap-5 px-5 pb-6 pt-4 max-md:gap-8'>
      <BentoBadge
        icon={Stack}
        text='Tech stack'
        className={{ component: 'w-fit' }}
      />
      <div className='flex-grow place-content-center'>
        <TechStacks />
      </div>
      <div className='space-y-2'>
        <p className='text-lg'>Tech stacks I'm familiar with</p>
        <p className='text-sm text-slate-400'>
          Primarily focused on the JavaScript ecosystem, but always eager to
          explore and learn new technologies.
        </p>
      </div>
    </div>
  )
}

export default BentoItemTechStack
