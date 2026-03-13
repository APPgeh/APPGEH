export default {
  async fetch(request) {

    const url = new URL(request.url);

    if (url.pathname === "/tnt/index.m3u8") {
      return Response.redirect(
        "https://cdn2embedtvonline.site/NOLJTuyMHstntDGMBgYSh2PP4XJU/index.m3u8",
        302
      );
    }

    return new Response("Canal não encontrado", { status: 404 });
  }
}