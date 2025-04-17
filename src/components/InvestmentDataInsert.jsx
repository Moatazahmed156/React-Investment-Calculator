import UserInput from "./UserInput";

export default function InvestmentDataInsert({ handleChange, userInput }) {
  return (
    <div className="min-w-[45rem] p-12 flex flex-col gap-[1.5rem] rounded-lg bg-gradient-to-b from-[#307e6c] to-[#2b996d]">
      <div className="flex justify-evenly gap-[2.5rem]">
        <UserInput
          label="Initial Investment"
          identifier="initialInvestment"
          onChangeValue={handleChange}
          value={userInput.initialInvestment}
        />
        <UserInput
          label="Annual Investment"
          identifier="annualInvestment"
          onChangeValue={handleChange}
          value={userInput.annualInvestment}
        />
      </div>
      <div className="flex justify-evenly gap-[2.5rem]">
        <UserInput
          label="Expected Return"
          identifier="expectedReturn"
          onChangeValue={handleChange}
          value={userInput.expectedReturn}
        />
        <UserInput
          label="Duration"
          identifier="duration"
          onChangeValue={handleChange}
          value={userInput.duration}
        />
      </div>
    </div>
  );
}
