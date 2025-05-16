import styled from "styled-components";

interface PriceProps {
  tickersData?: {
    quotes: {
      USD: {
        price: number;
        percent_change_1h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        market_cap: number;
        volume_24h: number;
      };
    };
  };
}

const PriceBox = styled.div`
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};

  div {
    margin-bottom: 10px;
  }
`;

function Price({ tickersData }: PriceProps) {
  const usd = tickersData?.quotes.USD;

  if (!usd) return <div>가격 데이터를 불러올 수 없습니다.</div>;

  return (
    <PriceBox>
      <div>Price: ${usd.price.toFixed(3)}</div>
      <div>Market Cap: ${usd.market_cap.toLocaleString()}</div>
      <div>Volume (24h): ${usd.volume_24h.toLocaleString()}</div>
      <div>Change (1h): {usd.percent_change_1h}%</div>
      <div>Change (24h): {usd.percent_change_24h}%</div>
      <div>Change (7d): {usd.percent_change_7d}%</div>
      <div>Change (30d): {usd.percent_change_30d}%</div>
    </PriceBox>
  );
}

export default Price;
