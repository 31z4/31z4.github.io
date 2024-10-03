import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import { DateTime } from 'luxon'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPassthroughCopy('src/styles')
  eleventyConfig.addFilter('date', (date) => DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED))

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
