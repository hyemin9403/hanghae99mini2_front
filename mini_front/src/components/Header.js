import React from 'react';

import { Grid, Button } from '../elements';
import { history } from "../redux/configureStore";

const Header = () => {


    // const is_login = useSelector((state) => state.user.is_login);

    
        return (
            <>  
                <Grid is_flex width={"1000px"} padding="4px 16px" >
                    <Grid>
                        <h1>네가 스터디</h1>
                    </Grid>
                    <Grid is_flex  width={"210px"} justify_content={"space-between"}>
                        <Button  width='100px' text="회원가입"  _onClick={() => {history.push('/signup')}}></Button>
                        <Button  width='100px' text="로그인" _onClick={() => {history.push('/login')}}></Button>
                    </Grid>
                </Grid>   
            </>
        
        );
    
}

export default Header;