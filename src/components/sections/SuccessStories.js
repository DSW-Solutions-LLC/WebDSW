import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SUCCESS_STORIES_DATA } from '../../constants';
import '../../styles/components/SuccessStories.css';

const SuccessStories = () => {
  const scrollRef = useRef(null);

  const scroll = direction => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.story-card')?.offsetWidth || 350;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id='success-stories' className='success-stories section'>
      <div className='container'>
        <div className='stories-header'>
          <h2 className='stories-title'>Casos de Exito</h2>
          <p className='stories-subtitle'>
            Descubri como ayudamos a nuestros clientes a alcanzar sus objetivos.
          </p>
        </div>

        <div className='stories-carousel-wrapper'>
          <button
            className='carousel-btn carousel-btn-left'
            onClick={() => scroll('left')}
            aria-label='Anterior'
          >
            <ChevronLeft size={24} />
          </button>

          <div className='stories-carousel' ref={scrollRef}>
            {SUCCESS_STORIES_DATA.map(story => (
              <div key={story.id} className='story-card'>
                <div className='story-image-placeholder'>
                  <span className='story-category'>{story.category}</span>
                </div>
                <div className='story-content'>
                  <h3 className='story-title'>{story.title}</h3>
                  <p className='story-description'>{story.description}</p>
                  <a href={story.link} className='story-link'>
                    Leer mas <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            className='carousel-btn carousel-btn-right'
            onClick={() => scroll('right')}
            aria-label='Siguiente'
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
