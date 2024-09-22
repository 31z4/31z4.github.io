import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight)
    eleventyConfig.addPassthroughCopy('src/prism.css')

    return {
      dir: {
        input: 'src',
        output: 'dist'
      }
    }
  }
