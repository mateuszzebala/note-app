import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function Home() {

  return (
    <>
        <Input label="Title"/>
        <br/><br/>
        <Input label="Content" textarea/>
        <br/><br/>
        <Button>CREATE</Button>
    </>
  );
};
export default Home;

