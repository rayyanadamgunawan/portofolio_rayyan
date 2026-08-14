import React, { useContext } from 'react';
import { LangContext } from '../contexts/LangContext';

const Dashboard = () => {
  const { lang } = useContext(LangContext);
  
  return (
    <div className="page-content dashboard-page">
      <h1 className="section-title">
        {lang === 'id' ? 'Dasbor GitHub' : 'GitHub Dashboard'}
      </h1>
      <p style={{marginBottom: '2rem', color: 'var(--text-muted)'}}>
        {lang === 'id' ? 'Statistik aktivitas open-source saya.' : 'My open-source activity statistics.'}
      </p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=rayyanadamgunawan&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117" 
            alt="GitHub Stats" 
            style={{width: '100%', borderRadius: '8px'}}
          />
        </div>
        <div className="dashboard-card">
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rayyanadamgunawan&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117" 
            alt="Top Languages" 
            style={{width: '100%', borderRadius: '8px'}}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
