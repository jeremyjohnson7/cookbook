module.exports.capitalize = str =>
    str.charAt(0).toUpperCase() + str.slice(1);

module.exports.slugify = str => str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-*([a-z0-9](-?[a-z0-9]+)*)-*/g, '$1');
