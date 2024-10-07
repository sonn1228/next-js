import provinces from '@/data/provinces.json';

export function GET() {
    const sortedProvinces = provinces.sort((a, b) => a.phone_code - b.phone_code);

    return new Response(JSON.stringify({
        code: 200,
        data: sortedProvinces
    }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
