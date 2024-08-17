import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import ErrorPage from "../Pages/ErrorPaage";
import Home from "../Pages/Home";
import Login from "../Components/Login&Register/Login";
import Register from "../Components/Login&Register/Register";
import About from "../Pages/About";
import PrivateRoutes from "./PrivateRoutes";
import Services from "../Components/Services/Services";
import SqlInj from "../Components/Services/SQL/SqlInj";
import Cookie from "../Components/Services/Cookie/Cookie";
import XSS from "../Components/Services/XSS/XSS";
import Phishing from "../Components/Services/phishing/Phishing";
import Ddos from "../Components/Services/Ddos/Ddos";
import Malware from "../Components/Services/Malware/Malware";
import Method_1 from './../Components/Services/SQL/Method_1';
import Method_2 from "../Components/Services/SQL/Method_2";
import Method_3 from "../Components/Services/SQL/Method_3";
import Cookie_No_Sql from "../Components/Services/Cookie/Cookie_No_Sql";
import Cookie_Sql from "../Components/Services/Cookie/Cookie_Sql";
import Methods from "../Components/Services/XSS/Methods";
import Detection from "../Components/Services/XSS/Detection";
import Detection_Phishing from "../Components/Services/phishing/Detection_Phishing";
import Detect_Implement from "../Components/Services/phishing/Detect_Implement";
import Ddos_Methods from "../Components/Services/Ddos/Ddos_Methods";
import Ddos_Sql from "../Components/Services/Ddos/Ddos_Sql";
import Ddos_Nosql from "../Components/Services/Ddos/Ddos_Nosql";
import MalwareDetection from "../Components/Services/Malware/Malware_Detection";
import Documentation from "../Components/Documentation/Documentation";
import SQL from './../Components/Documentation/SQL';
import Cookie_Session from "../Components/Documentation/Cookie_Session";
import XSS_Doc from "../Components/Documentation/XSS_Doc";
import PhishingDetection from "../Components/Documentation/PhishingDetection";
import DDoSPrevention from "../Components/Documentation/DDoSPrevention";
import MalwareDetectionDoc from "../Components/Documentation/MalwareDetectionDoc";
import Profile from "../Pages/Profile";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
    
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path:'/documentation',
        element:<PrivateRoutes><Documentation></Documentation></PrivateRoutes>
      },
      {
        path:'/docsql',
        element:<PrivateRoutes><SQL></SQL></PrivateRoutes>

      },
      {
        path:'/doccookie',
        element:<PrivateRoutes><Cookie_Session></Cookie_Session></PrivateRoutes>

      },
      {
        path:'/docxss',
        element:<PrivateRoutes><XSS_Doc></XSS_Doc></PrivateRoutes>

      },
      {
        path:'/docphishing',
        element:<PrivateRoutes><PhishingDetection></PhishingDetection></PrivateRoutes>

      },
      {
        path:'/docddos',
        element:<PrivateRoutes><DDoSPrevention></DDoSPrevention></PrivateRoutes>

      },
      {
        path:'/docmalware',
        element:<PrivateRoutes><MalwareDetectionDoc></MalwareDetectionDoc></PrivateRoutes>

      },
      {
        path: '/services',
        element: <PrivateRoutes><Services></Services></PrivateRoutes>,
      },

      {
        path: '/services/sql',
        element: <PrivateRoutes><SqlInj></SqlInj></PrivateRoutes>,
        children: [
          {
            path: 'method1',
            element: <Method_1></Method_1>,
          },
          {
            path: 'method2',
            element: <Method_2></Method_2>,
          },
          {
            path: 'method3',
            element: <Method_3></Method_3>,
          },
        ],
      },
      {
        path: '/services/cookie',
        element: <PrivateRoutes><Cookie></Cookie></PrivateRoutes>,
        children:[
            {
              path:'cookie_sql',
              element:<Cookie_Sql></Cookie_Sql>
            },
            {
              path:'cookie_nosql',
              element:<Cookie_No_Sql></Cookie_No_Sql>
            }


        ]


      },
      {
        path: '/services/xss',
        element: <PrivateRoutes><XSS></XSS></PrivateRoutes>,
        children:[

          {
            path:'xss_methods',
            element:<Methods></Methods>

          },
          {
            path:'xss_detection',
            element:<Detection></Detection>
          }




        ]
      },
      {
        path: '/services/phishing',
        element: <PrivateRoutes><Phishing></Phishing></PrivateRoutes>,
        children:[
          {
            path:'phsihing_methods',
            element:<Detection_Phishing></Detection_Phishing>
          },
          {
            path:'phishing_detection',
            element:<Detect_Implement></Detect_Implement>
          }




        ]
      },
      {
        path: '/services/ddos',
        element: <PrivateRoutes><Ddos></Ddos></PrivateRoutes>,
        children:[
          {
            path:'ddos_methods',
            element:<Ddos_Methods></Ddos_Methods>
          },
          {
            path:'ddos_sql',
            element:<Ddos_Sql></Ddos_Sql>
          },
          {
            path:'ddos_nosql',
            element:<Ddos_Nosql></Ddos_Nosql>
          }


        ]
      },
      {
        path: '/services/malware',
        element: <PrivateRoutes><Malware></Malware></PrivateRoutes>,
        children:[
          {
            path:'malware_detection',
            element:<MalwareDetection></MalwareDetection>
          }
        ]
      },
    ],
  },
]);
