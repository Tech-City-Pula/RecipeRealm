const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_DOC_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export { ACCEPTED_DOC_TYPES, ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE };
