/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";


type TFormConfig = {
    resolver?: any
}


type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode,
    resolver: TFormConfig
}


const PHForm = ({ onSubmit, children, resolver }: TFormProps) => {

    const formConfig: TFormConfig = {};

    if (resolver) {
        formConfig['resolver'] = resolver;
    }

    const methods = useForm(formConfig);

    return (
        <FormProvider {...methods}>
            <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
                {children}
            </Form>
        </FormProvider>
    )
}

export default PHForm