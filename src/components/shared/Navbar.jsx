import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <NavLink to="/" className="navbar-brand">หน้าหลัก</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">หน้าหลัก</NavLink>
                </li>                
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">ติดต่อเรา</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/service" className="nav-link">ทุนการศึกษา</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">เกี่ยวกับเรา</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        บริการอื่นๆ
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink className="dropdown-item" to="/">บัณฑิตวิทยาลัย</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/">มหาวิทยาลัย นเรศวร</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/">โปรแกรมมิ่ง</NavLink></li>
                    </ul>
                </li>

            </ul>
            
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
