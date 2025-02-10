import React, {FC} from 'react';

interface Props {
    className? : string;
    loading ? : boolean;
    variant? : 'point' | 'basic';
}
const AuthButton:FC<Props> = ({variant, loading , className , text , disabled , onClick}) => {

    const getButtonStyle = () => {
        switch (variant) {
            case 'point':
                return 'bg-txt-point text-white';
            case 'basic':
                return 'bg-white text-txt-01 font-semibold';
            default:
                return 'bg-white text-txt-01 font-semibold';
        }
    }

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${getButtonStyle()} text-14 xl:text-16 shadow rounded-full w-[140px] xl:w-[172px] py-2.5 text-center ${className} active:shadow-none`}>
            {text}
        </button>
    );
};

export default AuthButton;