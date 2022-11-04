import React from 'react';

class Games extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >
                 <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src="https://cdn-icons.flaticon.com/png/512/664/premium/664883.png?token=exp=1656678337~hmac=5e379804b7e7483f51406bc6ff099d82" alt=''></img>
                    </div>
                <div style={{width : '100%' , height : '90%'}}>
                    <img style={styles.image} src="https://media1.giphy.com/media/o3Vt7LBQZa8pi/giphy.gif?cid=790b7611b75ff1356f846b6ed656001280514de44300121c&rid=giphy.gif&ct=g" alt='' />
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}


export default Games;