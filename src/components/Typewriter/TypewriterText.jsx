
import Typewriter from 'react-typewriter-effect';

const TypewriterText = ({ text }) => {
  return (
    <Typewriter
      options={{
        strings: [text],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterText;