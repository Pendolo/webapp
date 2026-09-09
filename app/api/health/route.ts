export async function GET() {
  return Response.json({
    ok: true,
    service: "pendolo-webapp",
  });
}
