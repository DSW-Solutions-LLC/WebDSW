import { STATS_DATA, COMPANY_INFO } from '../../constants';
import { useCountUp } from '../../hooks/useCountUp';
import '../../styles/components/Stats.css';

const StatItem = ({ stat }) => {
  const { count, elementRef } = useCountUp(stat.value);

  return (
    <div className='stat-item' ref={elementRef}>
      <span className='stat-number'>
        {count}
        {stat.suffix}
      </span>
      <div className='stat-accent-line' />
      <span className='stat-label'>{stat.label}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <section id='stats' className='stats section'>
      <div className='container'>
        <p className='stats-motto'>{COMPANY_INFO.motto}</p>
        <div className='stats-grid'>
          {STATS_DATA.map(stat => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
