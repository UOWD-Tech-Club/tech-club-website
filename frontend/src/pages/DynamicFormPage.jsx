import PropTypes from 'prop-types';


const DynamicFormPage = ({ formLink }) => {

  return (
    <section style={{ paddingTop: '130px' }}> 
      <div>
        <iframe
          title="Dynamic Form"
          src={formLink}
          frameBorder="0"
          style={{ width: '100%', height: '100vh' }}
        />
      </div>
    </section>
  );
};

DynamicFormPage.propTypes = {
  formLink: PropTypes.string.isRequired,
};

export default DynamicFormPage;
