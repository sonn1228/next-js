"use client";
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());
const provincesApi = 'http://localhost:3000/api/provinces';

function Page() {
    const { data: provinces, error: provincesError } = useSWR(provincesApi, fetcher);
    const [selectedProvince, setSelectedProvince] = useState('');
    const districtsApi = selectedProvince ? `http://localhost:3000/api/districts?province=${selectedProvince}` : null;
    const { data: districts, error: districtsError } = useSWR(districtsApi, fetcher);

    if (provincesError) return <div>Failed to load provinces</div>;
    if (!provinces) return <div>Loading provinces...</div>;

    const handleProvinceChange = (e) => {
        setSelectedProvince(e.target.value);
    };

    return (
        <>
            <h1>Checkout</h1>
            <select onChange={handleProvinceChange} value={selectedProvince}>
                <option value="">Chọn tỉnh / Thành phố</option>
                {provinces.data.map((province) => (
                    <option key={province.code} value={province.id}>
                        {province.name}
                    </option>
                ))}
            </select>
            <select disabled={!selectedProvince}>
                <option value="">Chọn quận / huyện</option>
                {districtsError && <option value="">Failed to load districts</option>}
                {districts ? (
                    districts.map((district) => (
                        <option key={district.id} value={district.id}>
                            {district.name}
                        </option>
                    ))
                ) : (
                    <option value="">Loading districts...</option>
                )}
            </select>
        </>
    );
}

export default Page;
