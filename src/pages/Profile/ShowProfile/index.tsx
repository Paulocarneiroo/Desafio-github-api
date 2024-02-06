import { useState } from "react";
import "./styles.css";
import { GithubData } from "../../../type/githubdata";
import ProfileField from "./ProfileField";

type githubData = {
  github : GithubData
}

const ShowProfile = ({ github } : githubData) => {

  return (
    <div className="show-profile-container">
      <div className="show-profile-img-container">
        <img
          src={github.avatar_url}
          alt={github.name}
        />
      </div>
      <div className="show-profile-infos">
        <h6 className="text-primary">Informações</h6>
        <ProfileField field="Perfil:" value={github.html_url} hasLink={true} />
        <ProfileField field="Seguidores:" value={github.followers} />
        <ProfileField field="Localidade:" value={github.location} />
        <ProfileField field="Nome:" value={github.name} />
      </div>
    </div>
  );
};

export default ShowProfile;