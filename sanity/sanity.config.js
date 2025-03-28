import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'bike',

  projectId: 'vin3omqt',
  dataset: 'bike',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
