import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sanity-studio-portfolio',
  title: 'Sanity Nextjs Portfolio',

  projectId: 'nm6ucsbr',
  dataset: 'production',
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
