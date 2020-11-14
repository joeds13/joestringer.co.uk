import styled from "styled-components";

const BackgroundImageStyle = styled.div`
  margin-bottom: 5px;
  height: 300px;
  background-image: url("https://images.prismic.io/joestringer/4cbc5d6d-9873-470f-8b6f-bb7a673d4f3d_background-63bd90ab.png?auto=compress,format");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;
`;

const BackgroundImage = () => {
  return <BackgroundImageStyle />;
};

export default BackgroundImage;
