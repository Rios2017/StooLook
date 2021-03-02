import styles from '../style/components/CompletedChallenges.module.css';
import { useContext } from 'react';
import { ChallengesContext } from './../contexts/ChallengesContext';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedCompletedChallenges}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}