import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, EyeIcon, EyeOffIcon, FingerPrintIcon, IdentificationIcon, LockClosedIcon, MailIcon, MenuAlt1Icon, OfficeBuildingIcon, SelectorIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cleanErrorData, selectIsLoading, selectUser, signunpPsychologistAsync } from "../../../redux/slices/auth/userSlice";
import { Spinner } from "../../shared/Spinner";

const nationalityList = [
  { name: 'Peruana', id: 1 },
  { name: 'Argentina', id: 2 },
  { name: 'Chilena', id: 3 },
  { name: 'Mexicana', id: 4 },
  { name: 'Brasilera', id: 5 },
  { name: 'Paraguaya', id: 6 },
  { name: 'Española', id: 7 },
]

const countryGradeList = [
  { name: 'Peru', id: 1 },
  { name: 'Argentina', id: 2 },
  { name: 'Chile', id: 3 },
  { name: 'Mexico', id: 4 },
  { name: 'Brasil', id: 5 },
  { name: 'Paraguay', id: 6 },
  { name: 'España', id: 7 },
]

const gradeStatusList = [
  { name: 'Si', id: 1 },
  { name: 'No', id: 2 },
  { name: 'En proceso', id: 3 },
]

const specializationStatusList = [
  { name: 'Si', id: 1 },
  { name: 'No', id: 2 },
  { name: 'En proceso de titulación', id: 3 },
  { name: 'En proceso del trámite de cédula de grado', id: 4 },
]

const referralList = [
  { name: 'Facebook', id: 1 },
  { name: 'Linkedin', id: 2 },
  { name: 'Instagram', id: 3 },
  { name: 'Tiktok', id: 4 },
  { name: 'Amigos', id: 5 },
  { name: 'Familiares', id: 6 },
  { name: 'Busqueda en internet', id: 7 },
  { name: 'Otros', id: 7 },
]

