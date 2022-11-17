import {useState} from 'react';
import ReactDOM from "react-dom";
import './Profil.css';

function Profil(){
    //state for registration 
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [batch, setBatch] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [labNum, setLabNum]=useState ('');
    const [lab, setLab]=useState('');

    //state checking error 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    //Handling the name change 
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    //handling the studentId change 
    const handleStudentId = (e) => {
        setStudentId(e.target.value);
        setSubmitted(false);
    }
    //handling batch change 
    const handleBatch = (e) => {
        setBatch(e.target.value);
        setSubmitted(false);
    }
    //handling email change 
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    //handling password change 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }
    //handling phone change 
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    }
    //handling labNum change 
    const handleLabNum = (e) => {
        setLabNum(e.target.value);
        setSubmitted(false);
    }
    //handling lab change 
    const handleLab = (e) => {
        setLab(e.target.value);
        setSubmitted(false);
    }
    //handling the form submission 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || studentId === '' || batch === ''|| 
        email === '' || password ==='' || phone ==='' || labNum ===''
        || lab === '' ){
            setError(true);
        }else {
            setSubmitted(true);
            setError(false);
        }
        };
    //showing success message 
    const successMessage = () => {
        return (
            <div className='success'
            style = {{
                display: submitted ? '' : 'none',
            }}>
                <h1>Data siswa berhasil disimpan!</h1>
            </div>
        );
    };
    //showing error message if error is true 
    const errorMessage = () => {
        return (
        <div className='error'
        style = {{
            display: error ? '': 'none',
        }}>
            <h1>Please enter all the field</h1>
        </div>
        );
    };
    
    return (
        <div className='title'>
            <div>
                <h1>Profil</h1>
            </div>
        
        <div className="message">
            {errorMessage()}
            {successMessage()}
        </div>
        <form>
            <tr>
                <td><label>Nama</label></td>
                <td><input onChange={handleName}className="input" value={name} type="text" required></input></td>
            </tr>
            <tr>
                <td><label>NIM</label></td>
                <td><input onChange={handleStudentId}className="input" value={studentId} type="text" required></input></td>
            </tr>
            <tr>
                <td><label>Batch</label></td>
                <td><input onChange={handleBatch}className="input"value={batch} type="text" required></input></td>
            </tr>
            <tr>
                <td><label>Email</label></td>
                <td><input onChange ={handleEmail}className="input" value={email} type="text"required></input></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input onChange= {handlePassword}className="input" value={password} type="text"required></input></td>
            </tr>
            <tr>
                <td><label>No.Hp</label></td>
                <td><input onChange= {handlePhone}className="input" value={phone} type="text"required></input></td>
            </tr>
            <tr>
                <td><label>Nomor Laboratorium</label></td>
                <td><input onChange= {handleLabNum}className="input" value={labNum} type="text" required></input></td>
            </tr>
            <tr>
                <td><label>Tempat Laboratorium</label></td>
                <td><input onChange= {handleLab}className="input" value={lab} type="text" required></input></td>
            </tr>
            <button onClick={handleSubmit} className="btn"type="submit">
                    Simpan Data Peserta
            </button>
        </form>
    </div>
    );
    
    }
export default Profil;
