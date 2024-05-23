import ExpandableText from "../components/ExpandableText";
import Onboarding from "../components/Onboarding";
import TermsAndConditions from "../components/TermsAndConditions";

const PlaygroundPage = () => {
  return (
    <>
      <Onboarding />
      <TermsAndConditions />
      <ExpandableText text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam cumque mollitia doloremque explicabo sint unde harum quae nobis, nostrum rem labore esse assumenda. Laudantium perferendis velit optio, repellat cupiditate enim.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, excepturi modi? Fuga ratione labore maiores voluptatem esse sapiente fugit quod cumque itaque perspiciatis! Saepe animi illo at dolor, asperiores id!" />
    </>
  );
};

export default PlaygroundPage;
