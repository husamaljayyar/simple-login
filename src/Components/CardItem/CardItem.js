import {
  Cards,
  ImageCard,
  InnerCard,
  TitleCard,
  Paragraph,
} from "./CardItem.Styles";
import Image1 from "../../Assets/Image1.jpg";
import Image2 from "../../Assets/Image2.jpg";
import Image3 from "../../Assets/Image3.jpg";
import Image4 from "../../Assets/Image4.jpg";


export const Card = (props) => {

  let data = [
    {
      id: 1,
      image: Image1,
      titile: "Image ",
      discrapction: "The object is the main focus surrounding environment",
    },
    {
      id: 2,
      image: Image2,
      titile: "Image Title",
      discrapction: "The object is the main focus surrounding environment",
    },
    {
      id: 3,
      image: Image3,
      titile: "Image Title",
      discrapction: "The object is the main focus surrounding environment",
    },
    {
      id: 4,
      image: Image4,
      titile: "Image Title",
      discrapction: "The object is the main focus surrounding environment",
    },
  ];

  console.log(data)
  
  return (
    <>
      {data.map((item) => (
        <Cards key={item.id}>
          <ImageCard src={item.image} alt="img" />
          <InnerCard>
            <TitleCard>{item.titile}</TitleCard>
            <Paragraph>{item.discrapction} </Paragraph>
          </InnerCard>
        </Cards> 
      ))}
    </>
  );
};
 