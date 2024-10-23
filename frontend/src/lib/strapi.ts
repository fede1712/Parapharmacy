const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export function query(url: string) {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}`, "Cache-Control": "no-store" },
  }).then((res) => res.json());
}