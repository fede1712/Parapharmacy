const { NEXT_PUBLIC_STRAPI_HOST, STRAPI_TOKEN } = process.env;

export function query(url: string) {
  return fetch(`${NEXT_PUBLIC_STRAPI_HOST}/api/${url}`, {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}`, "Cache-Control": "no-store" },
  }).then((res) => res.json());
}
