import ContentLoader from "react-content-loader";

const ProfileLoader = () => (
  <div className="profile-loader-container ">
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={400}
      // backgroundColor="transparent"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  </div>
);

export default ProfileLoader;