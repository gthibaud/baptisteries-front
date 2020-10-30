import * as React from 'react';
import {FormControl, InputLabel, Select} from "@material-ui/core";
import l from "../constants/locales";

export const FiltresFormSelect = ({selectOptions, label, language, inputProps, initValue, handleChange, className}) => {
    return (
        <FormControl variant="outlined" className={className}>
            <InputLabel htmlFor={inputProps.id}>
                {l(label, language)}
            </InputLabel>
            <Select
                autoWidth={true}
                native
                value={initValue}
                onChange={handleChange}
                label={l(label, language)}
                inputProps={inputProps}
            >
                <option aria-label="None" value=""/>
                {selectOptions.map((optionItem) => (
                    <option key={optionItem} value={optionItem}>
                        {optionItem}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};