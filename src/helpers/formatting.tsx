

export const formatNumber= (v: number, decimal = 0) =>{
    return v.toLocaleString("en-US", {minimumFractionDigits: decimal,maximumFractionDigits:decimal})
}


export const formatPerc= (v: number, decimal = 0) =>{
    return (v*100).toLocaleString("en-US", {minimumFractionDigits: decimal,maximumFractionDigits:decimal}) + "%"
}

export const formatCurrency= (v: number, decimal = 2) =>{
    return "$"+v.toLocaleString("en-US", {minimumFractionDigits: decimal,maximumFractionDigits:decimal})
}