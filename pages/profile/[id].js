import axios from 'axios';

function Profile({produto = {}}){
    return <div>
        <img src={produto.image}/>
        <p>{produto.title}</p>
        <p>Valor: ${produto.price}</p>
        <p>Descrição: {produto.description}</p>
        <p>Categoria: {produto.category}</p>
        <p>Estrelas: {produto.rating.rate} Avaliações: {produto.rating.count}</p>
    </div>
}

export async function getStaticProps(context) {
    const response = await axios.get(
    ' https://fakestoreapi.com/products/' + context.params.id
    );
    const produto = await response.data;

    return {
        props: {produto},
    }
}

export async function getStaticPaths() {
    const response = await axios.get(
        ' https://fakestoreapi.com/products',
        );
    const produtos = await response.data;
    const paths = produtos.map((produto) => {
        return {params:{id:String(produto.id)}};
    });
    return {
        paths,
        fallback: true,
    };
}

export default Profile;