const getImageKitEndpoint = () => {
  const endpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/2cas695rs';
  return endpoint.replace(/\/+$/, '');
};

const normalizeImageKitUrl = (url) => {
  if (!url || typeof url !== 'string') return url;

  return url;
};

export const mapClientImageUrl = (url) => normalizeImageKitUrl(url);

export const mapArtistImageUrl = (url) => normalizeImageKitUrl(url);

export const mapArtworkImageUrl = (url) => normalizeImageKitUrl(url);

export const buildImageKitUrl = (url, { width, quality = 80, format = 'webp' } = {}) => {
  const converted = mapArtworkImageUrl(url);
  if (!converted || typeof converted !== 'string') return converted;

  const endpoint = getImageKitEndpoint();
  if (!converted.startsWith(endpoint)) return converted;

  const transforms = [];
  if (quality) transforms.push(`q-${quality}`);
  if (format) transforms.push(`f-${format}`);
  if (width) transforms.push(`w-${width}`);

  if (transforms.length === 0) return converted;

  const separator = converted.includes('?') ? '&' : '?';
  return `${converted}${separator}tr=${transforms.join(',')}`;
};
