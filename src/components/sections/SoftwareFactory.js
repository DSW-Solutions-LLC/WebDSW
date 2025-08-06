import { Users, Code, Zap, Target } from 'lucide-react';
import '../../styles/components/SoftwareFactory.css';

const SoftwareFactory = () => {
  return (
    <section className='software-factory section'>
      <div className='container'>
        <div className='software-factory-content'>
          <div className='software-factory-text'>
            <h2 className='software-factory-title'>
              Software Factory que crea soluciones tecnológicas innovadoras
            </h2>
            <p className='software-factory-description'>
              Nuestro equipo está formado por expertos apasionados que combinan
              creatividad y tecnología para entregar soluciones que transforman
              negocios.
            </p>

            <div className='software-factory-features'>
              <div className='feature-item'>
                <Users className='feature-icon' />
                <div className='feature-content'>
                  <h4>Equipo Experto</h4>
                  <p>
                    Desarrolladores, diseñadores y especialistas con años de
                    experiencia
                  </p>
                </div>
              </div>

              <div className='feature-item'>
                <Code className='feature-icon' />
                <div className='feature-content'>
                  <h4>Tecnologías Modernas</h4>
                  <p>
                    Utilizamos las últimas tecnologías y frameworks del mercado
                  </p>
                </div>
              </div>

              <div className='feature-item'>
                <Zap className='feature-icon' />
                <div className='feature-content'>
                  <h4>Desarrollo Ágil</h4>
                  <p>Metodologías ágiles para entregas rápidas y eficientes</p>
                </div>
              </div>

              <div className='feature-item'>
                <Target className='feature-icon' />
                <div className='feature-content'>
                  <h4>Soluciones a Medida</h4>
                  <p>
                    Cada proyecto se adapta a las necesidades específicas del
                    cliente
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='software-factory-visual'>
            <div className='office-scene'>
              <div className='office-background'>
                <div className='monitor-stack'>
                  <div className='monitor monitor-1'>
                    <div className='screen'>
                      <div className='code-lines'>
                        <span className='code-line'>
                          function createApp() {'{'}
                        </span>
                        <span className='code-line'> return new Vue({'{'}</span>
                        <span className='code-line'> el: &apos;#app&apos;</span>
                        <span className='code-line'> {'}'});</span>
                        <span className='code-line'>{'}'}</span>
                      </div>
                    </div>
                  </div>
                  <div className='monitor monitor-2'>
                    <div className='screen'>
                      <div className='code-lines'>
                        <span className='code-line'>
                          const app = createApp();
                        </span>
                        <span className='code-line'>
                          app.mount(&apos;#app&apos;);
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='person-silhouette'>
                  <div className='head' />
                  <div className='body' />
                  <div className='arms' />
                </div>

                <div className='desk'>
                  <div className='keyboard' />
                  <div className='mouse' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareFactory;
