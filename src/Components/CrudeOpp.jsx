// import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import states from './json.json'
// import Data from './Data'

// const CrudeOpp = () => {
//     const [data, setData] = () => { }
//     const getLocal = () => {
//         const localList = JSON.parse(localStorage.getItem('list'))
//         return localList || []
//     }

//     const inputData = { name: '', email: '', password: '', confirmpassword: '', number: '', degree: '', gender: '', hobby: '', address: '' }
//     const [input, setInput] = useState(inputData)
//     const [list, setList] = useState(getLocal())
//     // const [cities, setCities] = useState([])
//     const [isEdit, setIsEdit] = useState(false)
//     const [editId, setEditId] = useState(null)
//     const [errors, setErrors] = useState({})

//     const handleChange = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (isEdit) {
//             const newList = [...list]
//             newList[editId] = input
//             setList(newList)
//             setIsEdit(false)
//         } else {
//             setList([...list, input])
//         }
//         setInput(inputData)
//     }
//     // const handleOption = (e) => {
//     //     const value = e.target.value
//     //     const name = e.target.name

//     //     setInput({ ...input, [name]: value })
//     //     if (name === 'state') {
//     //         getDistricts(value)
//     //     }
//     // }
//     // useEffect(() => {
//     //     getDistricts(input.state)
//     // }, [isEdit])

//     // const getDistricts = (state) => {
//     //     states.states.forEach(e => {
//     //         if (e.state === state) {
//     //             setCities(e.districts)
//     //         }
//     //     })
//     // }
//     const handleEdit = (id) => {
//         setInput(list[id])
//         setIsEdit(true)
//         setEditId(id)
//     }

//     const handleDelete = (id) => {
//         const newList = [...list]
//         newList.splice(id, 1)
//         setList(newList)
//     }


//     useEffect(() => {
//         localStorage.setItem('list', JSON.stringify(list))
//     }, [list])

//     const validate = () => {
//         const error = {};
//         if (input.name === "") {
//             error.name = "name is required";
//         }
//         return error;
//     }

//     // const DropDown = ({ name, input, handleOption, states }) => {
//     //     return (
//     //         <select name={name} className='block w-full rounded-md border-0 py-1.5 px-3 ' value={input} onChange={handleOption} disabled={states.length < 1 ? true : false}>
//     //             <option value="">-- select {name} --</option>
//     //             {
//     //                 states.map((state, i) => <option key={i} value={name === 'state' ? state.state : state}>{name === 'state' ? state[name] : state}</option>)
//     //             }
//     //         </select>
//     //     )
//     // }
//     return (
//         <div className="container">
//             <div className='col-6 mx-auto p-5'>
//                 <form onSubmit={handleSubmit}>
//                     <h2 className='text-center'>Registartion Form</h2>
//                     <div className="mb-3">
//                         <label htmlFor="name" className="form-label">Name</label>
//                         <input type="text" name='name' className="form-control" id="name" value={input.name} onChange={handleChange} />
//                         <span>{errors.name ? errors.name : ""}</span>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email address</label>
//                         <input type="email" name='email' className="form-control" id="email" value={input.email} onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input type="password" name='password' className="form-control" id="password" value={input.password} onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
//                         <input type="password" name='confirmpassword' className="form-control" id="confirm-password" value={input.confirmpassword} onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="number" className="form-label">Student Mobile Number</label>
//                         <input type="number" name='number' className="form-control" id="mobile" value={input.number} onChange={handleChange} />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="degree">Degree </label>
//                         <select id="degree" name="degree" value={input.degree} className='form-control' onChange={handleChange} >
//                             <option value="" placeholder='Select your Degree'>Select your Degree</option>
//                             <option value="BCA">BCA</option>
//                             <option value="BBA">BBA</option>
//                             <option value="B.Com">B.Com</option>
//                             <option value="MCA">MCA</option>
//                             <option value="MBA">MBA</option>
//                             <option value="M.Com">M.Com</option>
//                         </select>
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="cars">State City Dependent</label>
//                         <div className='w-1/3 px-3'>
//                             <label htmlFor="state">State</label>
//                             <div className="mt-2">
//                                 <DropDown input={input.state} handleOption={handleOption} states={states.states} name='state' />
//                                 <p className='text-red-400 text-sm'>{errors.state}</p>
//                             </div>
//                         </div>
//                         <div className='w-1/3 px-3'>
//                             <label htmlFor="city">City</label>
//                             <div className="mt-2">
//                                 <DropDown input={input.city} handleOption={handleOption} name='city' states={cities} />
//                                 <p className='text-red-400 text-sm'>{errors.city}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="gender" className="form-label">Gender</label><br />
//                         <input type="radio" name='gender' id="male" value='male' onChange={handleChange} /> Male
//                         <input type="radio" name='gender' id="female" value='female' onChange={handleChange} /> Female
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="hobby">Choose your Hobby:</label>
//                         <select id="hobby" name="hobby" value={input.hobby} className='form-control' onChange={handleChange} >
//                             <option value="" placeholder='Select your Hobby'>Select your Hobby</option>
//                             <option value="Reading">Reading</option>
//                             <option value="Cycling">Cycling</option>
//                             <option value="Walking">Walking</option>
//                             <option value="Cricket">Music</option>
//                         </select>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="address" className="form-label">Address </label>
//                         <textarea name="address" id="add" className="form-control" cols="5" rows="3" value={input.address} onChange={handleChange} ></textarea>
//                     </div>

