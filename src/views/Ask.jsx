import InstructionAsk from "../components/InstructionAsk";
import Replies from "../components/Replies";
import SendQuestion from "../components/SendQuestion";

function Ask() {
    return (
        <>
            <InstructionAsk />
            <SendQuestion />
            <Replies />
        </>
    );
}

export default Ask;