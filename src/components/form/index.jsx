import { Modal } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import styles from './form.module.css';
import CustomInput from '../input';
import CustomTextArea from '../textarea';

export default function Form({ isModalOpen, setIsModalOpen }) {
  const [values, setValues] = useState({
    name: '',
    contact: '',
    email: '',
    additionalData: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    email: '',
    additionalData: '',
  });

  useEffect(() => {
    if (isModalOpen) {
      setValues({
        name: '',
        contact: '',
        email: '',
        additionalData: '',
      });
      setErrors({
        name: '',
        contact: '',
        email: '',
        additionalData: '',
      });
    }
  }, [isModalOpen]);

  const handleOk = useCallback(() => {
    // Валидация при клике на кнопку "Отправить"
    const newErrors = {
      name: values.name ? '' : 'Введите Ваше имя!',
      contact: values.contact ? '' : 'Введите Ваш номер телефона!',
      email: values.email ? '' : 'Введите Ваш email!',
      additionalData: '',
    };
    setErrors(newErrors);

    // Проверка на наличие ошибок перед отправкой формы
    if (Object.values(newErrors).some((error) => error)) {
      return; // Возврат из функции обработчика, если есть ошибки
    }

    // Отправка POST запроса
    const endpoint = process.env.REACT_APP_API_ENDPOINT; // Замените на вашу переменную окружения с эндпоинтом
    const formData = { ...values };

    axios
      .post(endpoint, formData)
      .then((response) => {
        // Обработка успешного ответа
        setIsModalOpen(false);
      })
      .catch((error) => {
        // Обработка ошибки
        setIsModalOpen(false);
        console.error(error);
      });
  }, [
    setIsModalOpen,
    values.name,
    values.contact,
    values.email,
    values.additionalData,
  ]);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleInputChange = useCallback(
    (event) => {
      // Лайв-валидация при изменении значений полей
      const { name, value } = event.target;

      const getError = (name) => {
        switch (name) {
          case 'name':
            return 'Введите Ваше имя!';
          case 'contact':
            return 'Введите Ваш номер телефона!';
          case 'email':
            return 'Введите Ваш email!';
          default:
            return '';
        }
      };

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value ? '' : getError(name),
      }));

      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    },
    [errors.name, errors.email, errors.contact]
  );

  const nameError = useMemo(() => errors.name, [errors.name]);
  const contactError = useMemo(() => errors.contact, [errors.contact]);
  const emailError = useMemo(() => errors.email, [errors.email]);

  return (
    <Modal
      position="center"
      title="Записаться на тренировку"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Отправить"
      cancelText="Отмена"
      className={styles.fontClass}
      okButtonProps={{ className: styles.okButton }}
      cancelButtonProps={{ className: styles.fontClass }}
    >
      <div className={styles.formContent}>
        <CustomInput
          className={styles.fontClass}
          value={values.name}
          error={nameError}
          placeholder="Ваше имя"
          name="name"
          onChange={handleInputChange}
          style={{ borderColor: values.name ? 'red' : undefined }}
        />

        <CustomInput
          className={styles.fontClass}
          value={values.contact}
          error={contactError}
          placeholder="Номер для связи"
          name="contact"
          onChange={handleInputChange}
          style={{ borderColor: values.contact ? 'red' : undefined }}
        />

        <CustomInput
          className={styles.fontClass}
          value={values.email}
          error={emailError}
          placeholder="Почта"
          name="email"
          onChange={handleInputChange}
          style={{ borderColor: values.email ? 'red' : undefined }}
        />

        <CustomTextArea
          className={styles.fontClass}
          value={values.additionalData}
          placeholder="Дополнительные данные"
          name="additionalData"
          onChange={handleInputChange}
        />
      </div>
    </Modal>
  );
}
