interface Env {
  PRESENTATIONS: R2Bucket;
}

const MAX_BYTES = 256 * 1024;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const match = url.pathname.match(/^\/p\/([A-Za-z0-9_-]{16,64})$/);

    if (request.method === "POST" && url.pathname === "/p") {
      const body = await request.arrayBuffer();
      if (body.byteLength > MAX_BYTES) return new Response("Too large", { status: 413 });
      const id = crypto.randomUUID().replaceAll("-", "");
      await env.PRESENTATIONS.put(id, body);
      return Response.json({ id }, { status: 201 });
    }

    if (request.method === "GET" && match) {
      const object = await env.PRESENTATIONS.get(match[1]);
      if (!object) return new Response("Not found", { status: 404 });
      return new Response(object.body, { headers: { "content-type": "application/octet-stream" } });
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
