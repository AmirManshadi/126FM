import classes from "@/styles/channel-content.module.css";
import type { Channel } from "@/types";
import AnimatedText from "./AnimatedText";
import Conversation from "./Conversation";

type Props = Channel;

const ChannelContent = (props: Props) => {
  const { id, content = [] } = props;

  if (!content.length) return null;

  const isConversation = content.length > 1;

  const renderConversation = () => {
    return <Conversation dialogues={content} />;
  };

  const renderSingleText = () => {
    return <AnimatedText text={content[0].text} />;
  };

  return (
    <div
      key={id}
      className={classes.root}
    >
      {isConversation ? renderConversation() : renderSingleText()}
    </div>
  );
};

export default ChannelContent;
