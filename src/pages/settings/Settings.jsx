import './Settings.css';

export const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label htmlFor="Profile Picture"></label>
                <div className="settingsPP">
                    <img src="./../images/PP.JPG" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settinsPPIcon fa-regular fa-circle-user"></i>
                        <input type="file" id='fileInput' style={{display:'none'}} />
                    </label>
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Joshua' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Joshua@gmail.com' />
                <label htmlFor="">Password</label>
                <input type="password" />
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}
