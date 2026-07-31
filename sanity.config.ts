import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Hala CMS',

  projectId: 'gmjjzklq',
  dataset: 'production12',

  plugins: [structureTool(), visionTool()],

  schema: schema,
})
