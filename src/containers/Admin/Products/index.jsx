// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { CheckCircle, Pencil, XCircle } from "@phosphor-icons/react";
// import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

// import { api } from "../../../services/api";
// import { formatPrice } from "../../../utils/formatPrice";
// import { Container, ProductImage, EditButton } from "./styles";


// export function Products() {
//     const [products, setProducts] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         async function loadProducts() {
//             const { data } = await api.get("/products");

//             setProducts(data);

//         }
//         loadProducts();
//     }, []);

//     function isOffer(offer) {
//         if (offer) {
//             return <CheckCircle color="#61A120" size="28" />
//         } else {
//             return <XCircle color="#FF3205" size="28" />
//         }
//     }

//     function editProduct(product) {
//         navigate("/admin/editar-produto", {state: {product}});
//     }

//     return (
//         <Container>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Nome</TableCell>
//                             <TableCell align="center">Preço</TableCell>
//                             <TableCell align="center">Produto em Oferta</TableCell>
//                             <TableCell align="center">Imagem do Produto</TableCell>
//                             <TableCell align="center">Editar Produto</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {products.map((product) => (
//                             <TableRow
//                                 key={product.id}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             >
//                                 <TableCell component="th" scope="row">
//                                     {product.name}
//                                 </TableCell>
//                                 <TableCell align="center">{formatPrice(product.price)}</TableCell>
//                                 <TableCell align="center">{isOffer(product.offer)}</TableCell>
//                                 <TableCell align="center"><ProductImage src={product.url} /></TableCell>
//                                 <TableCell align="center">
//                                     <EditButton onClick={() => editProduct(product)}>
//                                         <Pencil />
//                                     </EditButton>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Container>
//     )
// }


/*depois*/
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CheckCircle, Pencil, XCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from "../../../services/api";
import { formatPrice } from "../../../utils/formatPrice";
import { Container, ProductImage, EditButton, muiTableSx } from "./styles";

export function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get("/products");
            setProducts(data);
        }
        loadProducts();
    }, []);

    function isOffer(offer) {
        return offer
            ? <CheckCircle color="#22C55E" size={24} weight="fill" />
            : <XCircle color="rgba(255,255,255,.2)" size={24} weight="fill" />;
    }

    function editProduct(product) {
        navigate("/admin/editar-produto", { state: { product } });
    }

    return (
        <Container>
            <TableContainer
                component={Paper}
                sx={{
                    background: 'transparent',
                    boxShadow: '0 8px 32px rgba(0,0,0,.4)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,.07)',
                }}
            >
                <Table sx={{ minWidth: 650, ...muiTableSx }} aria-label="products table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Em Oferta</TableCell>
                            <TableCell align="center">Imagem</TableCell>
                            <TableCell align="center">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell align="center">{formatPrice(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center">
                                    <ProductImage src={product.url} alt={product.name} />
                                </TableCell>
                                <TableCell align="center">
                                    <EditButton onClick={() => editProduct(product)}>
                                        <Pencil />
                                    </EditButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}