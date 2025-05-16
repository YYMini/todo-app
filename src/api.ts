const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
export async function fetchCoinHistory(coinId: string) {
  const response = await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch chart data");
  }
  const result = await response.json();
  if (!Array.isArray(result)) {
    console.warn(" 응답이 배열이 아님:", result);
    throw new Error("Unexpected chart data format");
  }

  return result;
}
