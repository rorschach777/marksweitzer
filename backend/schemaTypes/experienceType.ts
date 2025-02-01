import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'displayTitle',
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
        name: 'company',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (rule) => rule.required(),
      }),

      defineField({
          name: 'yearStart',
          type: 'string',
          validation: (rule) => rule.required(),
      }),
      defineField({
          name: 'yearEnd',
          type: 'string',
          validation: (rule) => rule.required(),
      }),
      defineField({
          name: 'displayYears',
          type: 'string',
          validation: (rule) => rule.required(),
      }),
      defineField({
          name: 'duties',
          type: 'array',
          of: [{type: 'string'}]
      }),
  ],
})