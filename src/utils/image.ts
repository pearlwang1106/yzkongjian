export function imageSrc(path: string, baseUrl = import.meta.env.BASE_URL): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${baseUrl}${path.replace(/^\//, '')}`;
}
