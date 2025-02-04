import {defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
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
        name: "experience",
        type: 'array',
        of: [{type: 'reference', to: [{ type: 'experience'}]}]
    }),
    defineField({
        name: 'skillsDisplayName',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
 
    defineField({
        name: 'skills',
        type: 'array',
        of: [{type: 'string'}]
    }),

  ],
})