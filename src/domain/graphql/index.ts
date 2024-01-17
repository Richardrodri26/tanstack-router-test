import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Actividad = {
  __typename?: 'Actividad';
  codigo?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  fecha_inicio?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
};

export type Anexo = {
  __typename?: 'Anexo';
  archivo?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombre?: Maybe<Scalars['String']>;
  tipo?: Maybe<Scalars['String']>;
};

export type ArgActividades = {
  Count?: InputMaybe<Scalars['Int']>;
  Skip?: InputMaybe<Scalars['Int']>;
  impuesto_codigo?: InputMaybe<Scalars['String']>;
  vigencia_codigo?: InputMaybe<Scalars['Int']>;
};

export type ArgContribuyente = {
  Field?: InputMaybe<Scalars['String']>;
  FieldValue?: InputMaybe<FieldValue>;
  IsPersonal?: InputMaybe<Scalars['Boolean']>;
  Operador?: InputMaybe<Scalars['String']>;
  impuesto_codigo?: InputMaybe<Scalars['String']>;
  tipo?: InputMaybe<Scalars['String']>;
};

export type ArgContribuyenteByIndustria = {
  Field?: InputMaybe<Scalars['String']>;
  FieldValue?: InputMaybe<FieldValue>;
  IsCenso?: InputMaybe<Scalars['Boolean']>;
  IsPersonal?: InputMaybe<Scalars['Boolean']>;
  Operador?: InputMaybe<Scalars['String']>;
  impuesto_codigo?: InputMaybe<Scalars['String']>;
  tipo?: InputMaybe<Scalars['String']>;
};

export type Contribuyente = {
  __typename?: 'Contribuyente';
  actividades?: Maybe<Array<Maybe<Actividad>>>;
  agente_retenedor?: Maybe<Scalars['Boolean']>;
  anexos?: Maybe<Array<Maybe<Anexo>>>;
  apellido_representante?: Maybe<Scalars['String']>;
  barrio?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  celular_representante?: Maybe<Scalars['String']>;
  ciudad?: Maybe<Scalars['String']>;
  correo?: Maybe<Scalars['String']>;
  departamento?: Maybe<Scalars['String']>;
  direccion_notificacion?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  encuestado_apellido?: Maybe<Scalars['String']>;
  encuestado_firma_mongo_id?: Maybe<Scalars['String']>;
  encuestado_identificacion?: Maybe<Scalars['String']>;
  encuestado_nombre?: Maybe<Scalars['String']>;
  establecimientos?: Maybe<Array<Maybe<Establecimiento>>>;
  fecha_inscripcion?: Maybe<Scalars['Date']>;
  fecha_matricula?: Maybe<Scalars['Date']>;
  gran_contribuyente?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  identificacion_representante?: Maybe<Scalars['String']>;
  identificacion_revisor?: Maybe<Scalars['String']>;
  inscrito?: Maybe<Scalars['Boolean']>;
  nombre_representante?: Maybe<Scalars['String']>;
  nombre_revisor?: Maybe<Scalars['String']>;
  numero_documento?: Maybe<Scalars['String']>;
  numero_matricula?: Maybe<Scalars['Int']>;
  razon_social?: Maybe<Scalars['String']>;
  regimen?: Maybe<Scalars['String']>;
  registrado_camara_comercio?: Maybe<Scalars['Boolean']>;
  tarjeta_profesional_revisor?: Maybe<Scalars['String']>;
  telefono?: Maybe<Scalars['String']>;
  temporal?: Maybe<Scalars['Boolean']>;
  tipo?: Maybe<Scalars['String']>;
  tipo_documento?: Maybe<Scalars['String']>;
  tipo_identificacion_representante?: Maybe<Scalars['String']>;
  tipo_identificacion_revisor?: Maybe<Scalars['String']>;
};

export type ConvertBase64ToMongoId = {
  content?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
};

export type CreateActividad = {
  codigo?: InputMaybe<Scalars['String']>;
  descripcion?: InputMaybe<Scalars['String']>;
  fecha_inicio?: InputMaybe<Scalars['Date']>;
};

export type CreateAnexo = {
  archivo?: InputMaybe<Scalars['String']>;
  extension?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  tipo?: InputMaybe<Scalars['String']>;
};

export type CreateContribuyente = {
  actividades?: InputMaybe<Array<InputMaybe<CreateActividad>>>;
  agente_retenedor?: InputMaybe<Scalars['Boolean']>;
  anexos?: InputMaybe<Array<InputMaybe<CreateAnexo>>>;
  apellido_representante?: InputMaybe<Scalars['String']>;
  barrio?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  celular_representante?: InputMaybe<Scalars['String']>;
  ciudad?: InputMaybe<Scalars['String']>;
  correo?: InputMaybe<Scalars['String']>;
  departamento?: InputMaybe<Scalars['String']>;
  direccion_notificacion?: InputMaybe<Scalars['String']>;
  dv?: InputMaybe<Scalars['ID']>;
  encuestado_apellido?: InputMaybe<Scalars['String']>;
  encuestado_firma_mongo_id?: InputMaybe<Scalars['String']>;
  encuestado_identificacion?: InputMaybe<Scalars['String']>;
  encuestado_nombre?: InputMaybe<Scalars['String']>;
  establecimientos?: InputMaybe<Array<InputMaybe<CreateEstablecimiento>>>;
  fecha_inscripcion?: InputMaybe<Scalars['Date']>;
  fecha_matricula?: InputMaybe<Scalars['Date']>;
  gran_contribuyente?: InputMaybe<Scalars['Boolean']>;
  identificacion_representante?: InputMaybe<Scalars['String']>;
  identificacion_revisor?: InputMaybe<Scalars['String']>;
  inscrito?: InputMaybe<Scalars['Boolean']>;
  nombre_representante?: InputMaybe<Scalars['String']>;
  nombre_revisor?: InputMaybe<Scalars['String']>;
  numero_documento?: InputMaybe<Scalars['String']>;
  numero_matricula?: InputMaybe<Scalars['Int']>;
  razon_social?: InputMaybe<Scalars['String']>;
  regimen?: InputMaybe<RegimenContribuyente>;
  registrado_camara_comercio?: InputMaybe<Scalars['Boolean']>;
  tarjeta_profesional_revisor?: InputMaybe<Scalars['String']>;
  telefono?: InputMaybe<Scalars['String']>;
  temporal?: InputMaybe<Scalars['Boolean']>;
  tipo?: InputMaybe<TipoContribuyente>;
  tipo_documento?: InputMaybe<Scalars['String']>;
  tipo_identificacion_representante?: InputMaybe<Scalars['String']>;
  tipo_identificacion_revisor?: InputMaybe<Scalars['String']>;
};

