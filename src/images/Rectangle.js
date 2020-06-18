import React from "react";

const Rectangle = ({
    fill = "#FFFFFF",
    size = "60px"
}) => {
    switch (size) {
        case 24:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <g id="rectangle24" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect id="color" fill={fill} x="2" y="2" width="20" height="20"></rect>
                        <path d="M16.8280255,24 C19.2866242,24 21.0828025,23.693454 22.3949045,22.3778606 C23.7070064,21.0494944 24,19.274082 24,16.7961682 L24,7.19105907 C24,4.71314529 23.7070064,2.93773284 22.3949045,1.62213944 C21.0700637,0.306546035 19.2866242,0 16.8280255,0 L7.14649682,0 C4.72611465,0 2.91719745,0.306546035 1.60509554,1.62213944 C0.292993631,2.93773284 0,4.72591804 0,7.16551357 L0,16.7961682 C0,19.274082 0.280254777,21.0622672 1.60509554,22.3778606 C2.92993631,23.693454 4.7133758,24 7.17197452,24 L16.8280255,24 Z M17.1248247,21 L6.87517532,21 C5.54978962,21 4.46423562,20.809993 3.80785414,20.163969 C3.17671809,19.5179451 3,18.4412386 3,17.1111893 L3,6.90147783 C3,5.55876144 3.17671809,4.48205489 3.80785414,3.82336383 C4.4516129,3.1773399 5.54978962,3 6.88779804,3 L17.1248247,3 C18.4502104,3 19.5357644,3.19000704 20.1921459,3.83603096 C20.8232819,4.48205489 21,5.5460943 21,6.8888107 L21,17.1111893 C21,18.4412386 20.8232819,19.5179451 20.1921459,20.163969 C19.5357644,20.809993 18.4502104,21 17.1248247,21 Z" id="stroke" fill="#000000" fillRule="nonzero"></path>
                    </g>
                </svg>
            )
        case 40:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <g id="rectangle40" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <circle id="halo1" fillOpacity="0.35" fill="#0079FF" cx="20" cy="20" r="20"></circle>
                        <rect id="color" fill={fill} x="10" y="10" width="20" height="20"></rect>
                        <path d="M24.8280255,32 C27.2866242,32 29.0828025,31.693454 30.3949045,30.3778606 C31.7070064,29.0494944 32,27.274082 32,24.7961682 L32,15.1910591 C32,12.7131453 31.7070064,10.9377328 30.3949045,9.62213944 C29.0700637,8.30654604 27.2866242,8 24.8280255,8 L15.1464968,8 C12.7261146,8 10.9171975,8.30654604 9.60509554,9.62213944 C8.29299363,10.9377328 8,12.725918 8,15.1655136 L8,24.7961682 C8,27.274082 8.28025478,29.0622672 9.60509554,30.3778606 C10.9299363,31.693454 12.7133758,32 15.1719745,32 L24.8280255,32 Z M25.1248247,29 L14.8751753,29 C13.5497896,29 12.4642356,28.809993 11.8078541,28.163969 C11.1767181,27.5179451 11,26.4412386 11,25.1111893 L11,14.9014778 C11,13.5587614 11.1767181,12.4820549 11.8078541,11.8233638 C12.4516129,11.1773399 13.5497896,11 14.887798,11 L25.1248247,11 C26.4502104,11 27.5357644,11.190007 28.1921459,11.836031 C28.8232819,12.4820549 29,13.5460943 29,14.8888107 L29,25.1111893 C29,26.4412386 28.8232819,27.5179451 28.1921459,28.163969 C27.5357644,28.809993 26.4502104,29 25.1248247,29 Z" id="stroke" fill="#000000" fillRule="nonzero"></path>
                    </g>
                </svg>
            )
        case 50:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <g id="rectangle50" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <circle id="halo1-copy" fillOpacity="0.35" fill="#0079FF" cx="25" cy="25" r="25"></circle>
                        <rect id="color-copy" fill={fill} x="15" y="15" width="20" height="20"></rect>
                        <path d="M29.8280255,37 C32.2866242,37 34.0828025,36.693454 35.3949045,35.3778606 C36.7070064,34.0494944 37,32.274082 37,29.7961682 L37,20.1910591 C37,17.7131453 36.7070064,15.9377328 35.3949045,14.6221394 C34.0700637,13.306546 32.2866242,13 29.8280255,13 L20.1464968,13 C17.7261146,13 15.9171975,13.306546 14.6050955,14.6221394 C13.2929936,15.9377328 13,17.725918 13,20.1655136 L13,29.7961682 C13,32.274082 13.2802548,34.0622672 14.6050955,35.3778606 C15.9299363,36.693454 17.7133758,37 20.1719745,37 L29.8280255,37 Z M30.1248247,34 L19.8751753,34 C18.5497896,34 17.4642356,33.809993 16.8078541,33.163969 C16.1767181,32.5179451 16,31.4412386 16,30.1111893 L16,19.9014778 C16,18.5587614 16.1767181,17.4820549 16.8078541,16.8233638 C17.4516129,16.1773399 18.5497896,16 19.887798,16 L30.1248247,16 C31.4502104,16 32.5357644,16.190007 33.1921459,16.836031 C33.8232819,17.4820549 34,18.5460943 34,19.8888107 L34,30.1111893 C34,31.4412386 33.8232819,32.5179451 33.1921459,33.163969 C32.5357644,33.809993 31.4502104,34 30.1248247,34 Z" id="stroke-copy" fill="#000000" fillRule="nonzero"></path>
                    </g>
                </svg>
            )
        default:
            return (
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <g id="rectangle60" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <circle id="halo1-copy-2" fillOpacity="0.35" fill="#0079FF" cx="30" cy="30" r="30"></circle>
                        <rect id="color-copy-2" fill={fill} x="20" y="20" width="20" height="20"></rect>
                        <path d="M34.8280255,42 C37.2866242,42 39.0828025,41.693454 40.3949045,40.3778606 C41.7070064,39.0494944 42,37.274082 42,34.7961682 L42,25.1910591 C42,22.7131453 41.7070064,20.9377328 40.3949045,19.6221394 C39.0700637,18.306546 37.2866242,18 34.8280255,18 L25.1464968,18 C22.7261146,18 20.9171975,18.306546 19.6050955,19.6221394 C18.2929936,20.9377328 18,22.725918 18,25.1655136 L18,34.7961682 C18,37.274082 18.2802548,39.0622672 19.6050955,40.3778606 C20.9299363,41.693454 22.7133758,42 25.1719745,42 L34.8280255,42 Z M35.1248247,39 L24.8751753,39 C23.5497896,39 22.4642356,38.809993 21.8078541,38.163969 C21.1767181,37.5179451 21,36.4412386 21,35.1111893 L21,24.9014778 C21,23.5587614 21.1767181,22.4820549 21.8078541,21.8233638 C22.4516129,21.1773399 23.5497896,21 24.887798,21 L35.1248247,21 C36.4502104,21 37.5357644,21.190007 38.1921459,21.836031 C38.8232819,22.4820549 39,23.5460943 39,24.8888107 L39,35.1111893 C39,36.4412386 38.8232819,37.5179451 38.1921459,38.163969 C37.5357644,38.809993 36.4502104,39 35.1248247,39 Z" id="stroke-copy-2" fill="#000000" fillRule="nonzero"></path>
                    </g>
                </svg>
            )
    }
};

export default Rectangle;