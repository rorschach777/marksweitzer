import {defineField, defineType} from 'sanity'

export const jobTitleType = defineType({
  name: 'jobTitle',
  title: 'Job Title',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cookieValue',
      type: 'string',
      validation: (rule) => rule.required(),
    })
  ]
})