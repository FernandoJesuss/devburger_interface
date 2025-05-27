import { useForm } from "react-hook-form"
import { Image } from "@phosphor-icons/react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Container, SubmitButton, Form, InputGroup, Label, Input, LabelUpload, Select } from "./styles"

const schema = yup
    .object({
        firstName: yup.string().required(),
        age: yup.number().positive().integer().required(),
    })
    .required()



export function NewProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)
    return (
        <Container>
            <Form>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input type="file" />
                    </LabelUpload>
                </InputGroup>

                <InputGroup>
                <Label>Categoria</Label>
                <Select />
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
}