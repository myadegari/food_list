
export default function CardOption({optionName="optionName",optionId}) {
  return (
    <div>
      <label>
        <input type="radio" name={optionId} />
        {optionName}
      </label>
    </div>
  );
}
