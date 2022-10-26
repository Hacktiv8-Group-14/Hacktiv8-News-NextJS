import PropTypes from 'prop-types'

function Button (props) {
    const {onClick, className,type, disabled, children} = props

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    className : PropTypes.string,
    disabled : PropTypes.bool
}

Button.defaultProps = {
    onClick: () => {},
    className: '',
    disabled: false,
    type: ''
}

export default Button