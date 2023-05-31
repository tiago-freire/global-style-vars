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

/**
 * Generates CSS variables from available styles and sets them as the response body.
 *
 * @param {ServiceContext<Clients>} context - The context object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
const generateStyles = async (context: ServiceContext<Clients>) => {
  const {
    clients: { stylesGraphql },
  } = context

  const styles = (await stylesGraphql.getStyles()) ?? {}

  const styleVars: string[] = []

  for (const key in styles) {
    if (Object.prototype.hasOwnProperty.call(styles, key)) {
      const obj = styles[key as keyof Colors]

      if (typeof obj === 'object' && obj !== null) {
        for (const prop in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, prop)) {
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
