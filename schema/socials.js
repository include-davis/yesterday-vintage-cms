const { ContentType, FieldType } = require("@include/hearth");

const socialImages = new ContentType({
  name: "social-images",
  singularDisplayName: "Social Image",
  pluralDisplayName: "Social Images",
});

socialImages
  .createField({
    name: "image",
    displayName: "Image",
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: "image_alt_text",
    displayName: "Image Alt Text",
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: "platform",
    displayName: "Platform",
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: "href",
    displayName: "Link",
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = socialImages;
