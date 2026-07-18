// https://stackoverflow.com/a/34332536/417806
// import path from 'path';

// const fakeImportMetaUrl = `file://${path.dirname(process.argv[1])}/`;
// const dataUrl = new URL('../../public/data.json', fakeImportMetaUrl);

// console.log({ fakeImportMetaUrl, dataUrl });

import path from 'path';

https://www.google.com/search?q=nodejs+get+current+directory+esm+without+import.meta.url&mstk=AUtExfARrZgKEUllDyBiMI5CiJgqvSnT3ktKruzum9rGhiaS48lqV7ae8qbgEYc3YiXiaUM4ZJb2Rs_46yvjZUJrlZ-eQjHqCdFyUmQujWBTYpvzORgBMSfcKT78HHRdP-4es72iLZNctvGv_CFntNPmpK-FNW6CfsO6PzGp5nGHzEdSyjzep1QXdo8_xqhLaJSa2zHfGD44OrrR42CMsf7nvtodBqFns6_tfeqzz6QyWu_rWPU_OysRk20A7IFuFpp1wtRka1JhHW-5waI_A9VjLYpDv-213BmhWtokhSMQ73x8hmDzrm84YXgHDhxJ2oOm8Q&csuir=3
function getCurrentDirectory() {
  const error = new Error();
  Error.captureStackTrace(error);
  const stack = error.stack;

  console.log({ stack});
  const callerLine = stack.split('\n')[2];
  console.log({ callerLine });
  const callerFile = callerLine.slice(callerLine.indexOf('file://')); // match(/file:\/\//)[0];
  console.log({ callerFile });
  const currentDir = `file:${path.dirname(callerFile.split(':')[1])}`; // path.dirname(callerFile);

  console.log({ currentDir });
  return currentDir;
}

const fakeImportMetaUrl = getCurrentDirectory();
const dataUrl = new URL('../../public/data.json', fakeImportMetaUrl);

console.log({ fakeImportMetaUrl, dataUrl });

export function onRequest(context) {
  return new Response(dataUrl.href);
}