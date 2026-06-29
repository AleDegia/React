import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="card">
      <img src="/avatar.jpg" alt="Jonas Schmedtmann" />
      <div className="data">
        <h2>Jonas Schmedtmann</h2>
        <p>
          Full-stack web developer and teacher at Udemy...
        </p>
            <div className="skill-list">
                <Skill text="HTML+CSS 💪"/>
                <Skill text="JavaScript 💪"/>
                <Skill text="Python 💪"/>
            </div>
      </div>
    </div>
  );
}


function Skill(props) {
  return (
    <span className="skill">
        {props.text}
    </span>
  );
}

export default ProfileCard;