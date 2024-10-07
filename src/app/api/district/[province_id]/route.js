export async function GET({ params }) {
    const { province_id } = params;

    return new Response(JSON.stringify({
        code: 200,
        province_id
    }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
