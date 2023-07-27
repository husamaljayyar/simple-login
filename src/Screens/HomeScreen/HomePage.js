import { InnerSection, Typography } from "../../App.Styles";
import { useSelector } from "react-redux";
import { Card } from "../../Components/CardItem/CardItem";
import { Contanier } from "./HomePage.Styles";

export default function HomePage() {
  const user = useSelector((state) => state.user.email);
  return (
    <InnerSection>
      <Typography fontSize={25} fontWeight={600} color={"#000"}>
        welcome {user}
      </Typography>

      <Contanier>
        <Card />
      </Contanier>
    </InnerSection>
  );
}
