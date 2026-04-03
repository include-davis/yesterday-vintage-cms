const { ContentType, FieldType } = require('@include/hearth');

const members = new ContentType({
  name: 'members',
  singularDisplayName: 'Team Member',
  pluralDisplayName: 'Team Members',
});

members
  .createField({
    name: 'photo',
    displayName: 'Photo',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'role',
    displayName: 'Role',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'bio',
    displayName: 'Bio',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = members;
