"use client";
import {useCallback, useState} from "react";
import {FieldValues, useForm} from "react-hook-form";

const AuthForm = () => {
    type Variant = 'LOGIN' | 'REGISTER';
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    return (
        <div>
            AuthForm
        </div>
    )
}

export default AuthForm;