let express=require('express');
let app=express();
const userModel=require('./Model/userModel')
const planmodel=require('./Model/planModel');
const authRouter=require('./Router/authRouter');
const userRouter=require('./Router/userRouter');
const planRouter=require('./Router/planRouter');
const reviewRouter=require('./Router/reviewRouter');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
app.use(cookieParser());
app.use(express.json());
app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/plans',planRouter);
app.use('/reviews',reviewRouter);
let testjson={
    "mobile": {
        "type": "scaffold",
        "configs": {},
        "children": []
    },
    "desktop": {
        "type": "scaffold",
        "configs": {
            "bg_color": "000000"
        },
        "children": [
            {
                "type": "column",
                "configs": {},
                "children": [
                    {
                        "type": "container",
                        "configs": {
                            "height": 0.49968498120749966,
                            "width": 0.8000604458464884,
                            "decoration": {
                                "color": "000000",
                                "borderRadius": {
                                    "circular": 0
                                }
                            },
                            "margin": {
                                "top": 0.15552151904234288,
                                "bottom": 0.015518167118245331,
                                "left": 0.11963544721805819,
                                "right": 0.11965965555876264
                            },
                            "padding": {
                                "top": 0.007759083559122666,
                                "bottom": 0.007759083559122666,
                                "left": 0.007759083559122666,
                                "right": 0.007759083559122666
                            }
                        },
                        "children": [
                            {
                                "type": "container",
                                "configs": {
                                    "height": 0.4779595472419562,
                                    "width": 0.7819007494766117,
                                    "decoration": {
                                        "color": "000000",
                                        "borderRadius": {
                                            "circular": 0
                                        }
                                    },
                                    "margin": {
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0
                                    },
                                    "padding": {
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0
                                    }
                                },
                                "children": [
                                    {
                                        "type": "row",
                                        "configs": {
                                            "mainAxisAlignment": "center"
                                        },
                                        "children": [
                                            {
                                                "type": "container",
                                                "configs": {
                                                    "height": 0.4779595472419562,
                                                    "width": 0.7819007494766117,
                                                    "decoration": {
                                                        "color": "000000",
                                                        "borderRadius": {
                                                            "circular": 0
                                                        }
                                                    },
                                                    "margin": {
                                                        "top": 0,
                                                        "bottom": 0,
                                                        "left": 0,
                                                        "right": 0
                                                    },
                                                    "padding": {
                                                        "top": 0,
                                                        "bottom": 0,
                                                        "left": 0,
                                                        "right": 0
                                                    }
                                                },
                                                "children": [
                                                    {
                                                        "type": "column",
                                                        "configs": {
                                                            "mainAxisAlignment": "start"
                                                        },
                                                        "children": [
                                                            {
                                                                "type": "text",
                                                                "configs": {
                                                                    "color": "ffffff",
                                                                    "fontSize": "16px",
                                                                    "fontWeight": "400",
                                                                    "textAlign": "center",
                                                                    "text": "Login\n        "
                                                                }
                                                            },
                                                            {
                                                                "type": "text",
                                                                "configs": {
                                                                    "color": "ffffff",
                                                                    "fontSize": "16px",
                                                                    "fontWeight": "400",
                                                                    "textAlign": "start",
                                                                    "text": "Insert your text here\n        "
                                                                }
                                                            },
                                                            {
                                                                "type": "text",
                                                                "configs": {
                                                                    "color": "ffffff",
                                                                    "fontSize": "16px",
                                                                    "fontWeight": "400",
                                                                    "textAlign": "start",
                                                                    "text": "Insert your text here\n        "
                                                                }
                                                            },
                                                            {
                                                                "type": "container",
                                                                "configs": {
                                                                    "height": 0.07759083559122666,
                                                                    "width": 0.39094064632953623,
                                                                    "decoration": {
                                                                        "color": "000000",
                                                                        "borderRadius": {
                                                                            "circular": 0
                                                                        }
                                                                    },
                                                                    "margin": {
                                                                        "top": 0.031036334236490663,
                                                                        "bottom": 0.015518167118245331,
                                                                        "left": 0.2338634339220926,
                                                                        "right": 0.2338634339220926
                                                                    },
                                                                    "padding": {
                                                                        "top": 0.007759083559122666,
                                                                        "bottom": 0.007759083559122666,
                                                                        "left": 0.007759083559122666,
                                                                        "right": 0.007759083559122666
                                                                    }
                                                                },
                                                                "children": [
                                                                    {
                                                                        "type": "container",
                                                                        "configs": {
                                                                            "height": 0.055865401625683195,
                                                                            "width": 0.37278094995965955,
                                                                            "decoration": {
                                                                                "color": "000000",
                                                                                "borderRadius": {
                                                                                    "circular": 0
                                                                                }
                                                                            },
                                                                            "margin": {
                                                                                "top": 0,
                                                                                "bottom": 0,
                                                                                "left": 0,
                                                                                "right": 0
                                                                            },
                                                                            "padding": {
                                                                                "top": 0,
                                                                                "bottom": 0,
                                                                                "left": 0,
                                                                                "right": 0
                                                                            }
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "type": "row",
                                                                                "configs": {
                                                                                    "mainAxisAlignment": "center"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "type": "container",
                                                                                        "configs": {
                                                                                            "height": 0.055865401625683195,
                                                                                            "width": 0.37278094995965955,
                                                                                            "decoration": {
                                                                                                "color": "000000",
                                                                                                "borderRadius": {
                                                                                                    "circular": 0
                                                                                                }
                                                                                            },
                                                                                            "margin": {
                                                                                                "top": 0,
                                                                                                "bottom": 0,
                                                                                                "left": 0,
                                                                                                "right": 0
                                                                                            },
                                                                                            "padding": {
                                                                                                "top": 0,
                                                                                                "bottom": 0,
                                                                                                "left": 0,
                                                                                                "right": 0
                                                                                            }
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "type": "column",
                                                                                                "configs": {
                                                                                                    "mainAxisAlignment": "start"
                                                                                                },
                                                                                                "children": [
                                                                                                    {
                                                                                                        "type": "text",
                                                                                                        "configs": {
                                                                                                            "color": "000000",
                                                                                                            "fontSize": "16px",
                                                                                                            "fontWeight": "400",
                                                                                                            "textAlign": "start",
                                                                                                            "text": "Login Now"
                                                                                                        }
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
app.get("/testjson",(req,res)=>{
    res.json(testjson);
});
app.listen(5000,()=>{
    console.log("server running on port 5000");
});