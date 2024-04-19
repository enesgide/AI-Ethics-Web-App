import React from 'react'
import Loadable from 'react-loadable'
import {Card} from 'semantic-ui-react'

export default function withLoadable(comp){
    return Loadable({
        loader:comp,
        loading:(props)=>{
            if(props.error){
                return <Card style={{width:'100%', height:'100%'}}>
                    Loading error, please refresh.
                    </Card>;
            }
            else if(props.timedOut){
                return <Card style={{width:'100%', height:'100%'}}>
                    Loading times out, please refresh.
                    </Card>;
            }
            else if(props.pastDelay){
                return <Card style={{width:'100%', height:'100%'}}>
                    Loading delay, please refresh.
                    </Card>;
            }
            else{
                return null;
            }
        },
        timeout: 10000
    })
}