export type CreateEstablecimiento = {
  al_dia_icat?: InputMaybe<Scalars['Boolean']>;
  barrio?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fecha_apertura?: InputMaybe<Scalars['Date']>;
  foto_predio_mongo_id?: InputMaybe<Scalars['String']>;
  foto_predio_mongo_maps_id?: InputMaybe<Scalars['String']>;
  geolocalizacion?: InputMaybe<Scalars['String']>;
  ingreso_promedio_mensual?: InputMaybe<Scalars['Int']>;
  nombre?: InputMaybe<Scalars['String']>;
  numero_empleados?: InputMaybe<Scalars['Int']>;
  pago_icat?: InputMaybe<Scalars['Boolean']>;
  referencia_catastral?: InputMaybe<Scalars['String']>;
  tipo_establecimiento?: InputMaybe<Scalars['String']>;
};

export type CreateFormulario = {
  contribuyentes?: InputMaybe<Array<InputMaybe<CreateContribuyente>>>;
  encuestador_apellido?: InputMaybe<Scalars['String']>;
  encuestador_firma_mongo_id?: InputMaybe<Scalars['String']>;
  encuestador_identificacion?: InputMaybe<Scalars['String']>;
  encuestador_nombre?: InputMaybe<Scalars['String']>;
  fecha_presentacion?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type CreateTipoEstablecimientoInput = {
  descripcion?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
};

export type Deparamento = {
  __typename?: 'Deparamento';
  depid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type DeparamentoMeta = {
  __typename?: 'DeparamentoMeta';
  currentPage?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  itemsPerPage?: Maybe<Scalars['Int']>;
  totalItems?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type DeparamentoResponse = {
  __typename?: 'DeparamentoResponse';
  items?: Maybe<Array<Maybe<Deparamentos>>>;
  meta?: Maybe<DeparamentoMeta>;
};

export type Deparamentos = {
  __typename?: 'Deparamentos';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Encuestador = {
  __typename?: 'Encuestador';
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  identification?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  signature_mongo_id?: Maybe<Scalars['String']>;
  usertype?: Maybe<Scalars['String']>;
};

export type Establecimiento = {
  __typename?: 'Establecimiento';
  al_dia_icat?: Maybe<Scalars['Boolean']>;
  barrio?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fecha_apertura?: Maybe<Scalars['Date']>;
  foto_predio_mongo_id?: Maybe<Scalars['String']>;
  foto_predio_mongo_maps_id?: Maybe<Scalars['String']>;
  geolocalizacion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  ingreso_promedio_mensual?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  numero_empleados?: Maybe<Scalars['Int']>;
  pago_icat?: Maybe<Scalars['Boolean']>;
  referencia_catastral?: Maybe<Scalars['String']>;
  tipo_establecimiento?: Maybe<Scalars['String']>;
};

export type EstablecimientoPaginacion = {
  __typename?: 'EstablecimientoPaginacion';
  items?: Maybe<Array<Maybe<TipoEstablecimiento>>>;
  meta?: Maybe<PaginationMeta>;
};

export type FieldValue = {
  char?: InputMaybe<Scalars['String']>;
  int?: InputMaybe<Scalars['Int']>;
};

export type FilterDto = {
  filt?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  route?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type FomularioDetailPaginacion = {
  __typename?: 'FomularioDetailPaginacion';
  actividades?: Maybe<Array<Maybe<Actividad>>>;
  anexos?: Maybe<Array<Maybe<Anexo>>>;
  establecimientos?: Maybe<Array<Maybe<Establecimiento>>>;
  meta?: Maybe<PaginationMeta>;
};

export type Formulario = {
  __typename?: 'Formulario';
  contribuyentes?: Maybe<Array<Maybe<Contribuyente>>>;
  etapa?: Maybe<Scalars['String']>;
  fecha_presentacion?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Encuestador>;
};

export type FormularioAll = {
  __typename?: 'FormularioAll';
  direccion_notificacion?: Maybe<Scalars['String']>;
  etapa?: Maybe<Scalars['String']>;
  fecha_inscripcion?: Maybe<Scalars['Date']>;
  fecha_presentacion?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  nombre_censador?: Maybe<Scalars['String']>;
  numero_documento?: Maybe<Scalars['String']>;
  razon_social?: Maybe<Scalars['String']>;
  regimen?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  tipo?: Maybe<Scalars['String']>;
  tipo_documento?: Maybe<Scalars['String']>;
};

export type FormularioPaginacion = {
  __typename?: 'FormularioPaginacion';
  items?: Maybe<Array<Maybe<FormularioAll>>>;
  meta?: Maybe<PaginationMeta>;
};

export type GetJwtResponse = {
  __typename?: 'GetJwtResponse';
  data: ResultAuth;
  token: Scalars['String'];
};

export type InputDetailsFormulario = {
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<TypeDatailsFormulatio>;
};

export type InputFindForumlarioAllAdmin = {
  id_user?: InputMaybe<Scalars['Int']>;
};

export type Municipio = {
  __typename?: 'Municipio';
  department_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  municipalityid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type MunicipioMeta = {
  __typename?: 'MunicipioMeta';
  currentPage?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  itemsPerPage?: Maybe<Scalars['Int']>;
  totalItems?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type MunicipioResponse = {
  __typename?: 'MunicipioResponse';
  items?: Maybe<Array<Maybe<Municipio>>>;
  meta?: Maybe<MunicipioMeta>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeTipoEstablecimientoStatus?: Maybe<TipoEstablecimiento>;
  convertBase64ToMongoId?: Maybe<Scalars['String']>;
  createFormulario?: Maybe<MutationFormulario>;
  createFormularioPartial?: Maybe<Formulario>;
  createTipoEstablecimiento?: Maybe<TipoEstablecimiento>;
  createUser: ResponseCreateUser;
  deleteFormulario?: Maybe<MutationFormulario>;
  deleteTipoEstablecimiento?: Maybe<Scalars['Boolean']>;
  updateFormulario?: Maybe<MutationFormulario>;
  updateFormularioPartial?: Maybe<Formulario>;
  updateTipoEstablecimiento?: Maybe<TipoEstablecimiento>;
};


export type MutationChangeTipoEstablecimientoStatusArgs = {
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
};


export type MutationConvertBase64ToMongoIdArgs = {
  arg?: InputMaybe<ConvertBase64ToMongoId>;
};


export type MutationCreateFormularioArgs = {
  arg?: InputMaybe<UpdateFormulario>;
};


export type MutationCreateFormularioPartialArgs = {
  arg?: InputMaybe<CreateFormulario>;
};


export type MutationCreateTipoEstablecimientoArgs = {
  args?: InputMaybe<CreateTipoEstablecimientoInput>;
};


export type MutationCreateUserArgs = {
  user: User;
};


export type MutationDeleteFormularioArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationDeleteTipoEstablecimientoArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateFormularioArgs = {
  arg?: InputMaybe<UpdateFormulario>;
};


export type MutationUpdateFormularioPartialArgs = {
  arg?: InputMaybe<UpdateFormulario>;
};


export type MutationUpdateTipoEstablecimientoArgs = {
  args?: InputMaybe<UpdateTipoEstablecimientoInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type MutationFormulario = {
  __typename?: 'MutationFormulario';
  data?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  currentPage: Scalars['Int'];
  itemCount: Scalars['Int'];
  itemsPerPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetActividades?: Maybe<Array<Maybe<ResponseActividades>>>;
  UrlFindContribuyenteByIndustria?: Maybe<Array<Maybe<ResponseContribuyenteIndustria>>>;
  findAllUsers?: Maybe<UserAllPaginacion>;
  findByFormularioArchivo?: Maybe<MutationFormulario>;
  findContribuyente?: Maybe<Array<Maybe<ResponseContribuyente>>>;
  findFormularioAll?: Maybe<FormularioPaginacion>;
  findFormularioAllAdmin?: Maybe<FormularioPaginacion>;
  findFormularioById?: Maybe<Formulario>;
  getAllTipoEstablecimientos?: Maybe<EstablecimientoPaginacion>;
  getDepartamento?: Maybe<DeparamentoResponse>;
  getDepartamentoOne?: Maybe<Deparamento>;
  getDetailFormulatio?: Maybe<FomularioDetailPaginacion>;
  getMunicipio?: Maybe<Array<Maybe<Municipio>>>;
  getMunicipioAllToDepart?: Maybe<MunicipioResponse>;
  getMunicipioOneToDepart?: Maybe<Municipio>;
  getTipoEstablecimientoById?: Maybe<TipoEstablecimiento>;
  getUserByJWT: GetJwtResponse;
  login: ResponseLogin;
};


export type QueryGetActividadesArgs = {
  arg?: InputMaybe<ArgActividades>;
};


export type QueryUrlFindContribuyenteByIndustriaArgs = {
  arg?: InputMaybe<ArgContribuyenteByIndustria>;
};


export type QueryFindAllUsersArgs = {
  opt?: InputMaybe<FilterDto>;
};


export type QueryFindByFormularioArchivoArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryFindContribuyenteArgs = {
  arg?: InputMaybe<ArgContribuyente>;
};


export type QueryFindFormularioAllArgs = {
  opt?: InputMaybe<FilterDto>;
};


export type QueryFindFormularioAllAdminArgs = {
  args?: InputMaybe<InputFindForumlarioAllAdmin>;
  opt?: InputMaybe<FilterDto>;
};


export type QueryFindFormularioByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetAllTipoEstablecimientosArgs = {
  opt?: InputMaybe<FilterDto>;
};


export type QueryGetDepartamentoArgs = {
  opt?: InputMaybe<FilterDto>;
};


export type QueryGetDepartamentoOneArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDetailFormulatioArgs = {
  args?: InputMaybe<InputDetailsFormulario>;
  opt?: InputMaybe<FilterDto>;
};


export type QueryGetMunicipioArgs = {
  opt?: InputMaybe<FilterDto>;
};


export type QueryGetMunicipioAllToDepartArgs = {
  id_departamento?: InputMaybe<Scalars['Int']>;
  opt?: InputMaybe<FilterDto>;
};


export type QueryGetMunicipioOneToDepartArgs = {
  id_departamento?: InputMaybe<Scalars['Int']>;
  id_municipio?: InputMaybe<Scalars['Int']>;
};


export type QueryGetTipoEstablecimientoByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUserByJwtArgs = {
  token: Scalars['String'];
};


export type QueryLoginArgs = {
  clave: Scalars['String'];
  usuario: Scalars['String'];
};

export enum RegimenContribuyente {
  Comun = 'COMUN',
  Simplificado = 'SIMPLIFICADO'
}

export type ResponseActividades = {
  __typename?: 'ResponseActividades';
  ActTactivad_tipo?: Maybe<Scalars['String']>;
  activad_tarifa?: Maybe<Scalars['Float']>;
  actividad_codigo?: Maybe<Scalars['Int']>;
  actividad_descripcion?: Maybe<Scalars['String']>;
};

export type ResponseContribuyente = {
  __typename?: 'ResponseContribuyente';
  AcuCod?: Maybe<Scalars['String']>;
  CntCod?: Maybe<Scalars['String']>;
  CntDir?: Maybe<Scalars['String']>;
  CntNom?: Maybe<Scalars['String']>;
  CprNom?: Maybe<Scalars['String']>;
  DeudCodConcat?: Maybe<Scalars['String']>;
  DstNom?: Maybe<Scalars['String']>;
  EstNom?: Maybe<Scalars['String']>;
  IsAssociated?: Maybe<Scalars['Int']>;
  PrdAvlVig?: Maybe<Scalars['Int']>;
  PrdAvlVlrMoney?: Maybe<Scalars['String']>;
  PrdEdf?: Maybe<Scalars['String']>;
  PrdMat?: Maybe<Scalars['String']>;
  PrdPrpCod?: Maybe<Scalars['String']>;
  PrdRef?: Maybe<Scalars['String']>;
  PrdTrrHar?: Maybe<Scalars['String']>;
  SxcSdo?: Maybe<Scalars['String']>;
  TprNom?: Maybe<Scalars['String']>;
};

export type ResponseContribuyenteIndustria = {
  __typename?: 'ResponseContribuyenteIndustria';
  CntCod?: Maybe<Scalars['String']>;
  CntId?: Maybe<Scalars['String']>;
  CntMatMercNum?: Maybe<Scalars['String']>;
  CntNit?: Maybe<Scalars['String']>;
  CntNom?: Maybe<Scalars['String']>;
  CntRazSoc?: Maybe<Scalars['String']>;
  CntRef?: Maybe<Scalars['String']>;
  CntRepLegNom?: Maybe<Scalars['String']>;
  CntRgmNom?: Maybe<Scalars['String']>;
  CntTipId?: Maybe<Scalars['String']>;
  CntTipPer?: Maybe<Scalars['String']>;
  IsAssociated?: Maybe<Scalars['Int']>;
};

export type ResponseCreateUser = {
  __typename?: 'ResponseCreateUser';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type ResponseFindAllUsers = {
  __typename?: 'ResponseFindAllUsers';
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  total_formulario?: Maybe<Scalars['String']>;
  total_formulario_activos?: Maybe<Scalars['String']>;
  total_formulario_no_activos?: Maybe<Scalars['String']>;
  usertype?: Maybe<Scalars['String']>;
};

export type ResponseLogin = {
  __typename?: 'ResponseLogin';
  access_token: Scalars['String'];
  result: ResultAuth;
};

export type ResultAuth = {
  __typename?: 'ResultAuth';
  email: Scalars['String'];
  firstname: Scalars['String'];
  id_departamento?: Maybe<Scalars['Int']>;
  id_municipio?: Maybe<Scalars['Int']>;
  identification?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  signature_mongo_id?: Maybe<Scalars['String']>;
  usertype: Scalars['String'];
};

export enum TipoContribuyente {
  Juridica = 'JURIDICA',
  Natural = 'NATURAL'
}

export type TipoEstablecimiento = {
  __typename?: 'TipoEstablecimiento';
  createAt?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  updateAt?: Maybe<Scalars['String']>;
};

export enum TypeDatailsFormulatio {
  Actividades = 'ACTIVIDADES',
  Anexos = 'ANEXOS',
  Establecimientos = 'ESTABLECIMIENTOS'
}

export type UpdateActividad = {
  codigo?: InputMaybe<Scalars['String']>;
  descripcion?: InputMaybe<Scalars['String']>;
  fecha_inicio?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type UpdateAnexo = {
  archivo?: InputMaybe<Scalars['String']>;
  extension?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  nombre?: InputMaybe<Scalars['String']>;
  tipo?: InputMaybe<Scalars['String']>;
};

export type UpdateContribuyente = {
  actividades?: InputMaybe<Array<InputMaybe<UpdateActividad>>>;
  agente_retenedor?: InputMaybe<Scalars['Boolean']>;
  anexos?: InputMaybe<Array<InputMaybe<UpdateAnexo>>>;
  apellido_representante?: InputMaybe<Scalars['String']>;
  barrio?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  celular_representante?: InputMaybe<Scalars['String']>;
  ciudad?: InputMaybe<Scalars['String']>;
  correo?: InputMaybe<Scalars['String']>;
  departamento?: InputMaybe<Scalars['String']>;
  direccion_notificacion?: InputMaybe<Scalars['String']>;
  dv?: InputMaybe<Scalars['Int']>;
  encuestado_apellido?: InputMaybe<Scalars['String']>;
  encuestado_firma_mongo_id?: InputMaybe<Scalars['String']>;
  encuestado_identificacion?: InputMaybe<Scalars['String']>;
  encuestado_nombre?: InputMaybe<Scalars['String']>;
  establecimientos?: InputMaybe<Array<InputMaybe<UpdateEstablecimiento>>>;
  fecha_inscripcion?: InputMaybe<Scalars['Date']>;
  fecha_matricula?: InputMaybe<Scalars['Date']>;
  gran_contribuyente?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  identificacion_representante?: InputMaybe<Scalars['String']>;
  identificacion_revisor?: InputMaybe<Scalars['String']>;
  inscrito?: InputMaybe<Scalars['Boolean']>;
  nombre_representante?: InputMaybe<Scalars['String']>;
  nombre_revisor?: InputMaybe<Scalars['String']>;
  numero_documento?: InputMaybe<Scalars['String']>;
  numero_matricula?: InputMaybe<Scalars['Int']>;
  razon_social?: InputMaybe<Scalars['String']>;
  regimen?: InputMaybe<RegimenContribuyente>;
  registrado_camara_comercio?: InputMaybe<Scalars['Boolean']>;
  tarjeta_profesional_revisor?: InputMaybe<Scalars['String']>;
  telefono?: InputMaybe<Scalars['String']>;
  temporal?: InputMaybe<Scalars['Boolean']>;
  tipo?: InputMaybe<TipoContribuyente>;
  tipo_documento?: InputMaybe<Scalars['String']>;
  tipo_identificacion_representante?: InputMaybe<Scalars['String']>;
  tipo_identificacion_revisor?: InputMaybe<Scalars['String']>;
};

export type UpdateEstablecimiento = {
  al_dia_icat?: InputMaybe<Scalars['Boolean']>;
  barrio?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fecha_apertura?: InputMaybe<Scalars['Date']>;
  foto_predio_mongo_id?: InputMaybe<Scalars['String']>;
  foto_predio_mongo_maps_id?: InputMaybe<Scalars['String']>;
  geolocalizacion?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ingreso_promedio_mensual?: InputMaybe<Scalars['Int']>;
  nombre?: InputMaybe<Scalars['String']>;
  numero_empleados?: InputMaybe<Scalars['Int']>;
  pago_icat?: InputMaybe<Scalars['Boolean']>;
  referencia_catastral?: InputMaybe<Scalars['String']>;
  tipo_establecimiento?: InputMaybe<Scalars['String']>;
};

export type UpdateFormulario = {
  contribuyentes?: InputMaybe<Array<InputMaybe<UpdateContribuyente>>>;
  encuestador_apellido?: InputMaybe<Scalars['String']>;
  encuestador_firma_mongo_id?: InputMaybe<Scalars['String']>;
  encuestador_identificacion?: InputMaybe<Scalars['String']>;
  encuestador_nombre?: InputMaybe<Scalars['String']>;
  fecha_presentacion?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type UpdateTipoEstablecimientoInput = {
  descripcion?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type User = {
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type UserAllPaginacion = {
  __typename?: 'UserAllPaginacion';
  items: Array<ResponseFindAllUsers>;
  meta: PaginationMeta;
};

export type LoginQueryVariables = Exact<{
  usuario: Scalars['String'];
  clave: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'ResponseLogin', access_token: string, result: { __typename?: 'ResultAuth', email: string, phone?: string | null, usertype: string, firstname: string, lastname?: string | null } } };

export type VerifyJwtQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyJwtQuery = { __typename?: 'Query', getUserByJWT: { __typename?: 'GetJwtResponse', token: string, data: { __typename?: 'ResultAuth', email: string, phone?: string | null, usertype: string, firstname: string, lastname?: string | null, identification?: string | null } } };

export type GetAllFormsQueryVariables = Exact<{
  opt?: InputMaybe<FilterDto>;
}>;


export type GetAllFormsQuery = { __typename?: 'Query', findFormularioAll?: { __typename?: 'FormularioPaginacion', items?: Array<{ __typename?: 'FormularioAll', id?: string | null, razon_social?: string | null, fecha_presentacion?: any | null, tipo?: string | null, regimen?: string | null, numero_documento?: string | null, fecha_inscripcion?: any | null, direccion_notificacion?: string | null, status?: boolean | null, etapa?: string | null } | null> | null, meta?: { __typename?: 'PaginationMeta', currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } | null } | null };

export type GetAllUsersQueryVariables = Exact<{
  opt?: InputMaybe<FilterDto>;
}>;


export type GetAllUsersQuery = { __typename?: 'Query', findAllUsers?: { __typename?: 'UserAllPaginacion', items: Array<{ __typename?: 'ResponseFindAllUsers', email?: string | null, firstname?: string | null, lastname?: string | null, usertype?: string | null, id?: number | null, phone?: string | null, total_formulario_no_activos?: string | null, total_formulario_activos?: string | null, total_formulario?: string | null }>, meta: { __typename?: 'PaginationMeta', currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } } | null };

export type GetEstablishmentsFromFormByIdQueryVariables = Exact<{
  opt?: InputMaybe<FilterDto>;
  args?: InputMaybe<InputDetailsFormulario>;
}>;


export type GetEstablishmentsFromFormByIdQuery = { __typename?: 'Query', getDetailFormulatio?: { __typename?: 'FomularioDetailPaginacion', establecimientos?: Array<{ __typename?: 'Establecimiento', id?: string | null, nombre?: string | null, direccion?: string | null, fecha_apertura?: any | null, ingreso_promedio_mensual?: number | null, numero_empleados?: number | null, pago_icat?: boolean | null, al_dia_icat?: boolean | null, geolocalizacion?: string | null, referencia_catastral?: string | null, foto_predio_mongo_id?: string | null, foto_predio_mongo_maps_id?: string | null, tipo_establecimiento?: string | null } | null> | null, meta?: { __typename?: 'PaginationMeta', currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } | null } | null };

export type GetTaxpayersFromFormByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetTaxpayersFromFormByIdQuery = { __typename?: 'Query', findFormularioById?: { __typename?: 'Formulario', id?: string | null, fecha_presentacion?: any | null, user?: { __typename?: 'Encuestador', id?: number | null, phone?: string | null } | null, contribuyentes?: Array<{ __typename?: 'Contribuyente', id?: string | null, numero_documento?: string | null, dv?: number | null, encuestado_nombre?: string | null, encuestado_apellido?: string | null, encuestado_identificacion?: string | null, tipo?: string | null, regimen?: string | null, razon_social?: string | null, fecha_inscripcion?: any | null, agente_retenedor?: boolean | null, gran_contribuyente?: boolean | null, temporal?: boolean | null, identificacion_representante?: string | null, nombre_representante?: string | null, celular_representante?: string | null, identificacion_revisor?: string | null, nombre_revisor?: string | null, tarjeta_profesional_revisor?: string | null, direccion_notificacion?: string | null, ciudad?: string | null, departamento?: string | null, barrio?: string | null, correo?: string | null, telefono?: string | null, celular?: string | null, numero_matricula?: number | null, fecha_matricula?: any | null, actividades?: Array<{ __typename?: 'Actividad', id?: string | null, codigo?: string | null, descripcion?: string | null, fecha_inicio?: any | null } | null> | null } | null> | null } | null };

export type GetAnnexesFromFormByIdQueryVariables = Exact<{
  opt?: InputMaybe<FilterDto>;
  args?: InputMaybe<InputDetailsFormulario>;
}>;


export type GetAnnexesFromFormByIdQuery = { __typename?: 'Query', getDetailFormulatio?: { __typename?: 'FomularioDetailPaginacion', anexos?: Array<{ __typename?: 'Anexo', id?: string | null, nombre?: string | null, extension?: string | null, tipo?: string | null, archivo?: string | null } | null> | null, meta?: { __typename?: 'PaginationMeta', currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } | null } | null };

export type GetActivitiesFromFormByIdQueryVariables = Exact<{
  opt?: InputMaybe<FilterDto>;
  args?: InputMaybe<InputDetailsFormulario>;
}>;


export type GetActivitiesFromFormByIdQuery = { __typename?: 'Query', getDetailFormulatio?: { __typename?: 'FomularioDetailPaginacion', actividades?: Array<{ __typename?: 'Actividad', id?: string | null, codigo?: string | null, descripcion?: string | null, fecha_inicio?: any | null } | null> | null, meta?: { __typename?: 'PaginationMeta', currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } | null } | null };

export type GetAllFormByUserIdQueryVariables = Exact<{
  opt?: InputMaybe<FilterDto>;
  args?: InputMaybe<InputFindForumlarioAllAdmin>;
}>;


export type GetAllFormByUserIdQuery = { __typename?: 'Query', findFormularioAllAdmin?: { __typename?: 'FormularioPaginacion', items?: Array<{ __typename?: 'FormularioAll', id?: string | null, fecha_presentacion?: any | null, tipo?: string | null, regimen?: string | null, razon_social?: string | null, numero_documento?: string | null, fecha_inscripcion?: any | null, direccion_notificacion?: string | null, nombre_censador?: string | null, tipo_documento?: string | null, status?: boolean | null, etapa?: string | null } | null> | null, meta?: { __typename?: 'PaginationMeta', currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } | null } | null };

export type CreateEstablismentTypeMutationVariables = Exact<{
  args?: InputMaybe<CreateTipoEstablecimientoInput>;
}>;


export type CreateEstablismentTypeMutation = { __typename?: 'Mutation', createTipoEstablecimiento?: { __typename?: 'TipoEstablecimiento', id?: number | null, nombre?: string | null, descripcion?: string | null, status?: boolean | null } | null };

export type GetEstablishmentTypeByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type GetEstablishmentTypeByIdQuery = { __typename?: 'Query', getTipoEstablecimientoById?: { __typename?: 'TipoEstablecimiento', id?: number | null, nombre?: string | null, descripcion?: string | null } | null };

export type GetAllEstablismentTypesQueryVariables = Exact<{
  opt?: InputMaybe<FilterDto>;
}>;


export type GetAllEstablismentTypesQuery = { __typename?: 'Query', getAllTipoEstablecimientos?: { __typename?: 'EstablecimientoPaginacion', items?: Array<{ __typename?: 'TipoEstablecimiento', id?: number | null, nombre?: string | null, descripcion?: string | null, status?: boolean | null, createAt?: string | null } | null> | null, meta?: { __typename?: 'PaginationMeta', currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number } | null } | null };

export type UpdateEstablishmentTypeMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  args?: InputMaybe<UpdateTipoEstablecimientoInput>;
}>;


export type UpdateEstablishmentTypeMutation = { __typename?: 'Mutation', updateTipoEstablecimiento?: { __typename?: 'TipoEstablecimiento', id?: number | null, nombre?: string | null, descripcion?: string | null, status?: boolean | null } | null };

export type ChangeStatusEstablishmentTypeMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Boolean']>;
}>;


export type ChangeStatusEstablishmentTypeMutation = { __typename?: 'Mutation', changeTipoEstablecimientoStatus?: { __typename?: 'TipoEstablecimiento', id?: number | null, status?: boolean | null } | null };

export type MetaPaginationFragment = { __typename?: 'PaginationMeta', currentPage: number, itemCount: number, itemsPerPage: number, totalItems: number, totalPages: number };

export const MetaPaginationFragmentDoc = gql`
    fragment metaPagination on PaginationMeta {
  currentPage
  itemCount
  itemsPerPage
  totalItems
  totalPages
}
    `;
export const LoginDocument = gql`
    query login($usuario: String!, $clave: String!) {
  login(usuario: $usuario, clave: $clave) {
    access_token
    result {
      email
      phone
      usertype
      firstname
      lastname
    }
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      usuario: // value for 'usuario'
 *      clave: // value for 'clave'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const VerifyJwtDocument = gql`
    query verifyJWT($token: String!) {
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
    `;

/**
 * __useVerifyJwtQuery__
 *
 * To run a query within a React component, call `useVerifyJwtQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyJwtQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyJwtQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyJwtQuery(baseOptions: Apollo.QueryHookOptions<VerifyJwtQuery, VerifyJwtQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyJwtQuery, VerifyJwtQueryVariables>(VerifyJwtDocument, options);
      }
export function useVerifyJwtLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyJwtQuery, VerifyJwtQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyJwtQuery, VerifyJwtQueryVariables>(VerifyJwtDocument, options);
        }
export type VerifyJwtQueryHookResult = ReturnType<typeof useVerifyJwtQuery>;
export type VerifyJwtLazyQueryHookResult = ReturnType<typeof useVerifyJwtLazyQuery>;
export type VerifyJwtQueryResult = Apollo.QueryResult<VerifyJwtQuery, VerifyJwtQueryVariables>;
export const GetAllFormsDocument = gql`
    query getAllForms($opt: FilterDto) {
  findFormularioAll(opt: $opt) {
    items {
      id
      razon_social
      fecha_presentacion
      tipo
      regimen
      razon_social
      numero_documento
      fecha_inscripcion
      direccion_notificacion
      status
      etapa
    }
    meta {
      ...metaPagination
    }
  }
}
    ${MetaPaginationFragmentDoc}`;

/**
 * __useGetAllFormsQuery__
 *
 * To run a query within a React component, call `useGetAllFormsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFormsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFormsQuery({
 *   variables: {
 *      opt: // value for 'opt'
 *   },
 * });
 */
export function useGetAllFormsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFormsQuery, GetAllFormsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFormsQuery, GetAllFormsQueryVariables>(GetAllFormsDocument, options);
      }
export function useGetAllFormsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFormsQuery, GetAllFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFormsQuery, GetAllFormsQueryVariables>(GetAllFormsDocument, options);
        }
export type GetAllFormsQueryHookResult = ReturnType<typeof useGetAllFormsQuery>;
export type GetAllFormsLazyQueryHookResult = ReturnType<typeof useGetAllFormsLazyQuery>;
export type GetAllFormsQueryResult = Apollo.QueryResult<GetAllFormsQuery, GetAllFormsQueryVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers($opt: FilterDto) {
  findAllUsers(opt: $opt) {
    items {
      email
      firstname
      lastname
      usertype
      id
      phone
      total_formulario_no_activos
      total_formulario_activos
      total_formulario
    }
    meta {
      ...metaPagination
    }
  }
}
    ${MetaPaginationFragmentDoc}`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      opt: // value for 'opt'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetEstablishmentsFromFormByIdDocument = gql`
    query getEstablishmentsFromFormById($opt: FilterDto, $args: InputDetailsFormulario) {
  getDetailFormulatio(opt: $opt, args: $args) {
    establecimientos {
      id
      nombre
      direccion
      fecha_apertura
      ingreso_promedio_mensual
      numero_empleados
      pago_icat
      al_dia_icat
      geolocalizacion
      referencia_catastral
      foto_predio_mongo_id
      foto_predio_mongo_maps_id
      tipo_establecimiento
    }
    meta {
      ...metaPagination
    }
  }
}
    ${MetaPaginationFragmentDoc}`;

/**
 * __useGetEstablishmentsFromFormByIdQuery__
 *
 * To run a query within a React component, call `useGetEstablishmentsFromFormByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEstablishmentsFromFormByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEstablishmentsFromFormByIdQuery({
 *   variables: {
 *      opt: // value for 'opt'
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetEstablishmentsFromFormByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetEstablishmentsFromFormByIdQuery, GetEstablishmentsFromFormByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEstablishmentsFromFormByIdQuery, GetEstablishmentsFromFormByIdQueryVariables>(GetEstablishmentsFromFormByIdDocument, options);
      }
export function useGetEstablishmentsFromFormByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEstablishmentsFromFormByIdQuery, GetEstablishmentsFromFormByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEstablishmentsFromFormByIdQuery, GetEstablishmentsFromFormByIdQueryVariables>(GetEstablishmentsFromFormByIdDocument, options);
        }
export type GetEstablishmentsFromFormByIdQueryHookResult = ReturnType<typeof useGetEstablishmentsFromFormByIdQuery>;
export type GetEstablishmentsFromFormByIdLazyQueryHookResult = ReturnType<typeof useGetEstablishmentsFromFormByIdLazyQuery>;
export type GetEstablishmentsFromFormByIdQueryResult = Apollo.QueryResult<GetEstablishmentsFromFormByIdQuery, GetEstablishmentsFromFormByIdQueryVariables>;
export const GetTaxpayersFromFormByIdDocument = gql`
    query getTaxpayersFromFormById($id: ID) {
  findFormularioById(id: $id) {
    id
    fecha_presentacion
    user {
      id
      phone
    }
    contribuyentes {
      id
      numero_documento
      dv
      encuestado_nombre
      encuestado_apellido
      encuestado_identificacion
      tipo
      regimen
      razon_social
      fecha_inscripcion
      agente_retenedor
      gran_contribuyente
      temporal
      identificacion_representante
      nombre_representante
      celular_representante
      identificacion_revisor
      nombre_revisor
      celular_representante
      tarjeta_profesional_revisor
      direccion_notificacion
      ciudad
      departamento
      barrio
      correo
      telefono
      celular
      numero_matricula
      fecha_matricula
      actividades {
        id
        codigo
        descripcion
        fecha_inicio
      }
    }
  }
}
    `;

/**
 * __useGetTaxpayersFromFormByIdQuery__
 *
 * To run a query within a React component, call `useGetTaxpayersFromFormByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaxpayersFromFormByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaxpayersFromFormByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaxpayersFromFormByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetTaxpayersFromFormByIdQuery, GetTaxpayersFromFormByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaxpayersFromFormByIdQuery, GetTaxpayersFromFormByIdQueryVariables>(GetTaxpayersFromFormByIdDocument, options);
      }
export function useGetTaxpayersFromFormByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaxpayersFromFormByIdQuery, GetTaxpayersFromFormByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaxpayersFromFormByIdQuery, GetTaxpayersFromFormByIdQueryVariables>(GetTaxpayersFromFormByIdDocument, options);
        }
export type GetTaxpayersFromFormByIdQueryHookResult = ReturnType<typeof useGetTaxpayersFromFormByIdQuery>;
export type GetTaxpayersFromFormByIdLazyQueryHookResult = ReturnType<typeof useGetTaxpayersFromFormByIdLazyQuery>;
export type GetTaxpayersFromFormByIdQueryResult = Apollo.QueryResult<GetTaxpayersFromFormByIdQuery, GetTaxpayersFromFormByIdQueryVariables>;
export const GetAnnexesFromFormByIdDocument = gql`
    query getAnnexesFromFormById($opt: FilterDto, $args: InputDetailsFormulario) {
  getDetailFormulatio(opt: $opt, args: $args) {
    anexos {
      id
      nombre
      extension
      tipo
      archivo
    }
    meta {
      ...metaPagination
    }
  }
}
    ${MetaPaginationFragmentDoc}`;

/**
 * __useGetAnnexesFromFormByIdQuery__
 *
 * To run a query within a React component, call `useGetAnnexesFromFormByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnnexesFromFormByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnnexesFromFormByIdQuery({
 *   variables: {
 *      opt: // value for 'opt'
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetAnnexesFromFormByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetAnnexesFromFormByIdQuery, GetAnnexesFromFormByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnnexesFromFormByIdQuery, GetAnnexesFromFormByIdQueryVariables>(GetAnnexesFromFormByIdDocument, options);
      }
export function useGetAnnexesFromFormByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnnexesFromFormByIdQuery, GetAnnexesFromFormByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnnexesFromFormByIdQuery, GetAnnexesFromFormByIdQueryVariables>(GetAnnexesFromFormByIdDocument, options);
        }
export type GetAnnexesFromFormByIdQueryHookResult = ReturnType<typeof useGetAnnexesFromFormByIdQuery>;
export type GetAnnexesFromFormByIdLazyQueryHookResult = ReturnType<typeof useGetAnnexesFromFormByIdLazyQuery>;
export type GetAnnexesFromFormByIdQueryResult = Apollo.QueryResult<GetAnnexesFromFormByIdQuery, GetAnnexesFromFormByIdQueryVariables>;
export const GetActivitiesFromFormByIdDocument = gql`
    query getActivitiesFromFormById($opt: FilterDto, $args: InputDetailsFormulario) {
  getDetailFormulatio(opt: $opt, args: $args) {
    actividades {
      id
      codigo
      descripcion
      fecha_inicio
    }
    meta {
      ...metaPagination
    }
  }
}
    ${MetaPaginationFragmentDoc}`;

/**
 * __useGetActivitiesFromFormByIdQuery__
 *
 * To run a query within a React component, call `useGetActivitiesFromFormByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivitiesFromFormByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivitiesFromFormByIdQuery({
 *   variables: {
 *      opt: // value for 'opt'
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetActivitiesFromFormByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetActivitiesFromFormByIdQuery, GetActivitiesFromFormByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivitiesFromFormByIdQuery, GetActivitiesFromFormByIdQueryVariables>(GetActivitiesFromFormByIdDocument, options);
      }
export function useGetActivitiesFromFormByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivitiesFromFormByIdQuery, GetActivitiesFromFormByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivitiesFromFormByIdQuery, GetActivitiesFromFormByIdQueryVariables>(GetActivitiesFromFormByIdDocument, options);
        }
export type GetActivitiesFromFormByIdQueryHookResult = ReturnType<typeof useGetActivitiesFromFormByIdQuery>;
export type GetActivitiesFromFormByIdLazyQueryHookResult = ReturnType<typeof useGetActivitiesFromFormByIdLazyQuery>;
export type GetActivitiesFromFormByIdQueryResult = Apollo.QueryResult<GetActivitiesFromFormByIdQuery, GetActivitiesFromFormByIdQueryVariables>;
export const GetAllFormByUserIdDocument = gql`
    query getAllFormByUserId($opt: FilterDto, $args: InputFindForumlarioAllAdmin) {
  findFormularioAllAdmin(opt: $opt, args: $args) {
    items {
      id
      fecha_presentacion
      tipo
      regimen
      razon_social
      numero_documento
      fecha_inscripcion
      direccion_notificacion
      nombre_censador
      fecha_presentacion
      tipo_documento
      status
      etapa
    }
    meta {
      ...metaPagination
    }
  }
}
    ${MetaPaginationFragmentDoc}`;

/**
 * __useGetAllFormByUserIdQuery__
 *
 * To run a query within a React component, call `useGetAllFormByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFormByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFormByUserIdQuery({
 *   variables: {
 *      opt: // value for 'opt'
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetAllFormByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFormByUserIdQuery, GetAllFormByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFormByUserIdQuery, GetAllFormByUserIdQueryVariables>(GetAllFormByUserIdDocument, options);
      }
export function useGetAllFormByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFormByUserIdQuery, GetAllFormByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFormByUserIdQuery, GetAllFormByUserIdQueryVariables>(GetAllFormByUserIdDocument, options);
        }
export type GetAllFormByUserIdQueryHookResult = ReturnType<typeof useGetAllFormByUserIdQuery>;
export type GetAllFormByUserIdLazyQueryHookResult = ReturnType<typeof useGetAllFormByUserIdLazyQuery>;
export type GetAllFormByUserIdQueryResult = Apollo.QueryResult<GetAllFormByUserIdQuery, GetAllFormByUserIdQueryVariables>;
export const CreateEstablismentTypeDocument = gql`
    mutation createEstablismentType($args: CreateTipoEstablecimientoInput) {
  createTipoEstablecimiento(args: $args) {
    id
    nombre
    descripcion
    status
  }
}
    `;
export type CreateEstablismentTypeMutationFn = Apollo.MutationFunction<CreateEstablismentTypeMutation, CreateEstablismentTypeMutationVariables>;

/**
 * __useCreateEstablismentTypeMutation__
 *
 * To run a mutation, you first call `useCreateEstablismentTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEstablismentTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEstablismentTypeMutation, { data, loading, error }] = useCreateEstablismentTypeMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateEstablismentTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEstablismentTypeMutation, CreateEstablismentTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEstablismentTypeMutation, CreateEstablismentTypeMutationVariables>(CreateEstablismentTypeDocument, options);
      }
export type CreateEstablismentTypeMutationHookResult = ReturnType<typeof useCreateEstablismentTypeMutation>;
export type CreateEstablismentTypeMutationResult = Apollo.MutationResult<CreateEstablismentTypeMutation>;
export type CreateEstablismentTypeMutationOptions = Apollo.BaseMutationOptions<CreateEstablismentTypeMutation, CreateEstablismentTypeMutationVariables>;
export const GetEstablishmentTypeByIdDocument = gql`
    query getEstablishmentTypeById($id: Int) {
  getTipoEstablecimientoById(id: $id) {
    id
    nombre
    descripcion
  }
}
    `;

/**
 * __useGetEstablishmentTypeByIdQuery__
 *
 * To run a query within a React component, call `useGetEstablishmentTypeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEstablishmentTypeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEstablishmentTypeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEstablishmentTypeByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetEstablishmentTypeByIdQuery, GetEstablishmentTypeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEstablishmentTypeByIdQuery, GetEstablishmentTypeByIdQueryVariables>(GetEstablishmentTypeByIdDocument, options);
      }
export function useGetEstablishmentTypeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEstablishmentTypeByIdQuery, GetEstablishmentTypeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEstablishmentTypeByIdQuery, GetEstablishmentTypeByIdQueryVariables>(GetEstablishmentTypeByIdDocument, options);
        }
export type GetEstablishmentTypeByIdQueryHookResult = ReturnType<typeof useGetEstablishmentTypeByIdQuery>;
export type GetEstablishmentTypeByIdLazyQueryHookResult = ReturnType<typeof useGetEstablishmentTypeByIdLazyQuery>;
export type GetEstablishmentTypeByIdQueryResult = Apollo.QueryResult<GetEstablishmentTypeByIdQuery, GetEstablishmentTypeByIdQueryVariables>;
export const GetAllEstablismentTypesDocument = gql`
    query getAllEstablismentTypes($opt: FilterDto) {
  getAllTipoEstablecimientos(opt: $opt) {
    items {
      id
      nombre
      descripcion
      status
      createAt
    }
    meta {
      ...metaPagination
    }
  }
}
    ${MetaPaginationFragmentDoc}`;

/**
 * __useGetAllEstablismentTypesQuery__
 *
 * To run a query within a React component, call `useGetAllEstablismentTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEstablismentTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEstablismentTypesQuery({
 *   variables: {
 *      opt: // value for 'opt'
 *   },
 * });
 */
export function useGetAllEstablismentTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEstablismentTypesQuery, GetAllEstablismentTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEstablismentTypesQuery, GetAllEstablismentTypesQueryVariables>(GetAllEstablismentTypesDocument, options);
      }
export function useGetAllEstablismentTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEstablismentTypesQuery, GetAllEstablismentTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEstablismentTypesQuery, GetAllEstablismentTypesQueryVariables>(GetAllEstablismentTypesDocument, options);
        }
export type GetAllEstablismentTypesQueryHookResult = ReturnType<typeof useGetAllEstablismentTypesQuery>;
export type GetAllEstablismentTypesLazyQueryHookResult = ReturnType<typeof useGetAllEstablismentTypesLazyQuery>;
export type GetAllEstablismentTypesQueryResult = Apollo.QueryResult<GetAllEstablismentTypesQuery, GetAllEstablismentTypesQueryVariables>;
export const UpdateEstablishmentTypeDocument = gql`
    mutation updateEstablishmentType($id: Int, $args: UpdateTipoEstablecimientoInput) {
  updateTipoEstablecimiento(id: $id, args: $args) {
    id
    nombre
    descripcion
    status
  }
}
    `;
export type UpdateEstablishmentTypeMutationFn = Apollo.MutationFunction<UpdateEstablishmentTypeMutation, UpdateEstablishmentTypeMutationVariables>;

/**
 * __useUpdateEstablishmentTypeMutation__
 *
 * To run a mutation, you first call `useUpdateEstablishmentTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstablishmentTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstablishmentTypeMutation, { data, loading, error }] = useUpdateEstablishmentTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUpdateEstablishmentTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstablishmentTypeMutation, UpdateEstablishmentTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstablishmentTypeMutation, UpdateEstablishmentTypeMutationVariables>(UpdateEstablishmentTypeDocument, options);
      }
export type UpdateEstablishmentTypeMutationHookResult = ReturnType<typeof useUpdateEstablishmentTypeMutation>;
export type UpdateEstablishmentTypeMutationResult = Apollo.MutationResult<UpdateEstablishmentTypeMutation>;
export type UpdateEstablishmentTypeMutationOptions = Apollo.BaseMutationOptions<UpdateEstablishmentTypeMutation, UpdateEstablishmentTypeMutationVariables>;
export const ChangeStatusEstablishmentTypeDocument = gql`
    mutation changeStatusEstablishmentType($id: Int, $status: Boolean) {
  changeTipoEstablecimientoStatus(id: $id, status: $status) {
    id
    status
  }
}
    `;
export type ChangeStatusEstablishmentTypeMutationFn = Apollo.MutationFunction<ChangeStatusEstablishmentTypeMutation, ChangeStatusEstablishmentTypeMutationVariables>;

/**
 * __useChangeStatusEstablishmentTypeMutation__
 *
 * To run a mutation, you first call `useChangeStatusEstablishmentTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeStatusEstablishmentTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeStatusEstablishmentTypeMutation, { data, loading, error }] = useChangeStatusEstablishmentTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useChangeStatusEstablishmentTypeMutation(baseOptions?: Apollo.MutationHookOptions<ChangeStatusEstablishmentTypeMutation, ChangeStatusEstablishmentTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeStatusEstablishmentTypeMutation, ChangeStatusEstablishmentTypeMutationVariables>(ChangeStatusEstablishmentTypeDocument, options);
      }
export type ChangeStatusEstablishmentTypeMutationHookResult = ReturnType<typeof useChangeStatusEstablishmentTypeMutation>;
export type ChangeStatusEstablishmentTypeMutationResult = Apollo.MutationResult<ChangeStatusEstablishmentTypeMutation>;
export type ChangeStatusEstablishmentTypeMutationOptions = Apollo.BaseMutationOptions<ChangeStatusEstablishmentTypeMutation, ChangeStatusEstablishmentTypeMutationVariables>;