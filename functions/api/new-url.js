const dataUrl = new URL('../public/data.json', import.meta.url);

export function onRequest(context) {
  return new Response(dataUrl.href);
}