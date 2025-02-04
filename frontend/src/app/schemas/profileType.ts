import {defineField, defineType} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
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
        name: 'jobTitle',
        type: 'reference',
        to: [{type: 'jobTitle'}]
    }),
    defineField({
        name: 'mainMessage',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'sections',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'profileSection'}]}]
    })
  ],
})