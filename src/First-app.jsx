import PropTypes from 'prop-types'

export const FirstApp = ({ 
    title= 'no hay titulo',
    subTitle= 'no hay subtitulo',
    name= 'cristobal' }) => {

    if( !title ) {
        throw new Error('el title no existe')
    }
   
    return (
            <>
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <p>{name}</p>
            </>
    )
}

FirstApp.propTypes = {
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string
}