export const SignUpPsychologist = () => {

  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const [isShowing, setIsShowing] = useState(false);
  const [notEmail, setNotEmail] = useState(false);

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneNumberRef = useRef();

  const [selectedNationality, setSelectedNationality] = useState(nationalityList[0]);
  const [selectedCountryGrade, setSelectedCountryGrade] = useState(countryGradeList[0]);
  const [selectedGradeStatus, setSelectedGradeStatus] = useState(gradeStatusList[0]);
  const [selectedSpecializationStatus, setSelectedSpecializationStatus] = useState(specializationStatusList[0]);
  const [selectedReferral, setSelectedReferral] = useState(referralList[0]);

  const experienceYearsRef = useRef();

    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading) ?? false;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value !== "") {
      const psychologist = {
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        nationality: selectedNationality.name,
        country_grade: selectedCountryGrade.name,
        experience_years: experienceYearsRef.current.value,
        grade_status: selectedGradeStatus.name,
        specialization_status: selectedSpecializationStatus.name,
        referral: selectedReferral.name,
      }
      dispatch(signunpPsychologistAsync(psychologist));
    } else {
      setNotEmail(true);
    }
  }

  const handleError = () => {
    // dispatch(setPasswordIsIncorrect(false));
    // dispatch(setEmailNotFound(false));
    // dispatch(setMinLengthPassword(false));
    // dispatch(setInvalidEmail(false));
  }

  const cleanError = () => {
    dispatch(cleanErrorData({}));
  }

  const handleChange = () => {
    setNotEmail(false);
    // setUserNotFound(false);
    // setErrorPassword(false);
    // setErrorMinLenPassword(false);
    // setErrorInvalidEmail(false);
    handleError();
  }

  useEffect(() => {
    if (user) navigate('/psychologist/dashboard');
    // eslint-disable-next-line
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <p className="text-[0.9rem] font-medium text-center">Regístrate</p>
        <div className="flex items-center justify-center cursor-default">
          <div className="flex items-center px-4 py-2 space-x-2 rounded-md bg-stone-100 hover:bg-stone-200/80">
            <FaRegBuilding/>
            <p className="font-medium text-[0.95rem]">Psicólogo</p>
          </div>
        </div>
      </div>
      <p className="py-2 text-sm text-center">¿Eres cliente? Regístrate <Link to="/signup/client" className="font-bold text-brand-green-500">aquí</Link></p>
      <div className="w-full mx-auto mt-3 mb-2 space-y-2">
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
            Nombres
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              ref={firstnameRef}
              id="firstname"
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md focus:ring-2 peer focus:text-gray-700 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300 valid:border-green-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
              <IdentificationIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
            Apellidos
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              ref={lastnameRef}
              id="lastname"
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md focus:ring-2 peer focus:text-gray-700 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300 valid:border-green-500"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <IdentificationIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              ref={emailRef}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer focus:text-gray-700 invalid:border-red-600 invalid:text-red-600 invalid:focus:ring-red-100 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <MailIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
          {
            notEmail ? <p className="mt-1 text-sm font-medium text-red-500">Ingresar un correo.</p> : <></>
          }
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type={!isShowing ? 'password' : 'text'}
              name="password"
              onChange={handleChange}
              ref={passwordRef}
              required
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer md:font-medium focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <LockClosedIcon className="w-5 h-5" />
              </span>
            </div>
            <button
              onClick={() => {
                setIsShowing((isShowing) => !isShowing);
              }}
              type="button"
              className="absolute peer-focus:text-brand-green-500 text-gray-500 border-l peer-focus:border-brand-blue-500 inset-y-0 right-0 pl-2 pr-2.5 flex items-center"
            >
              {
                isShowing === true ? (
                  <span className="sm:text-sm">
                    <EyeIcon className="w-5 h-5" />
                  </span>
                ) : (
                  <span className="sm:text-sm">
                    <EyeOffIcon className="w-5 h-5" />
                  </span>
                )
              }
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              name="phoneNumber"
              onChange={handleChange}
              ref={phoneNumberRef}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer focus:text-gray-700 invalid:border-red-600 invalid:text-red-600 invalid:focus:ring-red-100 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <MailIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
            Nacionalidad
          </label>
          <Listbox value={selectedNationality} onChange={setSelectedNationality}>
            <div className="relative z-10 mt-1">
              <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-sm text-left text-gray-700 bg-white border rounded-lg cursor-default border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-gray-200 focus-visible:ring-offset-2">
                <span className="block truncate">{selectedNationality.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {nationalityList.map((nationality, nationalityIdx) => (
                    <Listbox.Option
                      key={nationalityIdx}
                      className={({ active }) =>
                        `${active ? 'text-brand-green-500 bg-brand-green-500 bg-opacity-20' : 'text-gray-900'}
                              cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={nationality}
                    >
                      {({ selectedNationality, active }) => (
                        <>
                          <span
                            className={`${
                              selectedNationality ? 'font-bold' : 'font-medium'
                            } block truncate`}
                          >
                            {nationality.name}
                          </span>
                          {selectedNationality ? (
                            <span
                              className={`${
                                active ? 'text-brand-green-500' : 'text-brand-green-500'
                              }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div>
          <label htmlFor="country_grade" className="block text-sm font-medium text-gray-700">
            País de estudios
          </label>
          <Listbox value={selectedCountryGrade} onChange={setSelectedCountryGrade}>
            <div className="relative z-10 mt-1">
              <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-sm text-left text-gray-700 bg-white border rounded-lg cursor-default border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-gray-200 focus-visible:ring-offset-2">
                <span className="block truncate">{selectedCountryGrade.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {countryGradeList.map((countryGrade, countryGradeIdx) => (
                    <Listbox.Option
                      key={countryGradeIdx}
                      className={({ active }) =>
                        `${active ? 'text-brand-green-500 bg-brand-green-500 bg-opacity-20' : 'text-gray-900'}
                              cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={countryGrade}
                    >
                      {({ selectedCountryGrade, active }) => (
                        <>
                          <span
                            className={`${
                              selectedCountryGrade ? 'font-bold' : 'font-medium'
                            } block truncate`}
                          >
                            {countryGrade.name}
                          </span>
                          {selectedCountryGrade ? (
                            <span
                              className={`${
                                active ? 'text-brand-green-500' : 'text-brand-green-500'
                              }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div>
          <label htmlFor="grade_status" className="block text-sm font-medium text-gray-700">
            ¿Eres psicólogo titulado?
          </label>
          <Listbox value={selectedGradeStatus} onChange={setSelectedGradeStatus}>
            <div className="relative z-10 mt-1">
              <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-sm text-left text-gray-700 bg-white border rounded-lg cursor-default border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-gray-200 focus-visible:ring-offset-2">
                <span className="block truncate">{selectedGradeStatus.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {gradeStatusList.map((gradeStatus, gradeStatusIdx) => (
                    <Listbox.Option
                      key={gradeStatusIdx}
                      className={({ active }) =>
                        `${active ? 'text-brand-green-500 bg-brand-green-500 bg-opacity-20' : 'text-gray-900'}
                              cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={gradeStatus}
                    >
                      {({ selectedGradeStatus, active }) => (
                        <>
                          <span
                            className={`${
                              selectedGradeStatus ? 'font-bold' : 'font-medium'
                            } block truncate`}
                          >
                            {gradeStatus.name}
                          </span>
                          {selectedGradeStatus ? (
                            <span
                              className={`${
                                active ? 'text-brand-green-500' : 'text-brand-green-500'
                              }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div>
          <label htmlFor="grade_status" className="block text-sm font-medium text-gray-700">
            ¿Tienes especialización o maestría en el área clínica?
          </label>
          <Listbox value={selectedSpecializationStatus} onChange={setSelectedSpecializationStatus}>
            <div className="relative z-10 mt-1">
              <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-sm text-left text-gray-700 bg-white border rounded-lg cursor-default border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-gray-200 focus-visible:ring-offset-2">
                <span className="block truncate">{selectedSpecializationStatus.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {specializationStatusList.map((specializationStatus, specializationStatusIdx) => (
                    <Listbox.Option
                      key={specializationStatusIdx}
                      className={({ active }) =>
                        `${active ? 'text-brand-green-500 bg-brand-green-500 bg-opacity-20' : 'text-gray-900'}
                              cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={specializationStatus}
                    >
                      {({ selectedSpecializationStatus, active }) => (
                        <>
                          <span
                            className={`${
                              selectedSpecializationStatus ? 'font-bold' : 'font-medium'
                            } block truncate`}
                          >
                            {specializationStatus.name}
                          </span>
                          {selectedSpecializationStatus ? (
                            <span
                              className={`${
                                active ? 'text-brand-green-500' : 'text-brand-green-500'
                              }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div>
          <label htmlFor="experience_years" className="block text-sm font-medium text-gray-700">
            Años de experiencia clínica
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              name="experienceYears"
              onChange={handleChange}
              ref={experienceYearsRef}
              className="block w-full py-2 pl-10 pr-3 text-sm text-gray-600 border rounded-md peer focus:text-gray-700 invalid:border-red-600 invalid:text-red-600 invalid:focus:ring-red-100 focus:ring-2 focus:ring-brand-green-500/50 focus:border-transparent focus:outline-none border-slate-300"
              required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-auto peer-focus:text-brand-green-500">
              <span className="sm:text-sm">
                <MailIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="grade_status" className="block text-sm font-medium text-gray-700">
            ¿Cómo te enteraste de PsicologiaMia?
          </label>
          <Listbox value={selectedReferral} onChange={setSelectedReferral}>
            <div className="relative z-10 mt-1">
              <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-sm text-left text-gray-700 bg-white border rounded-lg cursor-default border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-gray-200 focus-visible:ring-offset-2">
                <span className="block truncate">{selectedReferral.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {referralList.map((referral, referralIdx) => (
                    <Listbox.Option
                      key={referralIdx}
                      className={({ active }) =>
                        `${active ? 'text-brand-green-500 bg-brand-green-500 bg-opacity-20' : 'text-gray-900'}
                              cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={referral}
                    >
                      {({ selectedReferral, active }) => (
                        <>
                          <span
                            className={`${
                              selectedReferral ? 'font-bold' : 'font-medium'
                            } block truncate`}
                          >
                            {referral.name}
                          </span>
                          {selectedReferral ? (
                            <span
                              className={`${
                                active ? 'text-brand-green-500' : 'text-brand-green-500'
                              }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="flex items-start justify-start w-full mt-5 mb-3 space-x-1.5">
        <input type="checkbox" id="tyc" required className="w-4 h-4 rounded border border-gray-300 focus:ring-transparent text-brand-green-500" />
        <label htmlFor="tyc" className="text-[0.7rem]">Acepto las Condiciones de Uso y Política de privacidad</label>
      </div>
      <motion.button
        type={isLoading ? "button" : "submit"}
        whileHover={{ scale: 1.03 }}
        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white border border-transparent rounded-md bg-brand-green-500 focus:outline-none"
      >
        {isLoading ? <Spinner/> : 'Registrarme'}
      </motion.button>
      <div className="flex py-2.5 text-[0.85rem] items-center justify-center space-x-1">
        <p>¿Ya estás registrado?</p>
        <p>Inicia sesión <Link to="/login" onClick={() => cleanError()} className="font-bold text-brand-green-500">aquí</Link></p>
      </div>
    </form>
  )
}
