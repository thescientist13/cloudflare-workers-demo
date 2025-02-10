import path from 'path';

const fakeImportMetaUrl = `file://${path.dirname(process.argv[1])}/`;
const dataUrl = new URL('../../public/data.json', fakeImportMetaUrl);

console.log({ fakeImportMetaUrl, dataUrl });

export function onRequest(context) {
  return new Response(dataUrl.href);
}