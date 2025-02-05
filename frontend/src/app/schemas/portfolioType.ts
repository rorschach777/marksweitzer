import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolioItemType',
  title: 'Portfolio Item',
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
        name: 'itemName',
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
        name: 'description',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'image',
        type: 'image',
        validation: (rule) => rule.required()
    })
  ]
})