import { Github } from '@icons/Github'
import HeatMap, { type SVGProps } from '@uiw/react-heat-map'
import React from 'react'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { formatDate, formatNumber, getDateSuffix } from '@/lib/utils'
import type { GithubContributionData } from '@/types'

import BentoBadge from '../BentoBadge'

const getDateProps = () => {
  const today = new Date()
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(today.getMonth() - 6)

  return { startDate: sixMonthsAgo, endDate: today }
}

const renderRect =
  (handleMouseEnter: (date: string) => void): SVGProps['rectRender'] =>
  (props, data) => {
    const date = new Date(data.date)
    const formattedDate =
      date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' }) +
      getDateSuffix(date.getDate())
    const tileInfo = `${formatNumber(data.count) || 'No'} contributions on ${formattedDate}`

    return (
      <rect
        className='transition-all hover:brightness-125'
        onMouseEnter={() => handleMouseEnter(tileInfo)}
        {...props}
      />
    )
  }

interface Props extends GithubContributionData {}

const panelColors = {
  1: '#19222F',
  4: '#0F4E43',
  8: '#1F977B',
  12: '#1EF4AE'
}

const BentoGithubActivity = (props: Props) => {
  const [hoveredTile, setHoveredTile] = React.useState<string | null>(null)

  return (
    <div
      onMouseLeave={() => setHoveredTile(null)}
      className='relative flex h-full flex-col justify-between px-4 pb-5 pt-4 max-md:gap-4'
    >
      <div className='flex items-baseline justify-between gap-4 max-xs:flex-col'>
        <BentoBadge icon={Github} text='Github activity' />
        <p className='line-clamp-1 text-sm'>
          {hoveredTile
            ? hoveredTile
            : `${formatNumber(props.totalContributions) ?? 'No'} contributions in the last year`}
        </p>
      </div>
      <ScrollArea className='w-full'>
        <HeatMap
          {...getDateProps()}
          className='w-[550px]'
          value={props.contributions ?? []}
          weekLabels={false}
          monthLabels={false}
          legendCellSize={0}
          space={4}
          style={{ color: '#fff' }}
          rectProps={{ rx: 4 }}
          rectSize={16}
          rectRender={renderRect((date) => setHoveredTile(date))}
          panelColors={panelColors}
        />
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
      {
        <p className='text-sm text-slate-200 max-sm:text-xs sm:max-lg:mt-4'>
          Last pushed on {formatDate(new Date(props.lastPushedAt))}
        </p>
      }
    </div>
  )
}

export default BentoGithubActivity
