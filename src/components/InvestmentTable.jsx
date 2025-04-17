import {
  calculateInvestmentResults,
  formatter,
} from "../utilities/Investment.jsx";
export default function InvestmentTable({ Input }) {
  const resultData = calculateInvestmentResults(Input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table className="min-w-[45rem] my-6 p-4 table-fixed border-spacing-8 text-left">
      <thead className="text-md text-[#83e6c0] ">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Insert (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="font-[sans-serif] text-[#c2e9e0]">
        {resultData.map((e) => {
          const totalInterest =
            e.valueEndOfYear - e.annualInvestment * e.year - initialInvestment;
          const totalAmountInvested = e.valueEndOfYear - totalInterest;
          return (
            <tr key={e.year}>
              <td>{e.year}</td>
              <td>{formatter.format(e.valueEndOfYear)}</td>
              <td>{formatter.format(e.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
