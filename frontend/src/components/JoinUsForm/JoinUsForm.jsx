import styles from './JoinUsForm.module.css';

const JoinUsForm = () => {
  return (
    <section className={styles.form}>
        <div className={styles.joinUsFormContainer}>
            <iframe
            title="Join Us Form"
            src="https://form.jotform.com/241484020996460"
            frameBorder="0"
            style={{ width: '100%', height: '100vh'}}
            />
        </div>
    </section>
  );
};

export default JoinUsForm;
