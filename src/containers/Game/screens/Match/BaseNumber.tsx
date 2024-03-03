import { MatchBaseNumber } from "./styled";

const BaseNumber = ({ number }: { number: number }) => {
  return (
    <header>
      <MatchBaseNumber variant="h6" component="h3">
        Base Number: {number}
      </MatchBaseNumber>
    </header>
  );
};

export default BaseNumber;
