import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'
import { structure } from './structure'
import { monochromeTheme } from './theme'
import { CustomNavbar } from './CustomNavbar'

export default defineConfig({
  name: 'default',
  title: 'Hala Smart Technologies Studio',

  projectId: 'gmjjzklq',
  dataset: 'production12',

  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],

  studio: {
    components: {
      navbar: CustomNavbar,
    },
  },

  schema: schema,

  theme: monochromeTheme,
})
