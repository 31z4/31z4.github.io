import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import { DateTime } from 'luxon'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
    },
  })

  eleventyConfig.addPassthroughCopy('src/styles')

  eleventyConfig.addFilter('localeDate', (date) => DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED))
  eleventyConfig.addFilter('date', (date) => DateTime.fromJSDate(date).toFormat('yyyy-MM-dd'))

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
