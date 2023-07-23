import {Button, ValidationContainer, Column, Form, Modal, Row, Textbox, Checkbox} from "@arctrade/relay";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {light, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React, {useMemo, useCallback} from "react";
import "./styles.scss"

const ConfirmPopup = ({fields = [], title, message, show, onConfirm, onCancel}) => {

    const renderFields = useCallback((formContext, valContext) => {
        return fields.map((f, i) => {
            if (f.type === "textbox") {
                return <Column key={i}>
                    <Textbox
                        label={f.label}
                        onMount={valContext.registerInput}
                        onUnmount={valContext.unregisterInput}
                        onValidityChange={valContext.updateValidity}
                        isRequired={f.required}
                        validation={{test: f.required ? 'required' : () => true, message: 'Please enter a value'}}
                        name={f.name}/>
                </Column>
            }
            if (f.type === "checkbox") {
                return <Column key={i}>
                    <Checkbox
                        label={f.label}
                        onMount={valContext.registerInput}
                        onUnmount={valContext.unregisterInput}
                        onValidityChange={valContext.updateValidity}
                        isRequired={f.required}
                        validation={{test: f.required ? 'required' : () => true, message: 'Please enter a value'}}
                        name={f.name}/>
                </Column>
            }

            return "N/A"
        })
    }, [fields])

    const initValues = useMemo(() => {
        return fields.reduce((f, i) => {
            if(i.defaultValue){
                f[i.name] = i.defaultValue
            }
            return f
        }, {})
    },[fields])

    const renderForm = useMemo(() => {
        return <Form initialValues={initValues}>

            {(formContext) => (
                <ValidationContainer>
                    {(valContext) => {
                        console.log("val", valContext)
                        return <React.Fragment>
                            <Column>
                                {renderFields(formContext, valContext)}
                            </Column>
                            <Column>
                                <Button
                                    isDisabled={fields.length> 0 && !valContext.isValid}
                                    isDiscreet size={"lg"} label={"Confirm"} onClick={() => {
                                    onConfirm(formContext, valContext)
                                }}
                                    isFullWidth/>
                            </Column>
                        </React.Fragment>

                    }}
                </ValidationContainer>
            )}
        </Form>

    },[fields,initValues])

    return <Modal maxWidth={"300px"} className={"r-confirm-modal"} noTitleBar show={show}>
        <Row>
            <Column>
                <div className={"r-confirm-modal-icon"}>
                    <FontAwesomeIcon icon={solid("badge-check")}/>
                </div>
            </Column>
            <Column>
                <div className={"r-confirm-modal-title"}>
                    {title}
                </div>
            </Column>
            <Column>
                <div className={"r-confirm-modal-message"}>
                    {message}
                </div>
            </Column>
            {renderForm}

            <Column>
                <a onClick={onCancel}>Cancel</a>
            </Column>
        </Row>
    </Modal>
}

export default ConfirmPopup