import styles from './input.module.css';
import { Input } from 'antd';

export default function CustomInput({
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className={styles.withError}>
      <Input
        className={styles.fontClass}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        style={{ borderColor: error ? 'red' : undefined }}
      />
      {
        <div
          style={{ color: error ? 'red' : undefined }}
          className={styles.errorText}
        >
          {error}
        </div>
      }
    </div>
  );
}
