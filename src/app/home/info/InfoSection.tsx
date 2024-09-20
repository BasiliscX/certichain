import MoreInfo from "./MoreInfo";
import Student from "./Student";
import Teacher from "./Teacher";
import Web3SBT from "./Web3SBT";

export default function InfoSection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Teacher />
      <Student />
      <Web3SBT />
      <MoreInfo />
    </div>
  );
}
