import { useNavigate, Link } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleRegister, SubtitleRegister, TermosText, ContaText, Row, Wrapper } from './styles';

const Register = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    // const onSubmit = async (formData) => {
    //     try {
    //         // Fazer uma solicitação POST para criar um novo usuário
    //         const response = await api.post('/users', formData);

    //         if (response.data.id) {
    //             // Usuário cadastrado com sucesso
    //             navigate('/login'); // Redirecionar para a página de login
    //         } else {
    //             alert('Falha ao cadastrar usuário');
    //         }
    //     } catch (error) {
    //         // Tratar erros
    //         console.error('Erro ao cadastrar usuário:', error);
    //         alert('Erro ao cadastrar usuário');
    //     }
    // };
    const onSubmit = async (formData) => {
        try {
            // Validar os dados do formulário
            if (!formData.nome || !formData.email || !formData.senha) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
    
            // Fazer uma solicitação POST para criar um novo usuário
            const response = await api.post('/users', formData);
    
            if (response.data.id) {
                // Usuário cadastrado com sucesso
                navigate('/login'); // Redirecionar para a página de login
            } else {
                alert('Falha ao cadastrar usuário');
            }
        } catch (error) {
            // Tratar erros
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário');
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleRegister>Comece agora grátis</TitleRegister>
                <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={ <FaUser />} name="nome" control={control}/>
                    {errors.nome && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Column>
                    <TermosText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermosText>
                    <Row>
                        Já tenho conta. <ContaText><Link to="/login" style={{ color: '#23DD7A', textDecoration: 'none' }}>Fazer login</Link></ContaText>
                    </Row>
                </Column>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }