import style from '../style/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={style.profileContainer}>
    <img src="https://github.com/Rios2017.png" alt="Felipe Rios"/>
    <div>
      <strong>Felipe Rios</strong>
      <p>
        <img src="icons/level.svg" alt=""/>
          Lavel {level}
      </p>
    </div>
  </div>
  );
}