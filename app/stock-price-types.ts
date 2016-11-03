export class StockPriceResponse {
    status: HttpMessage
    prices: StockPrice[]
}

export class HttpMessage {
    code: number
    message: string
}

export class StockPrice{
    symbol: string
    name: string
    dayCode: string
    serverTimestamp: string
    mode: string
    lastPrice: number
    tradeTimestamp : string
    netChange: number
    percentChange:number
    unitCode: number
    open: number
    high: number
    low: number
    close: number
    numTrades: number
    dollarVolume: number
    flag: string
    volume: number
    previousVolume: number
}

export class StockPriceJsonp{
    symbol: string
    name: string
    dayCode: string
    serverTimestamp: string
    mode: string
    lastPrice: number
    tradeTimestamp : string
    netChange: number
    percentChange:number
    unitCode: string
    open: number
    high: number
    low: number
    close: string
    numTrades: number
    dollarVolume: number
    flag: string
    volume: number
    previousVolume: number
}

