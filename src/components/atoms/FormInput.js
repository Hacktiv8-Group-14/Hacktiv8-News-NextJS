import PropTypes from 'prop-types'

function FormInput (props) {
    const {type, id, placeholder, className, onChange, ...rest} = props


return (
    <div>
        <input
            type={type}
            id={id}
            className={`w-full ${className}`}
            placeholder={placeholder}
            onChange={onChange}
            {...rest}
        />
    </div>
)

}
 
FormInput.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string
}

FormInput.defaultProps = {
    type : 'text',
    id: '',
    className: '',
    placeholder: 'search...'
}

export default FormInput