import React from 'react';

import chatForm from '../ChatForm';

//import classes from './Chat.module.css';


import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  container: {
    bottom: 0
    // position: "fixed" // remove this so we can apply flex design
  },
  bubbleContainer: {
    width: "100%",
    display: "flex" //new added flex so we can put div at left and right side
    //check style.css for left and right classnaeme based on your data
  },
  bubble: {
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    display: "inline-block",
  },
  user: {
    justifyContent: "flex-end"
  },
  other: {
    justifyContent: "flex-start"
  }
}));


const ChatContainer = (props) => {

    const classes = useStyles();

    // return(
    //     <div className={classes.container}>
            
    //         <div className={classes.bubbleContainer}>
    //             <div className={classes.chatBubble}>
    //                 <div>bruh</div>
    //             </div>
    //         </div>

    //         <div className={classes.bubbleContainer}>
    //             <div className={classes.chatBubble}>
    //                 <div>kay</div>
    //             </div>
    //         </div>
    //     </div>
    // );

    const dummyData = [
        {
          message: "1: This should be in left",
          sender: "other"
        },
        {
          message: "2: This should be in right",
          sender: "user"
        },
        {
          message: "3: This should be in left again",
          sender: "other"
        },
        {
          message: "4: This should be in right again",
          sender: "user"
        }
      ];
      
      //need to virtualize scroll it
      const chatBubbles = dummyData.map((obj, i = 0) => {
          if(obj.sender === "user")
          {
            return <div className={`${classes.bubbleContainer} ${classes.user}`} key={i}>
                <div key={i++} className={classes.bubble} style={{backgroundColor: "#2196f3"}}>
                <div className={classes.button}>{obj.message}</div>
                </div>
            </div>
          } else {
            return <div className={`${classes.bubbleContainer} ${classes.other}`} key={i}>
                <div key={i++} className={classes.bubble} style={{backgroundColor: "#C0C0C0"}}>
                    <div className={classes.button}>{obj.message}</div>
                </div>
            </div>
          }
        // <div className={`${classes.bubbleContainer} ${classes.user}`} key={i}>
        //   <div key={i++} className={classes.bubble}>
        //     <div className={classes.button}>{obj.message}</div>
        //   </div>
        // </div>
        });
      return <div className={classes.container}>{chatBubbles}</div>;
};


export default ChatContainer;