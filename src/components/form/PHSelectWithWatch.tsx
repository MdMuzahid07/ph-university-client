import { Form, Select } from 'antd'
import { useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';


type TPHSelectProps = {
    label: string,
    name: string,
    options: { value: string, label: string, disabled?: boolean }[] | undefined,
    disabled?: boolean,
    mode?: "multiple" | undefined
}

const PHSelectWithWatch = ({ label, name, options, disabled, mode, onValueChange }: TPHSelectProps) => {
    const { control } = useFormContext();
    const inputValue = useWatch({ control, name });


    useEffect(() => {
        onValueChange(inputValue);
    }, [inputValue]);

    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Form.Item label={label}>
                    <Select
                        mode={mode}
                        style={{ width: "100%" }}
                        {...field}
                        options={options}
                        disabled={disabled}
                        size="large"
                    />
                    {error && <small style={{ color: "red" }}>{error.message}</small>}
                </Form.Item>
            )}
        />
    )
}

export default PHSelectWithWatch;