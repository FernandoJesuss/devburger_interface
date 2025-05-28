import { Controller, useForm } from "react-hook-form"
import { Image } from "@phosphor-icons/react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from "../../../services/api"
import { Container, ErrorMessage, SubmitButton, Form, InputGroup, Label, Input, LabelUpload, Select } from "./styles"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"



const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    price: yup.number().positive("O preço deve ser um número positivo").required("Preço é obrigatório").typeError("Preço é obrigatório"),
    category: yup.object().required("Categoria é obrigatória"),
    file: yup
    .mixed()
    .test("required", "Um arquivo deve ser selecionado", (value) => {
        return value && value.length > 0;
    })

    .test("fileSize", "Carregue arquivo até 3mb", (value) => {
        return value && value.length > 0 && value[0].size  <= 3 * 1024 * 1024; 
    })

    
    .test("type", "Carregue apenas imagens PNG ou JPEG", (value) => {
        return value && value.length > 0 && (value[0].type === "image/jpeg" || value[0].type === "image/png")
        
    }),
}).required();


export function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");

            setCategories(data);
        }

        loadCategories();
    }, []);




    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const productFormData = new FormData();

        productFormData.append("name", data.name);
        productFormData.append("price", data.price * 100);
        productFormData.append("category_id", data.category.id);
        productFormData.append("file", data.file[0]);

        try {
            await toast.promise(api.post("/products", productFormData), {
                pending: "Adicionando o produto...",
                success: "Produto criado com sucesso",
                error: "Falha ao adicionar o produto, tente novamente",
            });
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            toast.error("Ocorreu um erro ao adicionar o produto. Verifique os dados e tente novamente.");
        }
    };
    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome do Produto</Label>
                    <Input type="text"  {...register("name")} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number"  {...register("price")} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input
                            type="file"
                            {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value?.target?.files[0]?.name);
                                register("file").onChange(value);
                            }}
                        />
                        {fileName || "Upload do Produto"}

                    </LabelUpload>
                     <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={({field}) => (
                            <Select
                            {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Selecione uma categoria"
                                menuPortalTarget={document.body}
                            />
                        )}
                    />
                     <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
}