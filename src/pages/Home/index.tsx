/* eslint-disable array-callback-return */
import { FormEvent, useEffect, useState } from 'react';
import api from '../../services/api';

import { FiPlus, FiRefreshCw } from 'react-icons/fi';

import Input from '../../components/Input';
import Nav from '../../components/Nav';
import { Container, Menu, WorkSpace, Main, EmployeeData } from './styles';

export interface Employee {
  id: number;
  name: string;
  bornDate: number;
  salary: number;
  position: string;
}

const Home = () => {
  const [name, setName] = useState('');
  const [bornDate, setBornDate] = useState('');
  const [salary, setSalary] = useState('');
  const [position, setPosicion] = useState('');
  const [employees, setEmployees] = useState([]);

  const handleCreateEmployee = (e: FormEvent) => {
    e.preventDefault();

    api.post('/employee', {
      name,
      bornDate,
      salary,
      position
    }).then(() => {
      alert('Cadastro realizado com Sucesso!')

    }).catch(() => {
      alert('Erro no cadastro.')
    });

    setName('');
    setBornDate('');
    setSalary('');
    setPosicion('');
  }

  const getEmployees = async (e: FormEvent) => {
    e.preventDefault();

    const response = await api.get('/employee', {
      params: {
        name,
        bornDate,
        salary,
        position
      }
    });

    console.log(response.data)

    setEmployees(response.data);
  }

  useEffect(() => {
  }, [employees])

  return (

    <Container>
      <Menu>
        <Nav />

      </Menu>
      <WorkSpace>
        <h1>Funcionários</h1>

        <Main>
          <h2>Preencha os dados:</h2>
          <form onSubmit={handleCreateEmployee}>

            <Input
              required
              name="name"
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              required
              name="data Nascimento"
              label="Data de nascimento"
              value={bornDate}
              onChange={(e) => setBornDate(e.target.value)}
            />
            <Input
              required
              name="Salario"
              label="Salário"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <Input
              required
              name="Posição"
              label="Posição"
              value={position}
              onChange={(e) => setPosicion(e.target.value)}
            />

            <button type="submit">
              <FiPlus />
            </button>

          </form>
        </Main>

        <button onClick={getEmployees}>
          Listar
          </button>

        <button onClick={getEmployees}>
          <FiRefreshCw />
        </button>

        {employees.map((employee: Employee) => {
          return (
            <EmployeeData key={employee.id}>
              <h4>{employee.name}</h4>
              <span>{employee.bornDate}</span>
              <span>{employee.salary}</span>
              <span>{employee.position}</span>
            </EmployeeData>
          );
        })}




      </WorkSpace>
    </Container>
  );
};

export default Home;