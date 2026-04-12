const { ContentType, FieldType } = require('@include/hearth');

const products = new ContentType({
  name: 'products',
  singularDisplayName: 'Product',
  pluralDisplayName: 'Products',
});

products
  .createField({
    name: 'image',
    displayName: 'Image',
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
    name: 'price',
    displayName: 'Price',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'options',
    displayName: 'Options',
    type: FieldType.LONG_TEXT,
    required: false,
  })
  .createField({
    name: 'category',
    displayName: 'Category',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = products;
