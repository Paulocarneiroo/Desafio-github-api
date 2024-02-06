import { useState } from "react";
import "./styles.css";
import { GithubData } from "../../type/githubdata";
import axios from "axios";
import Navbar from "../../components/NavBar";
import Button from "../../components/Button";
import ProfileLoader from "./ProfileLoader";
import ShowProfile from "./ShowProfile";

export type FormData = {
  username: "";
};

const Profile = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
  });

  const [githubData, setGithubData] = useState<GithubData>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setGithubData(response.data);
      })
      .catch((errors) => {
        setGithubData(undefined);
        console.log(errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="profile-main-container">
        <div className="profile-card">
          <form className="profile-form" onSubmit={HandleSubmit}>
            <h1>Encontre um perfil Github</h1>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Usuário Github"
              value={formData.username}
              onChange={handleChange}
            />
            <Button             title="Encontrar" />
          </form>
        </div>
        {isLoading ? (
          <ProfileLoader />
        ) : (
          <div>{githubData && <ShowProfile github={githubData} />}</div>
        )}
      </div>
    </>
  );
};

export default Profile;