import { FormEvent, useEffect, useState } from 'react';

import api from '../../services/api';

import { Modal } from 'antd';


import { FiEdit, FiPlus, FiRefreshCw, FiTrash, FiList } from 'react-icons/fi';

import Input from '../../components/Input';
import Nav from '../../components/Nav';
import {
  Container,
  Menu,
  WorkSpace,
  Main,
  EmployeeData,
} from './styles';

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
  const [position, setPosition] = useState('');
  const [employees, setEmployees] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
    setPosition('');
  }

  const getEmployees = async () => {

    const response = await api.get('/employee', {
      params: {
        name,
        bornDate,
        salary,
        position
      }
    });

    setEmployees(response.data);
  }

  useEffect(() => {
    getEmployees();
  }, [employees])

  const handleDeleteEmployee = async (id: number) => {
    await api.delete(`/employee/${id}`);
    handleOk();
  }


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
              onChange={(e) => setPosition(e.target.value)}
            />

            <button type="submit">
              <FiPlus />
            </button>

            <button onClick={getEmployees}>
              <FiList />
            </button>

            <button onClick={getEmployees}>
              <FiRefreshCw />
            </button>

          </form>
        </Main>

        <table>
          <tbody>
            <tr>
              <td className="headerTable">Nome</td>
              <td className="headerTable">Data Nascimento</td>
              <td className="headerTable">Salário</td>
              <td className="headerTable">Posição</td>
              <td className="headerTable" />
            </tr>
          </tbody>
        </table>

        {employees.length > 0 && (
          <>
            {employees.map((employee: Employee) => {
              return (
                <EmployeeData key={employee.id}>

                  <table>
                    <tbody>
                      <tr>
                        <td className="headerTableData"><span>{employee.name}</span></td>
                        <td className="headerTableData"><span>{employee.bornDate}</span></td>
                        <td className="headerTableData"><span>R$ {employee.salary}</span></td>
                        <td className="headerTableData"><span>{employee.position}</span></td>
                        <td className="headerTableData">
                          <button >
                            <FiEdit />
                          </button>

                          <>
                            <button onClick={showModal}>
                              <FiTrash />
                            </button>
                            <Modal title="Excluir funcionário" visible={isModalVisible} onOk={() => handleDeleteEmployee(employee.id)} onCancel={handleCancel}>
                              <p>Tem certeza que deseja excluir?</p>
                            </Modal>
                          </>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </EmployeeData>
              );
            })}
          </>

        )}

      </WorkSpace>
    </Container >
  );
};

export default Home;

