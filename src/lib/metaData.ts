import { z } from 'astro/zod'

const LINE_BREAK = {
  '{n}': ' <br /> ',
  '{nSm}': " <br class='max-sm:hidden'/> ",
  '{nMd}': " <br class='max-md:hidden'/> ",
  '{nLg}': " <br class='max-lg:hidden'/> "
}

interface ParseTextOptions {
  isCleanText?: boolean
}

const parseText = (text: string, opts?: ParseTextOptions): string => {
  let newText = text
  Object.keys(LINE_BREAK).forEach((key) => {
    newText = newText.replaceAll(
      key,
      opts?.isCleanText ? ' ' : LINE_BREAK[key as keyof typeof LINE_BREAK]
    )
  })
  return newText
}

const metaDataSchema = z
  .object({ title: z.string(), description: z.string() })
  .transform((value) => ({
    title: parseText(value.title, { isCleanText: true }),
    htmlTitle: parseText(value.title),
    description: parseText(value.description, { isCleanText: true }),
    htmlDescription: parseText(value.description)
  }))

type MetaData = z.output<typeof metaDataSchema>
type MetaDataInput = z.input<typeof metaDataSchema>

const _mainMetaData: MetaDataInput = {
  title: 'Thanh Viet Nguyen',
  description:
    'A dedicated problem-solver who thrives{n}on learning and building.'
}
export const mainMetaData = metaDataSchema.parse(_mainMetaData)

const _projectMetaData: MetaDataInput = {
  title: 'Milestones in the{n}learning journey',
  description:
    'Each project marks a step forward, showcasing my growth and journey as a developer.{nMd}Explore how I’ve tackled challenges and built solutions along the way.'
}
export const projectMetaData: MetaData = metaDataSchema.parse(_projectMetaData)

const _blogMetaData: MetaDataInput = {
  title: 'Learning, Building, and{nSm}Documenting',
  description:
    'Insights and experiences from my journey as a developer—exploring ideas,{nSm}overcoming challenges, and sharing lessons learned along the way.'
}
export const blogMetaData: MetaData = metaDataSchema.parse(_blogMetaData)
