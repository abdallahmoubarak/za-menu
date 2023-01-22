import Input from "@/components/Input";
import InputsContainer from "@/components/InputsContainer";

export default function GMBusinesses() {
  return (
    <div>
      <h1>Add Business</h1>
      <InputsContainer>
        <Input name={"Business Name"} value={""} />
      </InputsContainer>
    </div>
  );
}
