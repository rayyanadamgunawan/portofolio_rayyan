import React, { useContext } from 'react';
import { LangContext } from '../contexts/LangContext';

const Achievements = () => {
  const { t } = useContext(LangContext);
  return <div className="page-content"><h1>{t('achievements')}</h1><p>My certificates and awards.</p></div>;
};

export default Achievements;
