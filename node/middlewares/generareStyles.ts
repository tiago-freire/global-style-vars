import type { ServiceContext } from '@vtex/api'
import type {
  ActiveBackgroundColors,
  ActiveBorderColors,
  ActiveOnColors,
  ActiveTextColors,
  BackgroundColors,
  BorderColors,
  Colors,
  HoverBackgroundColors,
  HoverBorderColors,
  HoverOnColors,
  HoverTextColors,
  OnColors,
  TextColors,
  VisitedTextColors,
} from 'vtex.styles-graphql'

import type { Clients } from '../clients'

type PossibleColors =
  | Colors
  | BackgroundColors
  | HoverBackgroundColors
  | ActiveBackgroundColors
  | TextColors
  | VisitedTextColors
  | HoverTextColors
  | ActiveTextColors
  | BorderColors
  | HoverBorderColors
  | ActiveBorderColors
  | OnColors
  | HoverOnColors
  | ActiveOnColors

const objectHasProperty = (obj: unknown, prop: string) =>
  Object.prototype.hasOwnProperty.call(obj, prop)

const generateStyles = async (
  context: ServiceContext<Clients>
): Promise<void> => {
  const {
    clients: { stylesGraphql },
  } = context

  let styles

  try {
    styles = (await stylesGraphql.getStyles()) ?? {}
  } catch (error) {
    console.error(error)
    styles = {}
  }

  const styleVars: string[] = []

  for (const key in styles) {
    if (objectHasProperty(styles, key)) {
      const obj = styles[key as keyof Colors]

      if (typeof obj === 'object' && !!obj) {
        for (const prop in obj) {
          if (objectHasProperty(obj, prop)) {
            const variableName = `--${key.replace(/_/g, '-')}-${prop.replace(
              /_/g,
              '-'
            )}`

            const value = obj[prop as keyof PossibleColors]

            styleVars.push(`  ${variableName}: ${value};`)
          }
        }
      }
    }
  }

  const styleVarsStr =
    styleVars.length > 0 ? `:root {\n${styleVars.join('\n')}\n}` : ''

  context.body = styleVarsStr
  context.status = 200
  context.set('Content-Type', 'text/css')
}

export default generateStyles
