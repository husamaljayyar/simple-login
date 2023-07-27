import { Link } from "react-router-dom";
import { Text, NavbarContainer, InnerNav, NavBox } from "./NavBar.Styles";
import { SiPolymerproject } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/User/userActions";

const Narbar = (props) => {
  const user = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <NavbarContainer>
        <InnerNav>
          <NavBox>
            <SiPolymerproject style={{ padding: "0.5rem 0.5rem" }} />
          </NavBox>
          {user ? (
            <Link to={"/"}>
              <Text
                onClick={() => {
                  handleLogOut();
                }}
              >
                logout
              </Text>
            </Link>
          ) : (
            <Link to={"/"}>
              <Text>login</Text>
            </Link>
          )}
        </InnerNav>
      </NavbarContainer>
    </>
  );
};

export default Narbar;
