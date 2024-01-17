import { gql } from "@apollo/client";
// `
export const LOGIN = gql`
 query login($usuario: String!, $clave: String!){
  login(usuario:$usuario, clave:$clave){
    access_token
    result{
      email
      phone
      usertype
      firstname
      lastname
    }
  }
}
`;

export const VERIFY_JWT = gql`
  query verifyJWT ($token: String!){
  getUserByJWT(token: $token) {
    token
    data {
      email
      phone
      usertype
      firstname
      lastname
       identification
    }
  }
}
`

export const CHANGE_STATUS_ESTABLISHMENT = gql`
  mutation changeStatusEstablishmentType($id: Int, $status: Boolean){
  changeTipoEstablecimientoStatus(id: $id, status:$status){
    id
    status
  }
}
`

export const CREATE_ESTABLISHMENT_TYPE = gql`
 mutation createEstablismentType($args: CreateTipoEstablecimientoInput){
  createTipoEstablecimiento(
    args:$args
  ){
    id
    nombre
    descripcion
    status
  }
}
`

export const UPDATE_ESTABLISHMENT_TYPE = gql`
mutation updateEstablishmentType($id: Int, $args: UpdateTipoEstablecimientoInput){
  updateTipoEstablecimiento(id: $id, args: $args){
    id
    nombre
    descripcion
    status
  }
}
`
