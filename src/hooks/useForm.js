import { useState, useCallback } from 'react';
import { validateEmail, validateRequired } from '../utils';

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    e => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: '',
        }));
      }
    },
    [errors]
  );

  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'email':
        return validateEmail(value) ? '' : 'Email inválido';
      case 'firstName':
      case 'lastName':
      case 'message':
        return validateRequired(value) ? '' : 'Este campo es requerido';
      default:
        return '';
    }
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  const handleSubmit = useCallback(
    async onSubmit => {
      if (!validateForm()) {
        return false;
      }

      setIsSubmitting(true);
      try {
        await onSubmit(formData);
        setFormData(initialState);
        setErrors({});
        return true;
      } catch (error) {
        // Handle error silently or log to error service
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, initialState]
  );

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setIsSubmitting(false);
  }, [initialState]);

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    validateField,
  };
};
