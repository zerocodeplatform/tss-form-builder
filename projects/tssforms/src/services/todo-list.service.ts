import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  description: string;
  done: boolean;
    //template: ;
    // width: ;
    // height: ; 
    // positionX: ;
    // positionY: ; 
    // padding:;
    // language:;
    // label Position: (Top|Left|Right|Inside);
    // errorMessagePosition: (Top|Left|Right|Inside);
    // helpTextPosition: (Top|Left|Right|Inside);
    // className: string;
    // style: string;
    // url: string;
    // dataset: string;
    // method: ; /*(POST|GET|Ajax);*/
    // resumeLater: Boolean;/*(True|False);*/
    // hasCaptcha: Boolean; /*(True|False);*/
    // submissionLimit: ''; /*(Leave blank for unlimited)*/
    // isMultistep:Boolean; /* (True|False)*/
   
    // // numberOfSteps 
    // showStepMeter:Boolean; /* (True|False)*/
    // showProgressbar: Boolean; /* (True|False)*/
   
    // // numberofColumns
    // isEquicolumn: Boolean; /* (True|False)*/
    // layout
    // backgroundColor
    // backgroundImage
    // font
    // textSize
    // textColor
    // titleFont
    // titleTextSize
    // titleTextColor
    // notificationAlerts (True|False)
    // notificationTemplate
    // emailNotification (True|False)
    // emailTemplate
    // sms (True|False)
    // smsTemplate
    // liveValidation (True|False)
    // validationOnSubmit (True|False)
    // validationMessagePosition (Top|BelowField|AboveField|Right)
    // validationTextSize
    // validationTextColor
    // validationHilightColor
    // allowPaste
    // html
    // jsCode
    // call (call any js method)
    // callServer (call any server side method)
    // autocomplete (on|off)
    // target (_blank|_self|_parent|_top)
}

@Injectable()
export abstract class TodoListService {
  /**
   * Returns a list of all of the current user's todos.
   */
  abstract getFormsProperties(): Todo[];
}
