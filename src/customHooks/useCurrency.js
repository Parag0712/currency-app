import { useEffect, useState } from "react";
function useCurrency(currency) {
        const [data, setData] = useState()
        useEffect(() => {
                fetch(`https://v6.exchangerate-api.com/v6/098584f1497d7449adc4d3d3/latest/${currency}`)
                        .then((res) => res.json())
                        .then((res) => setData(res.conversion_rates))
        }, [currency])
        console.log(data);
        return data;
}
export default useCurrency;
