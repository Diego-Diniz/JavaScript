// slice - divide array

const alunos = [
    'Ana',
    'João',
    'Maria',
    'Pedro',
    'Mariana',
    'Lucas',
    'Julia',
    'Gustavo',
    'Camila',
    'Matheus',
    'Isabela',
    'Rafael',
    'Larissa',
    'Daniel',
    'Sophia',
    'André',
    'Lara',
    'Gabriel',
    'Carolina',
    'Eduardo'
  ];
  

  const sala1 = alunos.slice(0, alunos.length / 2);

  console.log(sala1);

  const sala2 = alunos.slice(alunos.length / 2);

  console.log(sala2);
  