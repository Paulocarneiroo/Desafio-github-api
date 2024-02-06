import "./styles.css";

type Props = {
  field: string;
  value: any;
  hasLink?: boolean;
};

const ProfileField = ({ field, value, hasLink }: Props) => {
  return (
    <div className="profile-fields-container">
      <p className="field-title">{field}</p>
      {hasLink ? (
        <a href={value} target="_blank" rel="noreferrer">
          <p className="field-result text-primary">{value}</p>
        </a>
      ) : (
        <p className="field-result">{value}</p>
      )}
    </div>
  );
};

export default ProfileField;