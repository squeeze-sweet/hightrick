import styles from './input.module.css';
import { Input } from 'antd';
const { TextArea } = Input;

export default function CustomTextarea({
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className={styles.withError}>
      <TextArea
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
