import { FORM_FIELDS } from '../../constants';
import { useForm } from '../../hooks/useForm';
import { classNames } from '../../utils';
import '../../styles/components/Contact.css';

const Contact = () => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useForm({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });

  const onSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const renderFormField = field => {
    return (
      <div key={field.id} className='form-group'>
        {field.type === 'textarea' ? (
          <textarea
            id={field.id}
            name={field.id}
            value={formData[field.id] || ''}
            onChange={handleChange}
            className={classNames('form-textarea', errors[field.id] && 'error')}
            placeholder={field.label}
            rows='5'
            required={field.required}
          />
        ) : (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            value={formData[field.id] || ''}
            onChange={handleChange}
            className={classNames('form-input', errors[field.id] && 'error')}
            placeholder={field.label}
            required={field.required}
          />
        )}
        {errors[field.id] && (
          <span className='error-message'>{errors[field.id]}</span>
        )}
      </div>
    );
  };

  const renderFormRow = () => {
    const rowFields = FORM_FIELDS.filter(
      field => field.id === 'firstName' || field.id === 'lastName'
    );

    return <div className='form-row'>{rowFields.map(renderFormField)}</div>;
  };

  const renderFormFields = () => {
    const remainingFields = FORM_FIELDS.filter(
      field => field.id !== 'firstName' && field.id !== 'lastName'
    );

    return remainingFields.map(renderFormField);
  };

  return (
    <section id='contact' className='contact section'>
      <div className='container'>
        <div className='contact-content'>
          <div className='contact-form-container'>
            <h2 className='contact-title'>Contactanos</h2>
            <p className='contact-description'>
              Estamos aqui para ayudarte. Completa el formulario y nos pondremos
              en contacto contigo lo antes posible.
            </p>

            <form
              className='contact-form'
              onSubmit={e => {
                e.preventDefault();
                handleSubmit(onSubmit);
              }}
            >
              {renderFormRow()}
              {renderFormFields()}

              <button
                type='submit'
                className='submit-btn'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
