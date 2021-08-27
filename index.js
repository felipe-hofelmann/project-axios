import { PersonRepository } from './repository/PersonRepository.js';
import { TypeUserRepository } from './repository/TypeUserRepository.js';
import { UserRepository } from './repository/UserRepository.js';
import { TypeUser } from '/aulas/aula34/project-axios/models/typeuser.js';

// let tUUser = new TypeUser();
// tUUser.id = 1;
// tUUser.Name="foi";
// tUUser.Description = "ahamm";
let tId = 27;
let tName = "Padrãoossss";
let tDescription = "Pd";
let tUser = {"Id":tId, "Name":tName,"Description":tDescription};
let repoType = new TypeUserRepository();

let uId = 1;
let uEmail = "ingiwng@.com";
let uPassword = "admin";
let utypeUser = repoType.readById(5);;
let repoUser = new UserRepository();
let user = {"Id":uId, "Email":uEmail,"Password":uPassword,"typeUser":utypeUser};

let pId = 1;
let pfirstName = "Fulano";
let plastName = "de Tal";
let pbirthDate = "1999-04-16T00:00:00";
let pdocument = "Qualquer coisa";
let pUser = user;
let repoPerson = new PersonRepository();
let person = {"Id":pId, "firstName":pfirstName,"lastName":plastName,"birthDate":pbirthDate,"document":pdocument,"User":pUser};



//Crud TypeUser
// repoType.create(tUser);
// repoType.read().then(list=>{
//       list.forEach(e => {
//           console.log(e);
//     });
// });;
// repoType.readById(tId).then(e=>console.log(e));
// repoType.update(tUser);
//repoType.delete(tId);

//Crud User
//repoUser.create(user);
// repoUser.read().then(list=>{
//     list.forEach(e => {
//         console.log(e);
//   });
// });;
// repoUser.readById(uId).then(e=>console.log(e));
// repoUser.update(user);
// repoUser.delete(uId);

// //Crud Person
// repoPerson.create(person);
// repoPerson.read().then(list=>{
//     list.forEach(e => {
//         console.log(e);
//   });
// });;
// repoPerson.readById(pId).then(e=>console.log(e));
// repoPerson.update(person);
// repoPerson.delete(pId);

