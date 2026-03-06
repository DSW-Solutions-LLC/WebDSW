import { useState } from 'react';
import { FORM_FIELDS } from '../../constants';
import { useForm } from '../../hooks/useForm';
import { classNames } from '../../utils';
import { contactService } from '../../services/api';
import '../../styles/components/Contact.css';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [submitError, setSubmitError] = useState('');

  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useForm({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });

  const onSubmit = async data => {
    setSubmitStatus(null);
    setSubmitError('');

    let handled = false;
    try {
      const response = await contactService.send({
        name: `${data.firstName} ${data.lastName}`.trim(),
        email: data.email,
        message: data.message,
      });

      if (response.ok) {
        setSubmitStatus('success');
        return;
      }

      let errorMsg = 'Error al enviar el mensaje. Intentá de nuevo más tarde.';
      if (response.status === 400) {
        const body = await response.json();
        errorMsg = Object.values(body.errors || {})[0]?.[0] || 'Datos inválidos. Revisá los campos.';
      }

      handled = true;
      setSubmitStatus('error');
      setSubmitError(errorMsg);
      throw new Error(errorMsg);
    } catch (err) {
      if (!handled) {
        setSubmitStatus('error');
        setSubmitError('Error de conexión. Revisá tu internet e intentá de nuevo.');
      }
      throw err;
    }
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
                disabled={isSubmitting || submitStatus === 'success'}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {submitStatus === 'success' && (
                <p className='form-feedback form-feedback--success'>
                  ¡Mensaje enviado! Te responderemos a la brevedad.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className='form-feedback form-feedback--error'>
                  {submitError}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