//                     <div className="mb-3">
//                         <button type="submit" className="btn form-control btn-success">{isEdit ? 'Update' : 'Submit'}</button>
//                     </div>
//                 </form>
//             </div>

//             <Data list={list} handleEdit={handleEdit} handleDelete={handleDelete} />
//         </div>
//     )
// }

// export default CrudeOpp


import React, { useEffect, useState } from 'react'
import states from './json.json'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const CrudeOpps = () => {
    const initialInput = { name: '', email: '', password: '', confirmPassword: '', mobile: '', course: '', hobbies: '', gender: '', state: '', city: '', address: '' }

    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState(initialInput)
    const [cities, setCities] = useState([])
    const [editId, setEditId] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('user-data'))
        if (localData) {
            return localData
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('user-data', JSON.stringify(data))
    }, [data])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleOption = (e) => {
        const value = e.target.value
        const name = e.target.name

        setInput({ ...input, [name]: value })
        if (name === 'state') {
            getDistricts(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const verify = validate()
        if (verify.name || verify.email || verify.password || verify.confirmPassword || verify.mobile || verify.course || verify.gender || verify.state || verify.city || verify.address || verify.hobbies) {
            setErrors(verify)
        } else {
            if (isEdit) {
                const oldData = [...data]
                oldData[editId] = input
                setData(oldData)
                setIsEdit(false)
            } else {
                setData([...data, input])
            }
            resetFields()
            e.target.reset()
        }
    }

    const resetFields = () => {
        setInput(initialInput)
        setCities([])
        setIsEdit(false)
    }

    const validate = () => {
        const errors = {}
        if (input.name.length < 1) {
            errors.name = 'Please Enter Name'
        }
        if (input.email.length < 1) {
            errors.email = 'Please Vaild Email'
        }
        if (input.password.length < 1) {
            errors.password = 'Please Enter Password'
        }
        if (input.confirmPassword.length < 1) {
            errors.confirmPassword = 'Please Enter Confirm Password'
        } else if (input.confirmPassword !== input.password) {
            errors.confirmPassword = 'Confirm Password Is Not match With Password'
        }
        if (input.mobile.length < 1) {
            errors.mobile = 'Please Enter Mobile'
        } else if (input.mobile.length !== 10) {
            errors.mobile = 'Mobile Number Not Correct'
        }
        if (input.course.length < 1) {
            errors.course = 'Please Enter Course'
        }
        if (input.gender.length < 1) {
            errors.gender = 'Select Your Gender'
        }
        if (input.state.length < 1) {
            errors.state = 'Select Your State'
        }
        if (input.city.length < 1) {
            errors.city = 'Select Your City'
        }
        if (input.hobbies.length < 1) {
            errors.hobbies = 'Please Enter Hobbies'
        }
        if (input.address.length < 1) {
            errors.address = 'Please Enter Address'
        }
        return errors
    }

    const handleEdit = (id) => {
        setInput({ ...data[id], id })
        setEditId(id)
        setIsEdit(true)
    }

    const handleDelete = (id) => {
        const oldData = [...data]
        oldData.splice(id, 1)
        setData(oldData)
    }

    useEffect(() => {
        getDistricts(input.state)
    }, [isEdit])

    const getDistricts = (state) => {
        states.states.forEach(e => {
            if (e.state === state) {
                setCities(e.districts)
            }
        })
    }

    // drop down
    const DropDown = ({ name, input, handleOption, states }) => {
        return (
            <select name={name} className='block w-full rounded-md  py-1.5 px-3 ' value={input} onChange={handleOption} disabled={states.length < 1 ? true : false}>
                <option value="">-- select {name} --</option>
                {
                    states.map((state, i) => <option key={i} value={name === 'state' ? state.state : state}>{name === 'state' ? state[name] : state}</option>)
                }
            </select>
        )
    }
    // table
    const Table = ({ data, handleEdit, handleDelete, isEdit }) => {
        return (

            <div className=" flex flex-wrap px-3 col">
                <table className="table striped bordered hover">
                    <thead className="text-xs  uppercase border-b dark:border-gray-700 bg-indigo-500">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Name</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Email</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Password</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Confirm Password</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Gender</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Mobile</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Course</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">State</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">City</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Hobbies</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Address</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) =>
                            <tr className="bg-white border-b" key={i}>
                                <td className="px-6 py-4 border-r ">{e.name}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.email}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.password}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.confirmPassword}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.gender}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.mobile}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.course}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.state}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.city}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.hobbies}</td>
                                <td className="px-6 py-4  border-gray-400">{e.address}</td>
                                <td className="px-6 py-4 d-flex">
                                    <button className='btn btn-primary me-2' onClick={() => handleEdit(i)}>Edit</button>
                                    <button disabled={isEdit} className='btn btn-danger  ' onClick={() => handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <div className=" row  ">
                    <h1 className='text-center'>Registration Form</h1>
                    <div className="col-6 mx-auto p-5 ">
                        <form className="" onSubmit={handleSubmit}>
                            <div className=''>
                                <div className='mb-3'>
                                    <label htmlFor="name" className="form-label" >Name :</label>
                                    <input id="name" className='form-control' name="name" type="text" autoComplete="name" value={input.name} onChange={handleChange} />
                                    <p className='text-danger'>{errors.name}</p>
                                </div>

                                <div className=' md-3'>
                                    <label htmlFor="email" className="block form-label">Email Address :</label>
                                    <input id="email" name="email" type="email" autoComplete="email" className="form-control" value={input.email} onChange={handleChange} />
                                    <p className='text-danger'>{errors.email}</p>
                                </div>

                                <div className=' md-3'>
                                    <label htmlFor="password" className="block form-label">Password :</label>
                                    <input id="password" className='form-control' name="password" type="password" autoComplete="current-password" value={input.password} onChange={handleChange} />
                                    <p className='text-danger'>{errors.password}</p>
                                </div>

                                <div className=' md-3'>
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password :</label>
                                    <input id="confirm-password" className='form-control' name="confirmPassword" type="password" value={input.confirmPassword} onChange={handleChange} />
                                    <p className='text-danger'>{errors.confirmPassword}</p>
                                </div>

                                <div className=' md-3'>
                                    <label htmlFor="mobile" className="form-label">Mobile no. :</label>
                                    <input id="mobile" className='form-control' name="mobile" type="number" value={input.mobile} onChange={handleChange} />
                                    <p className='text-danger'>{errors.mobile}</p>
                                </div>

                                <div className=' mb-3'>
                                    <label htmlFor="course" className="form-label">Course :</label>
                                    <select name='course' className='form-control' value={input.course} onChange={handleChange} >
                                        <option value="">--select course--</option>
                                        <option value="be">B.E</option>
                                        <option value="bcom">B.COM</option>
                                        <option value="bca">BCA</option>
                                        <option value="ba">BA</option>
                                    </select>
                                    <p className='text-danger'>{errors.course}</p>
                                </div>

                                <div className=' mb-3'>
                                    <label htmlFor="gender" className='form-label' >Gender :</label>
                                    <div className="mt-2">
                                        Male
                                        <input id="male" name="gender" value='male' type="radio" className='me-2' onChange={handleChange} />
                                        Female
                                        <input id="female" name="gender" value='female' type="radio" onChange={handleChange} />
                                        <p className='text-danger'>{errors.gender}</p>
                                    </div>
                                </div>

                                <div className=' mb-3'>
                                    <label htmlFor="state" className='form-label'>State :</label>
                                    <div className="mt-2">
                                        <DropDown input={input.state} handleOption={handleOption} states={states.states} name='state' />
                                        <p className='text-danger'>{errors.state}</p>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="city" className='form-label'>City:</label>
                                    <div className="mt-2 ">
                                        <DropDown input={input.city} handleOption={handleOption} name='city' className='form-control' states={cities} />
                                        <p className='text-red-400 text-sm'>{errors.city}</p>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="hobbies" className='form-label'> Hobby:</label>
                                    <select id="hobbies" name="hobbies" value={input.hobbies} className='form-control' onChange={handleChange} >
                                        <option value="" placeholder=' '>--Select your Hobby--</option>
                                        <option value="Reading">Reading</option>
                                        <option value="Cycling">Cycling</option>
                                        <option value="Walking">Walking</option>
                                        <option value="Music">Music</option>
                                    </select>
                                    <p className='text-red-400 text-sm'>{errors.hobbies}</p>

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address" className='form-label'>Address :</label>
                                    <textarea id="address" name="address" rows="2" className="form-control block w-full rounded-md  py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.address} onChange={handleChange}></textarea>
                                    <p className='text-red-400 text-sm'>{errors.address}</p>
                                </div>
                            </div>
                            <div className=' mb-3'>
                                <button type="submit" className='form-control btn bg-success border-0 text-white'>{isEdit ? 'Update' : 'Submit'}</button>
                            </div>
                        </form>
                    </div>

                    <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} isEdit={isEdit} />
                </div>
            </div>
        </>
    )
}

export default CrudeOpps; 