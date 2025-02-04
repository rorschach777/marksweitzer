import {defineField, defineType} from 'sanity'

export const profileSectionType = defineType({
  name: 'profileSection',
  title: 'Profile Section',
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
        name: 'subHeadlineTop',
        title: 'Subheadline Top',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'subHeadlineBottom',
        title: 'Subheadline Bottom',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'mainTitle',
        title: 'Main Title',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'secondaryTitle',
        title: 'Secondary Title',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'mainContent',
        title: 'Main Content',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
  ],
})